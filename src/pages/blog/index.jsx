import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import { siteMetadata } from '../../../gatsby-config'

import SitePost from '../../components/SitePost'
import SiteNavi from '../../components/SiteNavi'

class BlogIndex extends Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')

    const sortedPosts = sortBy(posts, post =>
      get(post, 'post.createdAt')
    ).reverse()

    sortedPosts.forEach((data, i) => {
      // const layout = get(data, 'post.frontmatter.layout')
      // const path = get(data, 'post.path')
      // if (layout === 'post' && path !== '/404/') {
      pageLinks.push(
        <LazyLoad height={500} offset={500} once={true} key={i}>
          <SitePost data={data.post} site={site} isIndex={true} key={i} />
        </LazyLoad>
      )
      // }
    })

    return (
      <div>
        <Helmet
          title={get(site, 'title')}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
            { property: 'og:title', content: get(site, 'title') },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: get(site, 'description') },
            { property: 'og:url', content: get(site, 'url') },
            {
              property: 'og:image',
              content: `${get(site, 'url')}/img/profile.jpg`,
            },
          ]}
        />
        <SiteNavi title={siteMetadata.title} {...this.props} />
        {pageLinks}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allContentfulLessonCopy(filter: { node_locale: { eq: "en-US" } }) {
      posts: edges {
        post: node {
          id
          title
          createdAt(formatString: "YYYY/MM/DD")
          childContentfulLessonCopyCopyTextNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
