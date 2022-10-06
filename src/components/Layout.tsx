import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ResetStyles from "assets/styles/ResetStyles";
import GlobalStyles from "assets/styles/GlobalStyles";
import BaseStyles from "assets/styles/BaseStyles";
import Typography from "assets/styles/Typography";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* styles */}
      <ResetStyles />
      <GlobalStyles />
      <BaseStyles />
      <Typography />
      {/* components */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
