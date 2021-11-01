import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout/Layout';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

// import ArchiveSideBar

import { Wrapper, ContentWrapper, PageContent, StyledH2, StyledDate, StyledReadMore } from './archive.styles';

// lower case `a` because it is a template, not a component
const archiveTemplate = ({ data: {allWpPost} }) => (
  <Layout>
    <StaticImage
      // Change Image Source for Church
      src="../images/archive_headerimage.png" 
      placeholder="TRACED_SVG"
      width={1920}
      height={300}
      alt="Archive Hero"
    />
    <Wrapper>
      <BreadCrumb
        parent={{
          // maybe update uri if time
          uri: "/blog/all-posts",
          title: "blog",
        }}
      />
    </Wrapper>
  </Layout>
)

export default archiveTemplate;

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { 
        categories: { 
          nodes: { 
            elemMatch: { 
              id: { 
                eq: $catId
              } 
            } 
          } 
        } 
      }
      skip: $skip,
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`