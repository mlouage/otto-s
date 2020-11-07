require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const VEHICLE_NODE_TYPE = `Vehicle`;

const fetch = require('node-fetch');

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    reporter
}) => {
    const { createNode, createTypes } = actions;

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
            colorMetallic: String
            interiorMainColorId: Int
            interiorSecondaryColorId: Int
            interiorMmaterialId: Int
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
        }
    `;
    createTypes(typeDefs);

    const url = process.env.GOCAR_API_URL_VEHICLES;

    if (!url)
    {
        reporter.panicOnBuild("No GoCar API URL defined in the environment variables");
        return;
    }

    reporter.info(`GoCAR API URL: ${url}`);

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
            interior_material_id: interiorMmaterialId,
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
            interiorMainColorId,
            interiorSecondaryColorId,
            interiorMmaterialId,
            options,
            images,
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