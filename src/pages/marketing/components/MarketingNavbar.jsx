import React, { useEffect, useState } from "react";
import Logo from "../../../components/icons/Logo";
import QwikConnectLogo from "../../../components/icons/QwikConnectLogo";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link as ScrollLink } from 'react-scroll';
import Hamburger from "../../../components/icons/Hamburger";
import CustomDrawer from "./CustomDrawer";


const MarketingNavbar = () => {
  const responsive = useResponsiveStyles();
  const navbars = ["Home", "Key features", "Plans", "Contact us"];

  const {hash} = useLocation();
  console.log("state",hash)

  // const location = useLocation();

  // useEffect(() => {
  //   const el = document.getElementById('my_element');
  //   el && window.scrollTo({ 
  //     behavior: 'smooth', 
  //     top: el.offsetTop 
  //   });
  // }, [location]);

  const navbars1 = [
    {
      to: "#home",
      name: "Home",
    },
    {
      to: "#key-features",
      name: "Key features",
    },
    {
      to: "#testimonials",
      name: "Testimonials",
    },
    {
      to: "#plans",
      name: "Plans",
    },
    {
      to: "/contact-us",
      name: "Contact us",
    },
  ];

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const adminId = useSelector((state) => state.auth.adminId);

  const login = true;

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handelDrawerClose = () =>{
    setIsDrawerOpen(false)  
  }


  const handelDrawerOpen = () =>{
    console.log("hello")
      setIsDrawerOpen(true)
      console.log(isDrawerOpen)
  }


  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 0px rgba(142, 141, 208, 0.16)",
        backgroundColor: "#fff",
        padding: responsive.isMobile ? "1rem" : "1.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
        position: "sticky",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{responsive.isMobile ? <Logo /> : <QwikConnectLogo />}</div>
        {responsive.isMobile || responsive.isRandom ? (
          ""
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {navbars1.map((item, index) => {
               console.log("item.to:", item.to);
              return(
                <div key={index} style={{ margin: "0 2.5rem" }}>
                {
                  item.to===""
                   ?
                    navigate()
                   :
                   <ScrollLink
                  to={item.to.substring(1)} // Remove the "#" from the beginning of the 'to' prop
                  spy={true}
                  smooth={true}
                  offset={-100} // You may need to adjust the offset based on your layout
                  duration={1000}
                  activeClass="active-link" // Specify the class name for the active link
                >
                  <CustomAllTypography
                    name={item.name}
                    variant={"body2"}
                    textcolor={(item.to === hash) ?'#605DEC' : ''}
                  />
                </ScrollLink>
                }
                {/* <Link to={{pathname:item.to.substring(1)}}>{item.name}</Link> */}
              </div>
              )
            })}
          </div>
        )}
      </div>
      {responsive.isMobile || responsive.isRandom ? (
        <div><Hamburger handelClick={handelDrawerOpen}/>{isDrawerOpen && <CustomDrawer isDrawerOpen={isDrawerOpen} handelClose={handelDrawerClose} navbarArray={navbars1} hash={hash}/> }</div>

      ) : (
        <div style={{ display: "flex" }}>
          {!user ? (
            <>
              <CustomInputButton
                variant="text"
                size="large"
                responsive
                onClick={handelLoginClick}
              >
                Login
              </CustomInputButton>
              <CustomInputButton
                variant="contained"
                size="large"
                responsive
                onClick={handelSignupClick}
              >
                Sign up
              </CustomInputButton>
            </>
          ) : (
            <CustomInputButton
              variant="outlined"
              size="large"
              responsive
              onClick={handelLoggedInClick}
            >
              Logged In
            </CustomInputButton>
          )}
        </div>
      )}
    </div>
  );
};

export default MarketingNavbar;
