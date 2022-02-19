import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Hero } from "../components/hero"
import { ProductListing } from "../components/product-listing"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`


export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
