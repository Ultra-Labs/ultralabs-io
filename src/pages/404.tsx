import React from "react";
import { Link } from "gatsby";
import Layout from "components/Layout";
import NotFoundStyle from "assets/styles/pages/404.style";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundStyle>
        <div className="container text-center">
          <StaticImage src="../assets/images/404.png" alt="" />
          <h1>OOPS!</h1>
          <p className="body1">The page you were looking for was not found</p>
          <div>
            <Link className="buttonLink" to="/">
              Return home
            </Link>
            <Link className="buttonLink" to="/contact-us/">
              Report a problem
            </Link>
          </div>
        </div>
      </NotFoundStyle>
    </Layout>
  );
};

export default NotFoundPage;
