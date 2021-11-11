import { useStaticQuery, graphql } from "gatsby";

export const useQuoteQuery = () => {
  const data = useStaticQuery(graphql`
    query QuoteQuery {
      wpPage(databaseId: {eq: 2}) {
        ACF_HomePage {
          quotation1Author
          quotation1Text
        }
      }
    }
  `)
  return data;
}