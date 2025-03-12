import { ReactNode } from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <HeroSection />
      {children}  {/* Allow child components to be rendered here */}
      <Footer />
    </>
  );
};

export default Layout;
