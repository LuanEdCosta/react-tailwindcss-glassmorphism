import Axios from 'axios'

export const GitHubAPI = Axios.create({
  baseURL: 'https://api.github.com',
})
