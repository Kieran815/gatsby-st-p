import { useStaticQuery, graphql } from "gatsby"

// look into line `wpPage(databaseId: {eq: 47}) {` if issue with changing hero image for church site
// removed from line 15/16: , placeholder: BLURRED
export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: {eq: 2}) {
        id
        ACF_HomePage {
          heroText
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920)
              }
            }
          }
        }
      }
    }
  `)
  return data
}
