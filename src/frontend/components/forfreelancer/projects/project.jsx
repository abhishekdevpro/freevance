import React, {useState} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { 
  company_img1,
  locations,
  company_img2,
  company_img3,
  company_img4,
  company_img5,
  company_img6,
  company_img7,
  company_img8,
  company_img9,
} from "../../imagepath";
import Select from "react-select";
import EmployerBreadcrumb from "../../foremployers/common/employerBreadcrumb";
import FreelancerSidebar from "../../foremployers/common/freelancerSidebar";

const Project = () => {
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  
  const optionsSelect = [
    { value: 1, label: "Relevance" },
    { value: 2, label: "Rating" },
    { value: 3, label: "Latest" },
    { value: 4, label: "Free" },
  ];

  return (
    <>
      {/* Breadcrumb */}     
      <EmployerBreadcrumb title="Project Grid" subtitle="Projects"/>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Search Filter */}
              <FreelancerSidebar/>
                {/* /Search Filter */}
              </StickyBox>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
             
           <div className="sort-tab develop-list-select">
  <div className="row align-items-center">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
      <div className="d-flex align-items-center">
        <div className="freelance-view">
          <h4>Found 9 Results</h4>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-sm-end">
      <div className="sort-by">
      <Select
        className="select "
        options={optionsSelect}
        placeholder="Sort by (Default)"
      />
      </div>
      <ul className="list-grid d-flex align-items-center">
        <li><Link to="/project" className="favour-active"><i className="fas fa-th-large" /></Link></li>
        <li><Link to="/project-list"><i className="fas fa-list" /></Link></li>
      </ul>
    </div>
  </div>
</div>

<div>
  <div className="bootstrap-tags text-start pl-0 d-none">
    <span className="badge badge-pill badge-skills">UI/UX Developer <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span> 
    <span className="badge badge-pill badge-skills">USA <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span> 
    <span className="badge badge-pill badge-skills">Hourly <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span> 
    <span className="badge badge-pill badge-skills">0-1 years <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
    <span className="badge badge-pill badge-skills">USD <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
  </div>
  <div className="row">
    {/* Project Content */}
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> Posted Just Now</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(1)}  className={`favourite ${selectedItems[1] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img1} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">Amaze Tech </div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">UI/UX Developer</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />Georgia, USA</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$40-$500</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">4 Days Left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">15</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> 1 min ago</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(2)}  className={`favourite ${selectedItems[2] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img2} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">Park INC</div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">UI/UX Developer</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />PHP Developer</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$55-$750</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">7 Days left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">18</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> 10 min ago</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(3)}  className={`favourite ${selectedItems[3] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img3} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">Tech Zone</div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">Graphic Designer</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />Florida, USA</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$55-$750</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">1 Days left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">21</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> 1 hour ago</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(4)}  className={`favourite ${selectedItems[4] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img4} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">ABC Software</div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">Graphic Designer</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />iOS Developer</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$25-$350</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">7 Days left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">20</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> 5 hour ago</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(5)}  className={`favourite ${selectedItems[5] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img5} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">Alfred Tech</div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">SEO Developer</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />Virginia, USA</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$30-$250</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">8 Days left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">09</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> 1 day ago</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(6)}  className={`favourite ${selectedItems[6] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img6} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">Kind Software&apos;s</div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">Network Engineer</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />Delaware, USA</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$70-$700</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">3 Days left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">05</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> 3 day ago</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(7)}  className={`favourite ${selectedItems[7] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img7} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">Particles INC</div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">Business Analyst</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />Kansas, USA</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$55-$600</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">5 Days left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">18</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> Posted Just Now</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(8)}  className={`favourite ${selectedItems[8] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img8} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">Amaze Tech </div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">UI/UX Developer</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />Georgia, USA</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$40-$500</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">4 Days Left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">15</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-6">
      <div className="freelance-widget widget-author position-relative">
        <div className="freelance-content">
          <div className="freelance-location freelance-time"><i className="feather-clock me-1" /> 1 min ago</div>
          <Link data-bs-toggle="modal" to="#rating" onClick={() => handleItemClick(9)}  className={`favourite ${selectedItems[9] ? 'color-active' : ''}`}><i className="feather-heart" /></Link>
          <div className="author-heading ">
            <div className=" freelance-img">
              <Link to="#">
                <img src={company_img9} alt="author" />
                <span className="verified"><i className="fas fa-check-circle" /></span>
              </Link>
            </div>
            <div className="profile-name">
              <div className="author-location">Park INC</div>
            </div>
            <div className="freelance-info">
              <h3><Link to="#">UI/UX Developer</Link></h3>
              <div className="freelance-location"><img src={locations} className="me-2" alt="img" />PHP Developer</div>
            </div>
            <div className="freelance-tags">
              <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">React</span></Link>
              <Link to="#"><span className="badge badge-pill badge-design">PHP</span></Link>
            </div>
            <div className="freelancers-price">$55-$750</div>
          </div>
          <div className="counter-stats">
            <ul>
              <li>
                <h5>Expiry</h5>
                <h3 className="counter-value">7 Days left</h3>
              </li>
              <li>
                <h5>Proposals</h5>
                <h3 className="counter-value">18</h3>
              </li>
              <li>
                <h5>Job Type</h5>
                <h3 className="counter-value"><span className="jobtype">Full Time</span></h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart-hover">
          <Link to="/project-details" className="btn-cart" tabIndex={-1}>View Project</Link>
        </div>
      </div>
    </div>
  </div>
</div>




<div className="row">
  <div className="col-md-12">
    <ul className="paginations list-pagination">
      <li className="page-item"><Link to="#"><i className="feather-chevron-left" /></Link>
      </li>
      <li className="page-item"><Link to="#" className="active">1</Link></li>
      <li className="page-item"><Link to="#">2</Link></li>
      <li className="page-item"><Link to="#">3</Link></li>
      <li className="page-item"><Link to="#">...</Link></li>
      <li className="page-item"><Link to="#">10</Link></li>
      <li className="page-item"><Link to="#"><i className="feather-chevron-right" /></Link></li>
    </ul>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="rating">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header d-block b-0 pb-0">
              <span className="modal-close float-end">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="fa fa-times orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <form action="project">
                <div className="modal-info">
                  <div className="text-center pt-0 mb-5">
                    <h3>Please login to Favourite Freelancer</h3>
                  </div>
                  <div className="submit-section text-center">
                    <button
                      data-bs-dismiss="modal"
                      className="btn btn-primary black-btn click-btn"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary click-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default Project;
