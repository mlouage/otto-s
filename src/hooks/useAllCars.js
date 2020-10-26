import { useStaticQuery, graphql } from "gatsby";

const useAllCars = () => {
  const data = useStaticQuery(graphql`
    query AllCars {
      allFile(
        filter: { publicURL: { regex: "/xxl_/" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          publicURL
        }
      }
    }
  `);

  const imagesSet = new Set();

  data.allFile.nodes.map((image) => imagesSet.add(image.name.split("_", 2)[1]));

  const images = [...imagesSet];

  const cars = [];

  images.forEach((image) => {
    const imagesForCar = data.allFile.nodes.filter((node) => (
        node.name.includes(image)
    ));

    cars[image] = imagesForCar;
  });

  return cars;
};

export default useAllCars;
