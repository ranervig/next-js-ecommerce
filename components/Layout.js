import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
