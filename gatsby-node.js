exports.createPages = async function ({ graphql, actions}) {

  const query = await graphql(`
        query {    
            allContentfulAllContentfulBlogPost {
                    edges {
                        node {
                            title
                            slug
                            body
                            publishTime
                        }
                    }
                }
            }
        `);

    console.log(JSON.stringify(query));

    const posts =   query.data.allContentfulAllContentfulBlogPost.edges;

    posts.map((post) => {
        actions.createPage({
            path: post.node.slug,
            component: require.resolve(`./src/templates/blog-post.tsx`),
            context: post.node,
        });
    })

    
    console.log("End of Gatsby Node File");
}