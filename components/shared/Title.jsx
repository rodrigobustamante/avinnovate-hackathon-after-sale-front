import React from 'react'

export const Title = ({ name }) => {
  return (
    <section className='flex w-full px-6 font-extrabold text-2xl capitalize'>
      <h1 id={`title-${name}`}>{name}</h1>
    </section>
  )
}
