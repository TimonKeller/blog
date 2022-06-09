import { gql, GraphQLClient } from 'graphql-request'

export const getNewestPost = async() => {
    const url = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authaurization": process.env.GRAPH_CMS_TOKEN
        }
    })

    const query = gql`
        query getNewestPost() {
            posts(
                orderBy: createdAt_ASC
                last: 1
            ){
                title
                slug
                contentfoto {
                    url
                }
                createdAt
                content{
                    raw
                }
                author {
                    bio
                    name
                    id
                    foto {
                    url
                    }
                }
                categories {
                    name
                    slug
                }
            }
        }
    `;
    const result = await graphQLClient.request(query)
    console.log(result.posts);
    return result.posts;
};
   
export const getRecentPost = async() => {
    const url = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authaurization": process.env.GRAPH_CMS_TOKEN
        }
    })

    const query = gql`
        query getRecentPost() {
            posts(
                orderBy: createdAt_ASC
                last: 3
            ){
                title
                teaser
                contentfoto {
                    url
              }
              createdAt
              slug
              content{
                  raw
              }
              author {
                bio
                name
                id
                foto {
                  url
                }
              }
              categories {
                name
                slug
              }
            }
        }
    `;
    const result = await graphQLClient.request(query)
    return result.posts;
}

export const getPost = async(slug) => {
    const url = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authaurization": process.env.GRAPH_CMS_TOKEN
        }
    })
    const query = gql`
        query getPost($slug: String!) {
            posts(where: { slug: $slug }){
                title
                teaser
                createdAt
                slug
                contentfoto {
                    url
                }
                content{
                    raw
                }
                author {
                    bio
                    name
                    id
                    foto {
                        url
                    }
                }
                categories {
                    name
                    slug
                }
            }
        }
    `;
    const result = await graphQLClient.request(query, { slug })
    return result.posts;
}

export const getAllPost = async() => {
    const url = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authaurization": process.env.GRAPH_CMS_TOKEN
        }
    })

    const query = gql`
        query getAllPost() {
            posts{
                title
                slug
                teaser
                contentfoto {
                    url
              }
              createdAt
              author {
                bio
                name
                id
                foto {
                  url
                }
              }
              categories {
                name
                slug
              }
            }
        }
    `;
    const result = await graphQLClient.request(query)
    return result.posts;
};

