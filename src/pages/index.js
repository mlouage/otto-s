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

const IndexPage = ({ data: { allVehicle: { nodes: cars } } }) => (
  <>
    <div className="text-gray-600 uppercase tracking-wide text-sm">Aanbod</div>
    <h1 className="font-bold text-2xl mt-8 mb-8">Onze selectie otto-s</h1>
    <Cars data={cars} />
  </>
)

export default IndexPage;
