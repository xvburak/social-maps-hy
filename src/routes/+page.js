import {
    gql,
    GraphQLClient
} from 'graphql-request'

export async function load() {
        const hygraph = new GraphQLClient(
            import.meta.env.VITE_HYGRAPH_URL, {
                headers: {},
            }
        )

        const query = gql `
  query MyQuery {
    generals {
      support {
        textCs
        textEn
      },
      download {
        textCs
        textEn
      }
    }
  }
  
`

const { generals } = await hygraph.request(query)

return { generals }
}