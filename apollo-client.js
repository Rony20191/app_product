import { ApolloClient, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
    baseURL: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

export { client }
