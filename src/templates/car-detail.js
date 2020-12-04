import React from 'react';
import { graphql } from 'gatsby';

import Car from "../components/car"

export const query = graphql`
    query($carID: String!) {
        vehicle(id: { eq: $carID }) {
            brandName
            modelName
            version
            price
            options
        }
    }

`;

const CarDetailTemplate = ({ data }) => (
    <>
        <Car />
        <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
);

export default CarDetailTemplate;