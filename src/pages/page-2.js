import * as React from "react";
// may take out, depends on what I end up doing.
import { Link } from "gatsby"


import SEO from "../components/SEO/SEO";
import Layout from '../components/Layout/Layout';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
