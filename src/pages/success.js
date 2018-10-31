import React, {Component} from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import SiteNavi from '../components/SiteNavi'

import { siteMetadata } from '../../gatsby-config'

// import pic11 from '../assets/images/pic11.jpg'

class Success extends Component {
  render() {
    const projects = get(this, 'props.data.portfolio.projects')

    return (
      <div>
      <Helmet>
          <title>Success Page</title>
          <meta name="description" content="Success Page" />
      </Helmet>
      <SiteNavi title={siteMetadata.title}
                color="primary"
                projects={projects}
                // handleCartOpen={this.handleCartOpen}
                {...this.props}/>

      <div id="main" className="alt">
          <section id="one">
              <div className="inner">
                  <header className="major">
                      <h1>Success/Thank You Page</h1>
                  </header>
                  {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                  <p>Thank you for contacting us!</p>
              </div>
          </section>
      </div>

  </div>
    )
  }
}

export default Success

export const successQuery = graphql`
  query SuccessQuery {
    site {
      meta: siteMetadata {
        title
      }
    }
    portfolio: allContentfulPhotoGallery(limit: 9) {
      totalCount
      projects: edges {
        project: node {
          id
          categories
          tags
          title {
            title
          }
          coverImage {
            sizes(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          sizes {
            src
          }
        }
      }
    }
  }
`
