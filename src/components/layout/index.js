import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../header";
import Footer from "../footer";

import "../../../sass/style.scss";

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title="Gatsby React Boilerplate" />
    <Header />
    {children}
    <Footer />
  </>
);

export default TemplateWrapper;
