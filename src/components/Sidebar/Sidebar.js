import React, { useContext, useRef, useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
} from "./styles";
// to add light and dark mode
// STheme,
//   SThemeLabel,
//   SThemeToggler,
//   SToggleThumb,

import { logoMain } from "../../assets";


import right from '../../assets/right.png'
import Films from '../../pages/diff/Films'
import People from '../../pages/diff/People'
import Planets from '../../pages/diff/Planets'
import Species from '../../pages/diff/Species'
import Starships from '../../pages/diff/StarsShips'
import Vehicles from '../../pages/diff/Vehicles'

import {
  AiOutlineLeft,
  AiOutlineSearch,
  AiFillFolder,
  AiOutlineRight,
} from "react-icons/ai";

// import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const searchRef = useRef(null);
  // const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };


  function FilmNavbarItems() {
  
    const [isFilmsOpen, setFilmsOpen] = useState(false);
    const [isPeopleOpen, setPeopleOpen] = useState(false);
    const [isPlanetsOpen, setPlanetsOpen] = useState(false);
    const [isSpeciesOpen, setSpeciesOpen] = useState(false); 
    const [isStarshipsOpen, setStarshipsOpen] = useState(false);
    const [isVehiclesOpen, setVehiclesOpen] = useState(false);
  
    const toggleFilmsDropdown = () => {
      setFilmsOpen(!isFilmsOpen);
      setPeopleOpen(false); // Close the People dropdown when opening Films dropdown
      setPlanetsOpen(false)
      setSpeciesOpen(false);
      setStarshipsOpen(false);
      setVehiclesOpen(false);
     
    };
  
    const togglePeopleDropdown = () => {
      setPeopleOpen(!isPeopleOpen);
      setFilmsOpen(false); 
      setPlanetsOpen(false)
      setSpeciesOpen(false);
      setStarshipsOpen(false);
      setVehiclesOpen(false);
    };
    const togglePlanetsDropdown = () => {
      setPlanetsOpen(!isPlanetsOpen);
      setFilmsOpen(false); 
      setPeopleOpen(false)
      setSpeciesOpen(false);
      setStarshipsOpen(false);
      setVehiclesOpen(false);
    };
  
    const toggleSpeciesDropdown = () => {
      setSpeciesOpen(!isSpeciesOpen);
      setFilmsOpen(false);
      setPeopleOpen(false);
      setPlanetsOpen(false); 
      setStarshipsOpen(false);
      setVehiclesOpen(false);
    };
  
    const toggleStarshipsDropdown = () => {
      setStarshipsOpen(!isStarshipsOpen);
      setFilmsOpen(false);
      setPeopleOpen(false);
      setPlanetsOpen(false);
      setSpeciesOpen(false); 
      setVehiclesOpen(false);
    };
  
    const toggleVehiclesDropdown = () => {
      setVehiclesOpen(!isVehiclesOpen);
      setFilmsOpen(false);
      setPeopleOpen(false);
      setPlanetsOpen(false);
      setSpeciesOpen(false);
      setStarshipsOpen(false); 
    };
  
    return (
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleFilmsDropdown}>
          <i className="bi bi-camera-reels" style={{ color: 'white' }}></i>
          <span className="films-text">Films</span>
          <img src={right} alt="Right" className="right-icon" />
        </button>
        {isFilmsOpen &&(
          <div className="dropdown-content-right">
            <Films />
          </div>
          )}
        <button className="dropdown-btn" onClick={togglePeopleDropdown}>
          <i className="bi bi-people-fill" style={{ color: 'white' }}></i>
          <span className="peoples-text">People</span>
          <img src={right} alt="Right" className="right-icon" />
        </button>
        {isPeopleOpen && <People />}
        <button className="dropdown-btn" onClick={togglePlanetsDropdown}>
          <i className="bi bi-globe" style={{ color: 'white' }}></i>
          <span className="planets-text">Planets</span>
          <img src={right} alt="Right" className="right-icon" />
        </button>
        {isPlanetsOpen && <Planets/>}
        <button className="dropdown-btn" onClick={toggleSpeciesDropdown}>
          <i className="bi bi-journal-richtext" style={{ color: 'white' }}></i>
          <span className="species-text">Species</span>
          <img src={right} alt="Right" className="right-icon" />
        </button>
        {isSpeciesOpen && <Species />}
        <button className="dropdown-btn" onClick={toggleStarshipsDropdown}>
          <i className="bi bi-rocket-takeoff" style={{ color: 'white' }}></i>
          <span className="starships-text">Starships</span>
          <img src={right} alt="Right" className="right-icon" />
        </button>
        {isStarshipsOpen && <Starships />}
        <button className="dropdown-btn" onClick={toggleVehiclesDropdown}>
          <i className="bi bi-truck" style={{ color: 'white' }}></i>
          <span className="vehicles-text">Vehicles</span>
          <img src={right} alt="Right" className="right-icon" />
        </button>
        {isVehiclesOpen && <Vehicles />}
      </div>
    );
  }

  return (
    <SSidebar>
      <SLogo>
        <img src={logoMain} alt="logo" />
      </SLogo>

      {linksArray.map(({ icon, val, label, to, handleReload }) => (
        <SLinkContainer
          key={label}
          isActive={pathname === to}
          className="py-2 "
          onClick={handleReload}
        >
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>

            <>
              <SLinkLabel className="px-3 ">{label}</SLinkLabel>
              {/* if notifications are at 0 or null, do not display */}
              <SLinkNotification className="bg-transparent">
                {val}
              </SLinkNotification>
            </>
          </SLink>
        </SLinkContainer>
      ))}
      {/* to add light and dark mode  */}
      {/* <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme> */}
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Films",
    icon: <AiFillFolder />,
    to: "/films",
    val: <AiOutlineRight />,
    handleReload: () => {
      // window.location.reload(); // Reload the window
    },
  },
  {
    label: "People",
    icon: <AiFillFolder />,
    to: "/people",
    val: <AiOutlineRight />,
    handleReload: () => {
      // window.location.reload(); // Reload the window
    },
  },
  {
    label: "Planets",
    icon: <AiFillFolder />,
    to: "/planets",
    val: <AiOutlineRight />,
    handleReload: () => {
      // window.location.reload(); // Reload the window
    },
  },
  {
    label: "Species",
    icon: <AiFillFolder />,
    to: "/species",
    val: <AiOutlineRight />,
    handleReload: () => {
      // window.location.reload(); // Reload the window
    },
  },
  {
    label: "Starships",
    icon: <AiFillFolder />,
    to: "/starships",
    val: <AiOutlineRight />,
    handleReload: () => {
      // window.location.reload(); // Reload the window
    },
  },
  {
    label: "Vehicles",
    icon: <AiFillFolder />,
    to: "/vehicles",
    val: <AiOutlineRight />,
    handleReload: () => {
      // window.location.reload(); // Reload the window
    },
  },
];

export default Sidebar;
