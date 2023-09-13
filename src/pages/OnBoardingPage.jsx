import React, { useEffect, useState } from "react";
import vector from "../assets/vector.svg";
import vector1 from "../assets/vector1.svg";
import header from "../assets/header.svg";
import useResponsiveStyles from "../utils/MediaQuery";
import logo from "../assets/logo.svg";
import CustomContainer from "../components/structure/CustomContainer";
import CustomAllTypography from "../components/typography/CustomTypograpgy";
import { CustomInputButton } from "../components/button/CustomButoon";
import CommonTextInput from "../components/textfield/CommonTextInput";
import PhoneIcon from "../components/icons/PhoneIcon";
import { useNavigate } from "react-router-dom";
import { useAddAdminMutation } from "../services/admin";

const OnBoardingPage = () => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const [addAdmin,{data:profileData,isLoading,isSuccess}] = useAddAdminMutation();
  const [onBoardingDetail, setOnBoardingDetail] = useState({
    email: "arpit.singh@gmail.com",
    fullName: "",
    phoneNumber: "",  
    companyName: "",
    profession: "",
    profileImage: "link of profile image"
  });
  

  useEffect(()=>{
    console.log(onBoardingDetail)
  },[onBoardingDetail])


  const handleInputChange = (event) => {
    console.log("hii",event);
    const { name, value } = event.target;
    setOnBoardingDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };



  const handelOnBoard = async() =>{
  await  addAdmin(onBoardingDetail).then((response)=>{
    console.log("--->",response.data)
      if(response.data){ 
        navigate(`/dashboard/home/${response.data._id}`)}
    })
  }

  return (
    <CustomContainer>
      <div
        style={{
          height: "100%",
          width: "100vw",
          display: "flex",
          backgroundColor: "",
        }}
      >
        <div
          style={{
            backgroundColor: "#E5E4FF",
            width: "100vw",
            background:
              "linear-gradient(337deg, #E3E5FB 0%, #E6E7FA 12.50%, #F8F5F6 100%)",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", left: "0", bottom: "0" }}>
            <img
              src={vector}
              alt="vector1"
              width={responsive.isMobile ? "50%" : "100%"}
            />
          </div>
          <div style={{ position: "absolute", right: "0", top: "0" }}>
            {!responsive.isMobile ? (
              <img src={vector1} alt="vector2" width={"100%"} />
            ) : (
              ""
            )}
          </div>
          <div style={{ width: "100%", height: "10%" }}>
            <div style={{ width: "60%", padding: "10px" }}>
              <img
                src={responsive.isMobile ? logo : header}
                width={responsive.isMobile ? "" : ""}
              ></img>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                padding:
                  responsive.isMobile || responsive.isTablet
                    ? "1.5rem"
                    : "4rem",
                borderRadius: "1.125rem",
                marginTop: responsive.isTablet ? "" : "0.78rem",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                background: "white",
                width: responsive.isMobile ? "75%" : "35%",
                // height: responsive.isMobile ? "90%" : "90%",
                justifyContent: "space-between",
                // gap:
                // height:'max-content'
              }}
            >
              <CustomAllTypography
                name={"Let us know about you"}
                variant={"h3"}
              />
              <div
                style={{
                  marginTop:
                    responsive.isMobile || responsive.isTablet
                      ? "1rem"
                      : "3rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: responsive.isTablet ? "1rem" : "1.5rem",
                }}
              >
                <CommonTextInput
                  value={onBoardingDetail.fullName}
                  title="Full Name"
                  placeholder="FirstName LastName"
                  searchInput={false}
                  setValue={setOnBoardingDetail.fullName}
                  name="fullName"
                  handleInputChange={handleInputChange}
                />
                <CommonTextInput
                  startIcon={<PhoneIcon />}
                  extraText={"+91"}
                  placeholder="Mobile no."
                  value={onBoardingDetail.phoneNumber}
                  setValue={setOnBoardingDetail.phoneNumber}
                  name="phoneNumber"
                  handleInputChange={handleInputChange}
                  // status={"error"}
                />
                <CommonTextInput
                  title="Company name"
                  placeholder="Company name"
                  value={onBoardingDetail.companyName}
                  setValue={setOnBoardingDetail.companyName}
                  searchInput={false}
                  name="companyName"
                  handleInputChange={handleInputChange}
                />
                <CommonTextInput
                  type="dropdown"
                  placeholder="Your Profession"
                  value={onBoardingDetail.profession}
                  setValue={setOnBoardingDetail.profession}
                  handleInputChange={handleInputChange}
                  name="profession"
                />
              </div>
              <div
                style={{ marginTop: responsive.isMobile ? "1rem" : "2.5rem" }}
              >
                <CustomInputButton
                  width={"100%"}
                  variant="contained"
                  size="large"
                  responsive
                  // onClick={() => navigate("/dashboard/home/existinguser")}
                  onClick={handelOnBoard}
                >
                  Proceed
                </CustomInputButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default OnBoardingPage;
