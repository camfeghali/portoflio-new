module.exports = {
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
