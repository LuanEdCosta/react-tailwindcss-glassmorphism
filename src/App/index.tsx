import React from 'react'
import { FiGithub, FiLinkedin, FiMessageSquare, FiUser } from 'react-icons/fi'
import { KnowledgeLevel } from 'src/Components'

import useFetchGithubUser from './useFetchGithubUser'

const App: React.FC = () => {
  const { userData } = useFetchGithubUser('LuanEdCosta')

  return (
    <div className="flex flex-row justify-center items-center h-full bg-app-background bg-center bg-no-repeat bg-cover">
      <main
        className="flex flex-row bg-white bg-opacity-10 rounded-3xl  overflow-hidden w-full max-w-5xl shadow-2x1 m-6"
        style={{
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          className="py-8 px-6 bg-white bg-opacity-10 max-w-xs"
          style={{
            backdropFilter: 'blur(10px)',
          }}
        >
          <img
            className="rounded-full w-40 h-40 mb-4 border-2 border-white select-none mx-auto"
            src={userData.avatar_url}
            alt={userData?.name}
            draggable={false}
          />

          <div className="text-white text-lg font-black flex items-center mb-2">
            <FiUser />
            <span className="ml-4">{userData?.name}</span>
          </div>

          {!!userData?.bio && (
            <div className="text-white flex items-center">
              <FiMessageSquare />
              <span className="ml-4">{userData?.bio}</span>
            </div>
          )}

          <div className="flex flex-row flex-wrap justify-center">
            <a
              href="https://github.com/LuanEdCosta"
              className="rounded-full w-14 h-14 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-2 transition-all"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/luan-eduardo-costa-aaab591a7/"
              className="rounded-full w-14 h-14 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-2 transition-all"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="flex-1 p-8 grid grid-rows-2 grid-cols-2 gap-4">
          <KnowledgeLevel subject="TypeScript" knowledgeLevel={95} />
          <KnowledgeLevel subject="JavaScript" knowledgeLevel={95} />
          <KnowledgeLevel subject="React" knowledgeLevel={90} />
          <KnowledgeLevel subject="React Native" knowledgeLevel={92} />
        </div>
      </main>
    </div>
  )
}

export default App
