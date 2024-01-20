import React from 'react'

interface iBaseTitleProps{
  children: React.ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4'| 'span';
  color: 'purple' | 'purple2' | 'white' | 'gray';
  fontSize?: 'title' | 'subTitle' | 'span';
}

const BaseTitle = ({ children, tag }: iBaseTitleProps) => {
  return (
    <>
      {tag === 'h1' && <h1>{children}</h1>}
      {tag === 'h2' && <h2>{children}</h2>}
      {tag === 'h3' && <h3>{children}</h3>}
      {tag === 'h4' && <h4>{children}</h4>}
      {tag === 'span' && <span>{children}</span>}
    </>
  )
}

export default BaseTitle