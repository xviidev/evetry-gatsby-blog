import React from 'react'

const Container = ({ children, as = 'div' }) => {
  const Tag = as

  return (
    <Tag className="px-2 md:px-3 lg:px-5 w-full max-w-screen-xl m-auto">
      {children}
    </Tag>
  )
}

export default Container
