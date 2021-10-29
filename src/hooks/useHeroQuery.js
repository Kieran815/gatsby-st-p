import { useStaticQuery, graphql } from 'gatsby';

// look into line `wpPage(databaseId: {eq: 47}) {` if issue with changing hero image for church site

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql `
    query HeroImageQuery {
      wpPage(databaseId: {eq: 47}) {
        id
        ACF_HomePage {
          heroText
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }  
  `)
  return data;
}