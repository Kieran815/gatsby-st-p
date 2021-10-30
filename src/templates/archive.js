import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout/Layout';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

// import ArchiveSideBar

import { Wrapper, ContentWrapper, PageContent, StyledH2, StyledDate, StyledReadMore } from './archive.styles';

// lower case `a` because it is a template, not a component
const archiveTemplate = () => (
  <Layout>
    Archive
  </Layout>
)

export default archiveTemplate;