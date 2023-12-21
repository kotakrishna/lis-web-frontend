import React from 'react';
import './header.scss';

export interface HeaderProps {
  history?: any;
  children?: React.ReactNode;
}

export function Header(props: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? 'open' : 'close'}`}>
        <div className="logo-details" onClick={toggleSidebar}>
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Dashboard Main</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Category
                </a>
              </li>
            </ul>
          </li>
          <li className={`${dropdownOpen[1] ? 'showMenu' : ''}`}>
            <div
              className="iocn-link"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, 1: !prev[1] }))
              }
            >
              <a href="#">
                <i className="bx bx-collection"></i>
                <span className="link_name">Dictionaries</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Dictionaries
                </a>
              </li>
              <li>
                <a href="#">HTML & CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">PHP & MySQL</a>
              </li>
            </ul>
          </li>
          <li className={`${dropdownOpen[2] ? 'showMenu' : ''}`}>
            <div
              className="iocn-link"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, 2: !prev[2] }))
              }
            >
              <a href="#">
                <i className="bx bx-book-alt"></i>
                <span className="link_name">Reports</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Reports
                </a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Login Form</a>
              </li>
              <li>
                <a href="#">Card Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="link_name">Analytics</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-line-chart"></i>
              <span className="link_name">Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Chart
                </a>
              </li>
            </ul>
          </li>
          <li className={`${dropdownOpen[3] ? 'showMenu' : ''}`}>
            <div
              className="iocn-link"
              onClick={() =>
                setDropdownOpen((prev) => ({ ...prev, 3: !prev[3] }))
              }
            >
              <a href="#">
                <i className="bx bx-plug"></i>
                <span className="link_name">Client</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Client
                </a>
              </li>
              <li>
                <a href="#">UI Face</a>
              </li>
              <li>
                <a href="#">Pigments</a>
              </li>
              <li>
                <a href="#">Box Icons</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-compass"></i>
              <span className="link_name">Explore</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Explore
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-history"></i>
              <span className="link_name">History</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  History
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="link_name">Setting</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Setting
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                {/* <!--<img src="image/profile.jpg" alt="profileImg">--> */}
              </div>
              <div className="name-job">
                <div className="profile_name">Kota</div>
                <div className="job">Manager</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
          <div className="navbar header"></div>
      <section className="home-section">
        <div className="home-content">
          {props.children}
        </div>
      </section>
    </>
  );
}
