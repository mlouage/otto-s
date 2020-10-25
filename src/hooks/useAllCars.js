import { useStaticQuery, graphql } from "gatsby"

const useAllCars = () => {
    const data = useStaticQuery(graphql`
        query AllCars {
            allFile(filter: {publicURL: {regex: "/xxl_/"}}, sort: {fields: name, order: ASC}) {
                nodes {
                    name
                    publicURL
                }
            }
        }
    `);

    const images = new Set();

    data.allFile.nodes.map(image => (        
        images.add(image.name.split("_", 2)[1])
    ));

    // return array of arrays, key is image and array are all the image for that car

    return [...images];
}

export default useAllCars;