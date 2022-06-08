import { gql, GraphQLClient } from 'graphql-request'

export const getPosts = async () => {
    const url = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authaurization": process.env.GRAPH_CMS_TOKEN
        }
    })
   
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                foto {
                  url
                }
              }
              createdAt
              slug
              title
              teaser
              contentfoto {
                url
              }
              categories {
                name
                slug
              }
              content{
                  raw
              }
            }
          }
        }
      }
    `;

  const result = await graphQLClient.request(query)

  return result.postsConnection.edges;
  
};

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




