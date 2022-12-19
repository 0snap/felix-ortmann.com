import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title?: string
  description?: string,
}

function Seo({ description, title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription: string = description || site.siteMetadata.description
  const metaTitle: string = title || site.siteMetadata.title

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}

export default Seo
