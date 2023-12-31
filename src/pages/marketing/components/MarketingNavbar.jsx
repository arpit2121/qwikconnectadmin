import { useEffect, useState } from "react";
import Logo from "../../../components/icons/Logo";
import QwikConnectLogo from "../../../components/icons/QwikConnectLogo";
import useResponsiveStyles from "../../../utils/MediaQuery";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from "../../../components/icons/Hamburger";
import CustomDrawer from "./CustomDrawer";
// import { Link } from "react-router-dom/dist";

const MarketingNavbar = () => {
  const responsive = useResponsiveStyles();
  // const navbars = ["Home", "Key features", "Plans", "Contact us"];

  const { hash } = useLocation();
  console.log("state", hash);

  const location = useLocation();

  useEffect(() => {
    const el = document.getElementById('my_element');
    el && window.scrollTo({
      behavior: 'smooth',
      top: el.offsetTop
    });
  }, [location]);

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
  ];

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const adminId = useSelector((state) => state.auth.adminId);

  // const login = true;

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
        scrollBehavior: "smooth",
        top: 0,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {responsive.isMobile ? (
            <Logo onClick={handelLogoClick} />
          ) : (
            <QwikConnectLogo onClick={handelLogoClick} />
          )}
        </div>
        {responsive.isMobile || responsive.isRandom ? (
          ""
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              marginLeft: "4rem",
              marginRight: "1rem",
            }}
          >
            {navbars1.map((item, index) => {
              return (
                <div key={index}>
                  {item.to === "" ? (
                    navigate()
                  ) : (
                       <ScrollLink
                      to={item.to.substring(1)} // Remove the "#" from the beginning of the 'to' prop
                      spy={true}
                      smooth={true}
                      offset={-100} // You may need to adjust the offset based on your layout
                      duration={1000}
                      style={{fontWeight: '500' , textDecoration: 'none' , color:'#212121' , cursor:'pointer' }}
                      activeClass="active-link" // Specify the class name for the active link
                    >
                        {item.name}
                    </ScrollLink>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {responsive.isMobile || responsive.isRandom ? (
        <div>
          <Hamburger handelClick={handelDrawerOpen} />
          {isDrawerOpen && (
            <CustomDrawer
              isDrawerOpen={isDrawerOpen}
              handelClose={handelDrawerClose}
              navbarArray={navbars1}
              hash={hash}
              handelLoginClick={handelLoginClick}
              handelSignupClick={handelSignupClick}
              handelLoggedInClick={handelLoggedInClick}
              user={user}
            />
          )}
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          {!user ? (
            <>
              <CustomInputButton
                variant="text"
                size="medium"
                responsive
                onClick={handelLoginClick}
              >
                Login
              </CustomInputButton>
              <CustomInputButton
                variant="contained"
                size="medium"
                responsive
                onClick={handelSignupClick}
              >
                Sign up
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
        </div>
      )}
    </div>
  );
};

export default MarketingNavbar;
