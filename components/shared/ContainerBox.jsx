export const ContainerBox = ({ children, css, px = "px-6" }) => {
  return <section className={`${px} py-3 ${css}`}>{children}</section>;
};
