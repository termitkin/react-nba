import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page404 = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="content">
        <h1 className="heading">Error 404: Page not found</h1>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Page404;
