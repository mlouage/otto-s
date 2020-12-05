import React from 'react';
import { graphql } from 'gatsby';

import Car from "../components/car"

export const query = graphql`
    query($carID: String!) {
        vehicle(id: { eq: $carID }) {
            CO2Emissions
            brandName
            carpassCheck
            colorMetallic
            crashed
            cylinderCapacity
            description
            VAT
            VATdeductible
            batteryCapacity
            batteryRental
            bodyStyleId
            brandId
            builtYear(formatString: "MM/YYYY")
            dimensionHeight
            dimensionLength
            dimensionWidth
            enginePowerKw
            firstRegistration(formatString: "MM/YYYY")
            fiscalHorsePower
            fuelTypeId
            gearboxId
            horsePower
            id
            images
            inStock
            inspectionValidUntil
            interiorMmaterialId
            interiorMainColorId
            interiorSecondaryColorId
            kilometers
            modelId
            modelName
            nonSmokingVehicle
            numberOfCylinders
            numberOfDoors
            numberOfGears
            numberOfPreviousOwners
            numberOfSeats
            onDiscount
            paintTypeId
            options
            pollutionClassName
            price
            priceExclTax
            professionalPrice
            purchasePrice
            serviceCheckBook
            slug
            smokeFilter
            sold
            totalPriceOfRepairs
            transmissionId
            trunkCapacity
            vehicleType
            version
            weight
            vin
            warrantyMonths
            gearBox
            fuelType
            transmission
        }
    }

`;

const CarDetailTemplate = ({ data: { vehicle } }) => (
    <>
        <Car vehicle={ vehicle }/>
        <pre>{JSON.stringify(vehicle, null, 4)}</pre>
    </>
);

export default CarDetailTemplate;