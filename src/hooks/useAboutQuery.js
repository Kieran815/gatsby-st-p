import { useStaticQuery, graphql } from 'gatsby';

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(databaseId: {eq: 2}) {
        content
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)
  return data;
}