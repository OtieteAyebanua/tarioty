import Footer from "./footer";
import Navbar from "./navbar";

interface ILayout {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      <div> {children}</div>
      <Footer />
    </>
  );
};
export default Layout;
