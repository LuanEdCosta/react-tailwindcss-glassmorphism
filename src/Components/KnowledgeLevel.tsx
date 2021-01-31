import React from 'react'

export interface KnowledgeLevelProps {
  className?: string
  style?: React.CSSProperties
  subject: string
  knowledgeLevel: number
}

export const KnowledgeLevel: React.FC<KnowledgeLevelProps> = (props) => {
  const { className, style, subject, knowledgeLevel } = props

  return (
    <div
      className={`rounded-2xl bg-white bg-opacity-20 p-4 flex flex-col ${className}`}
      style={{
        backdropFilter: 'blur(10px)',
        ...(style || {}),
      }}
    >
      <div className="font-black text-white text-3xl mb-2">{subject}</div>

      <div
        className="w-full bg-purple-700 bg-opacity-70 rounded-full text-white text-center mt-auto py-1 font-bold"
        style={{ maxWidth: `${knowledgeLevel}%` }}
      >{`${knowledgeLevel}%`}</div>
    </div>
  )
}
