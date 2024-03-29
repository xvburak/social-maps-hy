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
        image {
          url
        }
      }
      email {
        textCs
        textEn
        image {
          url
        }
      }
      discord {
        textCs
        textEn
        image {
          url
        }
      }
      newsletter {
        textCs
        textEn
      }
      download {
        textCs
        textEn
      }
      aboutOne {
        textCs
        textEn
        image {
          url
        }
      }
      aboutTwo {
        textCs
        textEn
        image {
          url
        }
      }
      function {
        ... on SideScroll {
          textCs
          textEn
          titleCs
          titleEn
          image {
            url
          }
        }
      }
      functionsInfo {
        textCs
        textEn
      }
      principles(first: 20) {
        ... on Principle {
          emoji
          textCs {
            markdown
            html
            raw
            text
          }
          textEn {
            markdown
            html
            raw
            text
          }
          titleCs
          titleEn
        }
      }
    }
  }
  
`

  const {
    generals
  } = await hygraph.request(query)

  return {
    generals
  }
}