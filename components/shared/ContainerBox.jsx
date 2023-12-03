export const ContainerBox = ({ children, css, px = "px-6 mb-10 md:mb-0" }) => {
  return <section className={`${px} py-3 ${css}`}>{children}</section>;
};
