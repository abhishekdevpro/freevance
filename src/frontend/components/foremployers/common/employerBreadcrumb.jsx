import React from 'react'
import {Link} from 'react-router-dom'

const EmployerBreadcrumb = (props: String) => {
  return (
  
        <div className="bread-crumb-bar">
  <div className="container">
    <div className="row align-items-center inner-banner">
      <div className="col-md-12 col-12 text-center">
        <div className="breadcrumb-list">
          <h2>{props.title}</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/"> Home</Link></li>
              <li className="breadcrumb-item" aria-current="page">{props.subtitle}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default EmployerBreadcrumb