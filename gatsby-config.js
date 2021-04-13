module.exports = {
    plugins: [
        "gatsby-plugin-typescript",
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `374pb3ddawli`,
                accessToken: `vZ-xiQJAa0DQy6YaW7cB5OXOnf9ICL2bum80caKqrUg`,
            },
        },
    ],
};