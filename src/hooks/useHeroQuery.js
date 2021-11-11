import { useStaticQuery, graphql } from "gatsby"

// look into line `wpPage(databaseId: {eq: 47}) {` if issue with changing hero image for church site

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      wpPage(databaseId: {eq: 2}) {
        id
        ACF_HomePage {
          heroText
          heroImage {
            link
          }
        }
      }
    }
  `)
  return data
}
