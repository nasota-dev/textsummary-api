import axios from 'axios'

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  }
})
export async function summaryText(text:string): Promise<string> {
  const prompt = `Resuma o seguinte texto de forma clara e objetiva:\n\n${text}`
  const response = await openai.post('/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages:[{ role: 'user', content: prompt}],
    temperature:0.5,
    max_tokens:300
  })
  const resumo = response.data.choices[0].messages.content.trim()
  return resumo
}
