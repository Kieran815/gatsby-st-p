import { useStaticQuery, graphql } from "gatsby";

// check renaming `cta: wpPage...` with church wp page

 // removed from line 11/12: , placeholder: TRACED_SVG
export const useCTAQuery = () => {
  const data = useStaticQuery(graphql`

    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720)
        }
      }
    }

    query CTAQuery {
      cta: wpPage(databaseId: {eq: 2}) {
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta1Image {
            ...ctaImage
          }
          cta2Image {
            ...ctaImage
          }
          cta3Image {
            ...ctaImage
          }
        }
      }
    }
  `)
  return data;
}