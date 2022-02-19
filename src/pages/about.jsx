import * as React from "react"
import { Layout } from "../components/layout"
import { heading, paragraph, container } from "./404.module.css"

export default function aboutPage() {
  return (
    <Layout>
      <div className={container}>
        <h1 className={heading}>About</h1>
        <p className={paragraph}>
          lal lala 
        </p>
      </div>
    </Layout>
  )
}
