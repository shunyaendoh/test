import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const siteTitle = "ShunyaEndoh - HOME"
const siteDescription = "This is Home page!"

const BlogPostLayout = ({ data }) => {
const post = data.markdownRemark
  return (
    <Layout>
    <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
    </Helmet>

    <div id="main">
    <section id="one">
            <header className="major">
              <h1>{post.frontmatter.title}</h1>
            </header>
            <div className="container" style={{width: '100%'}}>
              <div className="row justify-content-md-center">
                <div dangerouslySetInnerHTML={{ __html: post.html }} className="col-12"/>
              </div>
            </div>
            <ul className="actions">
            </ul>
        </section>

    </div>
</Layout>
  )
}

export default BlogPostLayout

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
    }
  }
}
`