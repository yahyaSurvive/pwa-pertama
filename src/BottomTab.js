import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import logoIcon from "./logo192.png";

const BottomTab = () => {
  const tabs = [
    {
      icon: "./logo192.png",
      label: "Home",
    },
    {
      // icon: logoIcon,
      label: "Search",
    },
    {
      // icon: logoIcon,
      label: "Login",
    },
  ];

  return (
    <div>
      {/* Bottom Tab Navigator*/}
      <nav className="navbar fixed-bottom navbar-light d-block d-lg-none d-md-none bottom-tab-nav bg-danger" role="navigation" style={{ height: 90 }}>
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    {/* <FontAwesomeIcon size="lg" icon={tab.icon} /> */}
                    <h1>N</h1>
                    {/* <img src={"./logo192.png"} alt="" style={{ width: 50, height: 50 }} /> */}
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default BottomTab;
