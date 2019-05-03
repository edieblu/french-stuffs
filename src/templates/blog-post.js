import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        {}
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        <h2>
          Vocabulary{" "}
          <svg
            height="30"
            width="30"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="book"
            class="svg-inline--fa fa-book fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
            />
          </svg>
        </h2>

        <div className="memrise">
          <h3>Memrise</h3>
          <p>
            <strong>{post.frontmatter.memrise.deck}</strong>: studied{" "}
            <strong>{post.frontmatter.memrise.events}</strong> cards in{" "}
            <strong>{post.frontmatter.memrise.minutes}</strong> minutes.
          </p>
        </div>

        <div className="anki">
          <h3>Anki</h3>
          <p>
            <strong>{post.frontmatter.Anki.deck}</strong>: studied{" "}
            <strong>{post.frontmatter.Anki.events}</strong> cards in{" "}
            <strong>{post.frontmatter.Anki.minutes}</strong> minutes.
          </p>
        </div>

        <div className="clozemaster">
          <h3>ClozeMaster</h3>
          <p>
            <strong>{post.frontmatter.ClozeMaster.deck}</strong>{" "}
            <strong>{post.frontmatter.ClozeMaster.events}</strong> points.
          </p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        memrise {
          deck
          events
          minutes
          streak
        }
        Anki {
          deck
          events
          minutes
          streak
        }
        ClozeMaster {
          deck
          events
          streak
        }
      }
    }
  }
`
