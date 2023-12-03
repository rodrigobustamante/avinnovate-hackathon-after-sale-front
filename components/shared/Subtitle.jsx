
export const Subtitle = ({ name }) => {
    return (
      <section className='flex w-full px-6 font-extrabold text-lg capitalize'>
        <h2 id={`subtitle-${name}`}>{name}</h2>
      </section>
    )
  }
  