
import Header from "./Header";

const Layout = ({ children,siteSettings }) => {
  return (
    <>

      <header className="relative lg:sticky top-0 z-40">
        <Header />
      </header>

      <main>{children}</main>

    </>
  );
};

export default Layout;
