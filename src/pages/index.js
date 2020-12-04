import React from "react"
import { graphql } from "gatsby"
import Cars from "../components/cars"

export const query = graphql`
  query {
    allVehicle {
      nodes {
        id
        brandName
        modelName
        version
        firstRegistration(formatString: "MM/YYYY")
        kilometers
        horsePower
        price
        slug
        images
      }
    }
  }
`

const IndexPage = ({ data: { allVehicle: { nodes: cars }} }) => (
  <>
    <Cars data={cars}/>
  </>
)

export default IndexPage;
