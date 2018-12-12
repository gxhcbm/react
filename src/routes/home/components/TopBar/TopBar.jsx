import React from 'react'
import PropTypes from 'prop-types'
import './TopBar.css'

const TopBar = ({ city, showCitys }) => {
  return (
    <div className="topbar">
      <div className="topbar-city" onClick={showCitys}>广州</div>
      <div className="topbar-search" />
      <div className="topbar-scan" />
    </div>
  )
}

TopBar.propTypes = {
  city: PropTypes.string.isRequired,
  showCitys: PropTypes.func.isRequired
}

export default TopBar
