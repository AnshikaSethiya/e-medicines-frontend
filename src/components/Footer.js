import React from 'react'
import "./Styles/Header&Footer.css"

const Footer = () => {
  return (
    <div className="footer bg-color">
    {/* <!-- Copyright --> */}
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2023. All rights reserved.
    </div>
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </div>
  )
}

export default Footer