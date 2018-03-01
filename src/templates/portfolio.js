import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import striptags from 'striptags'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import { siteMetadata } from '../../gatsby-config'

import SiteNavi from '../components/SiteNavi'
import PortfolioNavi from '../components/PortfolioNavi'

class PortfolioTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      imgURL: '',
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(e) {
    this.setState({
      modal: !this.state.modal,
      imgURL: `https:${e}`,
    })
  }

  render() {
    const { transition } = this.props

    const list = []
    const post = get(this, 'props.data.post')
    const site = get(this, 'props.data.site')
    const title = get(post, 'title.title')
    const siteTitle = get(site, 'meta.title')
    const images = get(post, 'images')

    const { activeIndex } = this.state
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={this.toggle}
      >
        &times;
      </button>
    )

    images.forEach((image, imgCount) => {
      const imgLink = get(image, 'file.url')
      const imgId = get(image, 'id')

      list.push(
        <div
          className="col-3 pt-5"
          key={this.props.data.post.id + '-' + imgCount}
        >
          <a
            id={imgId}
            style={{ cursor: 'pointer' }}
            onClick={() => this.toggle(imgLink)}
          >
            <img
              src={`https:${imgLink}`}
              className="img-fluid mx-auto d-block"
            />
          </a>
        </div>
      )
    })

    return (
      <div style={transition && transition.style}>
        <Helmet title={`${title} | ${siteTitle}`} />
        <SiteNavi title={siteMetadata.title} {...this.props} />
        <div id="portfolio" className="container-fluid bg-even py-5">
          <div id="portfolio-title" className="row justify-content-center">
            <div className="col-7">
              <p className="text-center display-4">{title}</p>
            </div>
          </div>
          <PortfolioNavi
            projects={this.props.data.portfolio.projects}
            {...this.props}
          />
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row justify-content-center">{list}</div>
            </div>
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            centered={true}
            size="lg"
            className={this.props.className}
            external={externalCloseBtn}
          >
            {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
            <ModalBody>
              <img src={this.state.imgURL} />
            </ModalBody>
          </Modal>
        </div>
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
      }
    }
    post: contentfulPhotoGallery(id: { eq: $id }) {
      title {
        title
      }
      images {
        id
        file {
          url
        }
      }
    }
    portfolio: allContentfulPhotoGallery {
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
            file {
              url
            }
          }
        }
      }
    }
  }
`
