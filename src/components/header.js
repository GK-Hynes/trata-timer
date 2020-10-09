import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <header className="Header">
      <h1 className="Header__title">
        <Link to="/" className="Header__link">
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
