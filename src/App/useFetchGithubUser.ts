import { AxiosResponse } from 'axios'
import { useLayoutEffect, useState } from 'react'
import { GitHubAPI } from 'src/Services'

type ResponseData = Partial<App.GithubUser>

const useFetchGithubUser = (userName: string) => {
  const [userData, setUserData] = useState<ResponseData>({})
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    const fetchUser = async () => {
      try {
        const response: AxiosResponse<ResponseData> = await GitHubAPI.get(
          `/users/${userName}`,
        )

        setUserData(response.data)
      } catch (e) {
        setUserData({})
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [userName])

  return {
    isLoading,
    userData,
  }
}

export default useFetchGithubUser
