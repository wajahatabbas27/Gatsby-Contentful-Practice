exports.createPages = async function ({ graphql, actions }) {

    const query = await graphql(`
          query {    
            allContentfulBlogPost {
                edges {
                  node {
                    title
                    publishDate
                    slug
                  }
                }
              }
              }
          `);

    console.log(JSON.stringify(query));

    const posts = query.data.allContentfulBlogPost.edges;

    posts.map((post) => {
        actions.createPage({
            path: post.node.slug,
            component: require.resolve(`./src/templates/blog-post.js`),
            context: post.node,
        });
    })


    console.log("End of Gatsby Node File");
}