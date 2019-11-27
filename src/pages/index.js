import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Fáilte</h1>
    <p>Gatsby might be overkill for a Pomodoro timer</p>
    <p>Let's find out.</p>
  </Layout>
)

export default IndexPage
