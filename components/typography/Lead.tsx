import React from 'react'

const Lead = ({children, className}: TypographyProps) => {
  return (
    <p className={`text-xl text-muted-foreground ${className}`}>
      {children}
    </p>
  )
}

export default Lead