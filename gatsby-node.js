require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const VEHICLE_NODE_TYPE = `Vehicle`;
const fetch = require('node-fetch');

const slugify = str => {
    const slug = str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    return `aanbod/${slug}`.replace(/\/\/+/g, '/');
};

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: 'eval-source-map',
    })
}

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    reporter
}) => {
    const { createNode, createTypes } = actions;

    const url = process.env.GOCAR_API_URL_VEHICLES;

    if (!url) {
        reporter.panicOnBuild("No GoCar API URL defined in the environment variables.");
        return;
    }

    reporter.info(`GoCAR API URL: ${url}`);

    const typeDefs = `
        type ${VEHICLE_NODE_TYPE} implements Node {            
            brandId: Int
            brandName: String
            modelId: Int
            modelName: String
            version: String
            description: String
            vehicleType: String
            fuelTypeId: Int
            numberOfDoors: Int
            numberOfSeats: Int
            bodyStyleId: Int
            gearboxId: Int
            numberOfGears: Int
            transmissionId: Int
            smokeFilter: Boolean
            horsePower: Int
            fiscalHorsePower: Int
            enginePowerKw: Int
            cylinderCapacity: Int
            numberOfCylinders: Int
            batteryCapacity: Float
            kilometers: Int
            warrantyMonths: Int
            builtYear: Date
            firstRegistration: Date
            numberOfPreviousOwners: Int
            nonSmokingVehicle: Boolean
            inspectionValidUntil: Date
            CO2Emissions: Int
            serviceCheckBook: Boolean
            vin: String
            paintTypeId: Int
            mainColorId: Int
            colorMetallic: String
            interiorMainColorId: Int
            interiorSecondaryColorId: Int
            interiorMaterialId: Int
            weight: Float
            trunkCapacity: Float
            dimensionWidth: Float
            dimensionLength: Float
            dimensionHeight: Float
            purchasePrice: Float
            priceExclTax: Float
            VAT: Float
            price: Float
            totalPriceOfRepairs: Float
            professionalPrice: Float
            discount: Float
            onDiscount: Boolean
            VATdeductible: Boolean
            batteryRental: String
            sold: Boolean
            carpassCheck: String
            crashed: Boolean
            inStock: Boolean
            pollutionClassName: String
            options: [String]
            slug: String
            images: [String]
            fuelType: String
            gearBox: String
            transmission: String
            bodyStyle: String
            mainColor: String
            interiorMaterial: String
            interiorMainColor: String
            interiorSecondaryColor: String
        }
    `;
    createTypes(typeDefs);

    const response = await fetch(url);
    const data = await response.json();

    data.data.forEach(vehicle => {

        const {
            id,
            brand_id: brandId,
            brand_name: brandName,
            model_id: modelId,
            model_name: { nl: modelName } = {},
            version,
            description: { nl: description } = {},
            vehicle_type: vehicleType,
            fuel_type_id: fuelTypeId,
            number_of_doors: numberOfDoors,
            number_of_seats: numberOfSeats,
            body_style_id: bodyStyleId,
            gearbox_id: gearboxId,
            number_of_gears: numberOfGears,
            transmission_id: transmissionId,
            smoke_filter: smokeFilter,
            horse_power: horsePower,
            fiscal_horse_power: fiscalHorsePower,
            engine_power_kw: enginePowerKw,
            cylinder_capacity: cylinderCapacity,
            number_of_cylinder: numberOfCylinders,
            battery_capacity: batteryCapacity,
            kilometers,
            warranty_months: warrantyMonths,
            built_year: builtYear,
            first_registration: firstRegistration,
            number_of_previous_owners: numberOfPreviousOwners,
            non_smoking_vehicle: nonSmokingVehicle,
            inspection_valid_until: inspectionValidUntil,
            CO2_emissions: CO2Emissions,
            service_check_book: serviceCheckBook,
            vin,
            paint_type_id: paintTypeId,
            color_metallic: colorMetallic,
            interior_main_color_id: interiorMainColorId,
            interior_secondary_color_id: interiorSecondaryColorId,
            interior_material_id: interiorMaterialId,
            main_color_id: mainColorId,
            options,
            images,
            weight,
            trunk_capacity: trunkCapacity,
            dimension_width: dimensionWidth,
            dimension_length: dimensionLength,
            dimension_height: dimensionHeight,
            purchase_price: purchasePrice,
            price_excl_tax: priceExclTax,
            VAT,
            price,
            total_price_of_repairs: totalPriceOfRepairs,
            professional_price: professionalPrice,
            discount,
            on_discount: onDiscount,
            VAT_deductible: VATdeductible,
            battery_rental: batteryRental,
            sold,
            carpass_check: carpassCheck,
            crashed,
            in_stock: inStock,
            pollution_class_name: { nl: pollutionClassName } = {}
        } = vehicle;

        const imageUrls = [];

        for (const { url } of images) {
            imageUrls.push(url);
        }

        createNode({
            id,
            brandId,
            brandName,
            modelId,
            modelName,
            version,
            description,
            vehicleType,
            fuelTypeId,
            numberOfDoors,
            numberOfSeats,
            bodyStyleId,
            gearboxId,
            numberOfGears,
            transmissionId,
            smokeFilter,
            horsePower,
            fiscalHorsePower,
            enginePowerKw,
            cylinderCapacity,
            numberOfCylinders,
            batteryCapacity,
            kilometers,
            warrantyMonths,
            builtYear,
            firstRegistration,
            numberOfPreviousOwners,
            nonSmokingVehicle,
            inspectionValidUntil,
            CO2Emissions,
            serviceCheckBook,
            vin,
            paintTypeId,
            colorMetallic,
            mainColorId,
            interiorMainColorId,
            interiorSecondaryColorId,
            interiorMaterialId,
            options,
            images: imageUrls,
            weight,
            trunkCapacity,
            dimensionWidth,
            dimensionLength,
            dimensionHeight,
            purchasePrice,
            priceExclTax,
            VAT,
            price,
            totalPriceOfRepairs,
            professionalPrice,
            discount,
            onDiscount,
            VATdeductible,
            batteryRental,
            sold,
            carpassCheck,
            crashed,
            inStock,
            pollutionClassName,
            id: createNodeId(`${VEHICLE_NODE_TYPE}-${id}`),
            parent: null,
            children: [],
            internal: {
                type: VEHICLE_NODE_TYPE,
                content: JSON.stringify({ id }),
                contentDigest: createContentDigest({ id }),
            },
        })
    })

    return
}

exports.createResolvers = ({ createResolvers }) => {
    const optionsUrl = process.env.GOCAR_API_URL_OPTIONS;

    if (!optionsUrl) {
        console.log("No GoCar Options API URL defined in the environment variables.");
        return;
    }

    const attributesUrl = process.env.GOCAR_API_URL_ATTRIBUTES;

    if (!attributesUrl) {
        console.log("No GoCar Attributes API URL defined in the environment variables.");
        return;
    }

    const transformOptions = async (options) => {
        const transformedOptions = [];
        for (const option of options) {
            const response = await fetch(`${optionsUrl}/${option}`);
            const data = await response.json();
            const name = data.name.nl;

            console.log(`Translated ID ${option} into ${name}`);
            transformedOptions.push(name);
        }

        return transformedOptions;
    }

    const transformAttributeFromId = async (attributeId) => {
        if (!attributeId) {
            return
        }
        
        const response = await fetch(`${attributesUrl}/${attributeId}`);
        const data = await response.json();
        const name = data.name.nl;
        console.log(`Translated ID ${attributeId} into ${name}`);

        return name;
    }

    createResolvers({
        Vehicle: {
            slug: {
                resolve: source => slugify(`${source.brandName}-${source.modelName}-${source.version}`)
            },
            options: {
                resolve: source => transformOptions(source.options)
            },
            fuelType: {
                resolve: source => transformAttributeFromId(source.fuelTypeId)
            },
            gearBox: {
                resolve: source => transformAttributeFromId(source.gearboxId)
            },
            transmission: {
                resolve: source => transformAttributeFromId(source.transmissionId)
            },
            mainColor: {
                resolve: source => transformAttributeFromId(source.mainColorId)
            },
            bodyStyle: {
                resolve: source => transformAttributeFromId(source.bodyStyleId)
            },
            interiorMaterial: {
                resolve: source => transformAttributeFromId(source.interiorMaterialId)
            },
            interiorMainColor: {
                resolve: source => transformAttributeFromId(source.interiorMainColorId)
            },
            interiorSecondaryColor: {
                resolve: source => transformAttributeFromId(source.interiorSecondaryColorId)
            },
        }
    });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allVehicle(sort: {fields: price, order: DESC}) {
                nodes {
                    id
                    slug
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panic('Error loading cars', result.errors);
        return;
    }

    const cars = result.data.allVehicle.nodes;

    cars.forEach(car => {
        const slug = car.slug;

        reporter.info(`Creating page for ID: ${car.id} with slug ${slug}`);

        actions.createPage({
            path: `${slug}`,
            component: require.resolve('./src/templates/car-detail.js'),
            context: {
                carID: car.id
            }
        });
    });
};