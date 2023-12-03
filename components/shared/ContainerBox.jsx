
export const ContainerBox = ({ children, css }) => {
  return (
    <section className={`px-6 py-3 ${css}`}>
      {children}
    </section>
  )
}
