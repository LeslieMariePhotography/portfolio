import React, { Component } from 'react'
import get from 'lodash/get'
import Link, { withPrefix } from 'gatsby-link'

class PortfolioNavi extends Component {
  render() {
    const { projects, location } = this.props
    const catList = []
    const catLinks = []

    projects.forEach((data, projCount) => {
      const categories = get(data, 'project.categories')
      const path = get(data, 'project.id')
      const title = get(data, 'project.title.title')
      catLinks.push(
        <li
          className={
            location.hash === `#${title}` ? 'navitem active' : 'nav-item'
          }
          key={path + '-' + title}
        >
          <Link
            to={withPrefix(`/portfolio/${title}`)}
            className="nav-link"
          >
            {title}
          </Link>
        </li>
      )
      if (categories != null) {
        categories.forEach((cat, catCount) => {
          if (catList.indexOf(cat) == -1) {
            catList.push(cat)
          }
        })
      }
    })

    return (
      <div className="row justify-content-center d-none d-md-flex">
        <div className="col-7">
          <ul className="nav justify-content-center text-uppercase">
            {catLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default PortfolioNavi
