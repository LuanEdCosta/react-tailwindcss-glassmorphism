import React from 'react'

export interface KnowledgeLevelProps {
  className?: string
  style?: React.CSSProperties
  iconComponent: React.ReactNode
  languageName: string
  experience: string
}

export const KnowledgeLevel: React.FC<KnowledgeLevelProps> = (props) => {
  const { className, style, iconComponent, languageName, experience } = props

  return (
    <div
      className={`rounded-2xl bg-white bg-opacity-20 p-4 flex flex-col relative ${className}`}
      style={{
        backdropFilter: 'blur(10px)',
        ...(style || {}),
      }}
    >
      <div className="font-black text-white text-5xl absolute top-2 right-2">
        {iconComponent}
      </div>

      <div className="text-white text-lg font-bold mb-2 mt-4">
        {languageName}
      </div>

      <div className="text-white">{experience}</div>
    </div>
  )
}
