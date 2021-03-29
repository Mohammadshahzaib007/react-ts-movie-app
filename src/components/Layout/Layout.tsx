import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Topbar />
      <main
        style={{ marginTop: "6.25rem"}}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
