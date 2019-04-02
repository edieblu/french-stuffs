import React from "react"

const VocabularyName = props => {
  const { children } = props
  return (
    <span
      style={{
        color: `white`,
        padding: `5px`,
        borderRadius: `2px`,
        backgroundColor: `black`,
      }}
    >
      {children}
    </span>
  )
}

export default VocabularyName
