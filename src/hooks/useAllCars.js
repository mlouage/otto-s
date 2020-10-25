import { useStaticQuery, graphql } from 'gatsby';

export const useAllCarImages = () => {
  const { allFile: { nodes } } = useStaticQuery(graphql`
    query AllCarImages {
        allFile(filter: {publicURL: {regex: "/xxl_/"}}, sort: {fields: name, order: ASC}) {
            nodes {
                publicURL
                name
            }
        }
    }
  `);

  return nodes;
};