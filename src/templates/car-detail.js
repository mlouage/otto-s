import React from 'react';
import { graphql } from 'gatsby';

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
    <pre>{JSON.stringify(data, null, 4)}</pre>
);

export default CarDetailTemplate;