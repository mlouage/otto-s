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
            builtYear(formatString: "MM/YYYY")
            dimensionHeight
            dimensionLength
            dimensionWidth
            enginePowerKw
            firstRegistration(formatString: "MM/YYYY")
            fiscalHorsePower
            horsePower
            id
            images
            inStock
            inspectionValidUntil
            kilometers
            modelName
            nonSmokingVehicle
            numberOfCylinders
            numberOfDoors
            numberOfGears
            numberOfPreviousOwners
            numberOfSeats
            onDiscount
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
            trunkCapacity
            vehicleType
            version
            weight
            vin
            warrantyMonths
            gearBox
            fuelType
            transmission
            bodyStyle
            mainColor
            interiorMaterial
            interiorMainColor
            interiorSecondaryColor
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