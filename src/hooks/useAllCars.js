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

  // query {
  //   allGoCar {
  //     nodes {
  //       data {
  //         id
  //         brand_name
  //         model_name {
  //           nl
  //         }
  //         version
  //         images {
  //           url
  //         }
  //         first_registration(formatString: "MM-YYYY")
  //         kilometers
  //         engine_power_kw
  //         horse_power
  //         price
  //       }
  //     }
  //   }
  // }

  // query {
  //   allGoCar(filter: {data: {elemMatch: {id: {eq: 627219}}}}) {
  //     nodes {
  //       data {
  //         id
  //         brand_name
  //         model_name {
  //           nl
  //         }
  //       }
  //     }
  //   }
  // }
  

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
