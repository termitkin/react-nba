import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page404 = () => {
  return (
    <div className="wrapper">
      <Header />
      <section className="content">
        <h1 className="heading">Error 404: Page not found</h1>
      </section>
      <Footer />
    </div>
  );
};

export default Page404;
