import {gql} from "@apollo/client";

export const GET_CLASSES = gql`
  query {
     classes {
         id
         title
      }
  }
`

