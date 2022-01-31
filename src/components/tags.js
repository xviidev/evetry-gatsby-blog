import React from 'react'

const Tags = ({ tags }) =>
  tags?.length > 0 &&
  tags.map((tag, index) => (
    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
      {tag}{(tags?.length > 1  && (index + 1) !== tags?.length)  && ' • '}
    </span>
  ))

export default Tags
