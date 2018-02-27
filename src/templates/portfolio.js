import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import striptags from 'striptags'

import { siteMetadata } from '../../gatsby-config'

import SiteNavi from '../components/SiteNavi'

class PortfolioTemplate extends Component {
  render() {
    const post = get(this, 'props.data.post')
    const site = get(this, 'props.data.site')
    const title = get(post, 'title.title')
    const siteTitle = get(site, 'meta.title')

    return (
      <div>
        <Helmet title={`${title} | ${siteTitle}`} />
        <SiteNavi title={siteMetadata.title} {...this.props} />
        <h1>{title}</h1>
      </div>
    )
  }
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query PortfolioPostByPath($id: String!) {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    post: contentfulPhotoGallery(id: { eq: $id }) {
      title {
        title
      }
    }
  }
`
