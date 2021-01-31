import { AxiosResponse } from 'axios'
import { useLayoutEffect, useState } from 'react'
import { GitHubAPI } from 'src/Services'

type ResponseData = Partial<App.GithubUser>

const useFetchGithubUser = (userName: string) => {
  const [userData, setUserData] = useState<ResponseData>({})

  useLayoutEffect(() => {
    const fetchUser = async () => {
      try {
        const response: AxiosResponse<ResponseData> = await GitHubAPI.get(
          `/users/${userName}`,
        )

        setUserData(response.data)
      } catch (e) {
        setUserData({})
      }
    }

    fetchUser()
  }, [userName])

  return {
    userData,
  }
}

export default useFetchGithubUser
