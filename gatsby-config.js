module.exports = {
    siteMetadata: {
        description: "Personal page of Camille Feghali",
        locale: "en",
        title: "Camille Feghali",
        formspreeEndpoint: "https://formspree.io/f/xqkjbgnb",
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,

        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                theme: "classic",
            },
        },
    ],
};
