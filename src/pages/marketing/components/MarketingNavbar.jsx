import { useEffect, useState } from "react";
import Logo from "../../../components/icons/Logo";
import QwikConnectLogo from "../../../components/icons/QwikConnectLogo";
import useResponsiveStyles from "../../../utils/MediaQuery";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Hamburger from "../../../components/icons/Hamburger";
import CustomDrawer from "./CustomDrawer";
import { Link } from "react-scroll";
import "./Navbar.css";

const MarketingNavbar = () => {
  const responsive = useResponsiveStyles();

  const { hash } = useLocation();

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const adminId = useSelector((state) => state.auth.adminId);

  const menuItems = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "keyfeatures",
    },
    {
      id: 3,
      title: "testimonials",
    },
    {
      id: 4,
      title: "plans",
    },
  ];

  const handelLoginClick = () => {
    if (user) {
      navigate("/dashboard/home");
    } else {
      navigate("/login", {
        state: {
          name: "Login",
        },
      });
    }
  };

  const handelSignupClick = () => {
    if (user) {
      navigate("/dashboard/home");
    } else {
      navigate("/login", {
        state: {
          name: "Signup",
        },
      });
    }
  };

  const handelLoggedInClick = () => {
    if (adminId) {
      navigate("/dashboard/home");
    } else {
      navigate("/on-boarding");
    }
  };
  const [click, setClick] = useState(true);

  const closeMenu = () => setClick(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handelDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handelDrawerOpen = () => {
    console.log("hello");
    setIsDrawerOpen(true);
    console.log(isDrawerOpen);
  };

  const handelLogoClick = () => {
    navigate("/");
  };

  const handleClose = () => {
    console.log("hello");
  };

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    const handelScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  });

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 5,
        boxShadow: "0px 4px 4px 0px rgba(142, 141, 208, 0.16)",
        backgroundColor: "#fff",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: responsive.isMobile ? "0.5rem" : "1rem 1.5rem",
        }}
      >
        {" "}
        <div>
          {responsive.isMobile ? (
            <Logo onClick={handelLogoClick} />
          ) : (
            <QwikConnectLogo onClick={handelLogoClick} />
          )}
        </div>
       {
        responsive.isMobile || responsive.isRandom 
        ?
            <div>
          <Hamburger handelClick={handelDrawerOpen} />
          {isDrawerOpen && (
            <CustomDrawer
              isDrawerOpen={isDrawerOpen}
              handelClose={handelDrawerClose}
              navbarArray={menuItems}
              hash={hash}
              handelLoginClick={handelLoginClick}
              handelSignupClick={handelSignupClick}
              handelLoggedInClick={handelLoggedInClick}
              user={user}
            />
          )}
        </div>
        :
        <ul className={false ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((menu) => {
          return (
            <li>
              <a href="/">
                <Link
                  onClick={handleClose}
                  activeClass="active"
                  to={menu.title}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {menu.title}
                </Link>
              </a>
            </li>
          );
        })}
      </ul>
       }
       {
        responsive.isMobile || responsive.isRandom?
        ""
        :
        <>
        {!user ? (
          <>
            <CustomInputButton
              variant="contained"
              size="medium"
              responsive
              onClick={handelLoginClick}
            >
              Login/Signup
            </CustomInputButton>
          </>
        ) : (
          <CustomInputButton
            variant="outlined"
            size="medium"
            responsive
            onClick={handelLoggedInClick}
          >
            Logged In
          </CustomInputButton>
        )}
        </>
       }
      </div>
    </div>
    // <nav className={`${sticky ? "sticky" : ""}`}>
    //   <div className="nav-inner">
    //     <span className="logo">
    //       logo
    //     </span>
    //     <div className="links">
    //         <a>

    //         </a>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default MarketingNavbar;
