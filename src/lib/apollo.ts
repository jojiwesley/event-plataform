import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4rawuj10u8401z572xd7pyv/master',
    cache: new InMemoryCache()
}) 