import axios from 'axios'

const API_KEY = process.env.GEMINI_API_KEY
if(!API_KEY) {
  throw new Error("the GEMINI_API_KEY environment variable is not set.")
}
const gemini = axios.create({
  baseURL:'https://generativelanguage.googleapis.com/v1beta/models',
  headers:{
    'Content-Type': 'application/json',
    'X-goog-api-key': API_KEY
  },
})
export async function summaryText(text:string): Promise<string> {
  const prompt = `Resuma o seguinte texto de forma clara e objetiva:\n\n${text}`
    try {
    const response = await gemini.post(`/gemini-2.0-flash:generateContent`, {
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 300,
      },
    });
    const summary = response.data.candidates[0].content.parts[0].text.trim();
    return summary;
  } catch (error) {
    console.error('Error generating summary with Gemini:', error);
    throw new Error('Não foi possível gerar o resumo. Tente novamente mais tarde.');
  }
}
