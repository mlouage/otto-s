import React from "react"
import { graphql } from "gatsby"
import Cars from "../components/cars"

export const query = graphql`
  query {
    allVehicle(sort: {fields: price, order: ASC}) {
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
        autoscout24Images
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
