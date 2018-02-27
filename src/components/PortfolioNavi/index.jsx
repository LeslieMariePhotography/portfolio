import React, { Component } from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'

class PortfolioNavi extends Component {
  render() {
    const { projects } = this.props
    const tagList = []
    const tagLinks = []

    console.log(projects)
    projects.forEach((data, projCount) => {
      const tags = get(data, 'project.tags')

      tags.forEach((tag, tagCount) => {
        if (tagList.indexOf(tag) == -1) {
          tagList.push(tag)
          tagLinks.push(
            <li className="nav-item" key={tagCount}>
              <Link to="#">{tag}</Link>
            </li>
          )
        }
      })
    })

    return (
      <div className="row justify-content-center">
        <div className="col-7">
          <ul className="nav nav-fill justify-content-center text-uppercase">
            {tagLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default PortfolioNavi
