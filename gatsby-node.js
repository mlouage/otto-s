const VEHICLE_NODE_TYPE = `Vehicle`;

const fetch = require('node-fetch');

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
}) => {
    const { createNode, createTypes } = actions;

    const typeDefs = `
        type ${VEHICLE_NODE_TYPE} implements Node {
            brandName: String
            version: String
            price: Float
        }
    `;
    createTypes(typeDefs);

    const response = await fetch('http://localhost:3000/vehicles');
    const data = await response.json();

    data.data.forEach(vehicle => {

        const {
            id,
            brand_name: brandName,
            version,
            price
        } = vehicle;

        createNode({
            brandName,
            version,
            price,
            id: createNodeId(`${VEHICLE_NODE_TYPE}-${id}`),
            parent: null,
            children: [],
            internal: {
                type: VEHICLE_NODE_TYPE,
                content: JSON.stringify({id, brandName, version, price}),
                contentDigest: createContentDigest({id, brandName, version, price}),
            },
        })
    })

    return
}