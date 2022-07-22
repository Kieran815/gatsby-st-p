import { useStaticQuery, graphql } from "gatsby";

export const useCTAAreaQuery = () => {
  const data = useStaticQuery(graphql`

    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720, placeholder: DOMINANT_COLOR)
        }
      }
    }

    query CTAQuery {
      cta: wpPage(databaseId: {eq: 2}) {
        id
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta4Link
          cta4Text
          cta1Image {
            ...ctaImage
          }
          cta2Image {
            ...ctaImage
          }
          cta3Image {
            ...ctaImage
          }

          cta4Image {
            ...ctaImage
          }
        }
      }
    }
  
  `)
  return data;
}