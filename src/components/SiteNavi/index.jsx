import React, { Component } from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

class SiteNavi extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { location, title, color, projects } = this.props
    const catList = []
    const catLinks = []

    console.log(projects)

    projects.forEach((data, projCount) => {
      const categories = get(data, 'project.categories')
      const path = get(data, 'project.id')

      if (categories != null) {
        categories.forEach((cat, catCount) => {
          if (catList.indexOf(cat) == -1) {
            catList.push(cat)
            catLinks.push(
              <DropdownItem
                href={`/portfolio/#${cat}`}
                active={
                  location.pathname === '/portfolio/' &&
                  location.hash === `#${cat}`
                    ? true
                    : false
                }
                key={path}
              >
                {cat}
              </DropdownItem>
            )
          }
        })
      }
    })

    return (
      <Navbar
        className="text-uppercase"
        color={color === 'primary' ? 'faded' : 'white'}
        dark={color === 'primary' ? true : false}
        light={color === 'primary' ? false : true}
        sticky={color === 'primary' ? '' : 'top'}
        expand="md"
      >
        <NavbarBrand
          href="/"
          className={color === 'primary' ? 'invisible' : 'navbar-brand'}
        >
          <div className="site-title">Leslie Marie</div>
          <div className="site-subtitle">Photography</div>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem
              active={
                location.hash === '#home' ||
                (location.pathname === '/' && location.hash === '')
                  ? true
                  : false
              }
            >
              <NavLink href="/#home">Home</NavLink>
            </NavItem>
            <NavItem active={location.hash === '#about' ? true : false}>
              <NavLink href="/#about">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Portfolio
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  href={`/portfolio/`}
                  active={
                    location.pathname === '/portfolio/' && location.hash === ''
                      ? true
                      : false
                  }
                >
                  All
                </DropdownItem>
                {catLinks}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem active={location.hash === '#contact' ? true : false}>
              <NavLink href="/#contact">Contact</NavLink>
            </NavItem>
            <NavItem active={location.hash === '#enquire' ? true : false}>
              <NavLink href="/#enquire">Enquire</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default SiteNavi
