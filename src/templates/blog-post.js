// import React, { Component } from 'react'
// import get from 'lodash/get'
// import Helmet from 'react-helmet'
// import Link from 'gatsby-link'
// import striptags from 'striptags'

// import { siteMetadata } from '../../gatsby-config'

// import SitePost from '../components/SitePost'
// import SitePage from '../components/SitePage'
// import SiteNavi from '../components/SiteNavi'

// class BlogPostTemplate extends Component {
//   render() {
//     const post = get(this, 'props.data.post')
//     const site = get(this, 'props.data.site')
//     const layout = get(post, 'frontmatter.layout')
//     const title = get(post, 'title')
//     const siteTitle = get(site, 'meta.title')

//     let template = ''
//     if (layout != 'page') {
//       template = <SitePost data={post} site={site} isIndex={false} />
//     } else {
//       template = <SitePage {...this.props} />
//     }
//     return (
//       <div>
//         <Helmet title={`${title} | ${siteTitle}`} />
//         <SiteNavi title={siteMetadata.title} {...this.props} />
//         {template}
//       </div>
//     )
//   }
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostByPath($id: String!) {
//     site {
//       meta: siteMetadata {
//         title
//         description
//         url: siteUrl
//         author
//         twitter
//         adsense
//       }
//     }
//     post: contentfulLessonCopy(id: { eq: $id }) {
//       title
//       childContentfulLessonCopyCopyTextNode {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
