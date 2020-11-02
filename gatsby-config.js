module.exports = {
  siteMetadata: {
    title: `otto-s`,
    description: `Otto-s website`,
    author: `@maartenlouage`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Otto-s`,
        short_name: `Otto-s`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      },
    },
    `gatsby-plugin-postcss`,
    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //       url: {
    //           development: "http://localhost:3000/vehicles",
    //           production: "http://localhost:3000/vehicles"
    //       },
    //       imageKeys: ["images"],
    //       rootKey: "Vehicles",
    //       schemas: {
    //         data: `[data]`,
    //         data: `
    //             id: String
    //             brand_name: String
    //             model_name: model_name
    //             version: String
    //             CO2_emissions: String
    //         `,
    //         model_name: `
    //             nl: String
    //         `,
    //         model_slug: `
    //             nl: String
    //         `,
    //         description: `
    //             nl: String
    //         `,
    //         pollution_class_name: `
    //             nl: String
    //         `
    //       }
    //   }
    // },
    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //       url: {
    //           development: "http://localhost:3000/options",
    //           production: "http://localhost:3000/options"
    //       },
    //       rootKey: "Options",
    //       schemas: {
    //         data: `[data]`,
    //         data: `
    //             id: String
    //             type: String
    //             model_name: model_name
    //             version: String
    //             CO2_emissions: String
    //         `,
    //         name: `
    //             nl: String
    //         `,
    //       }
    //   }
    // }
  ]
}
