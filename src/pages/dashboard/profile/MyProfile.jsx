import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useNavigate } from "react-router-dom";
import UsersComponent from "../../../components/admin/UsersComponent";
import user1 from "../../../assets//svg/user1.svg";
import PhoneIcon from "../../../components/icons/PhoneIcon";
import LinkBar from "../jobposting/LinkBar";
import PasswordKeyIcon from "../../../components/icons/PasswordKey";

const MyProfile = () => {
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "",
        padding: responsive.isMobile ? "0 1rem 0 1rem" : "0 5rem 0 5rem",
      }}
    >
    <LinkBar linkArray={[
                    { title: "Home", path: "/dashboard/home/existinguser" },
                    { title: "My Profile", path: "/dashboard/myprofile" },
                    { title: "Change Password" },
                  ]}/>
      <div
        style={{
          marginTop: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <UsersComponent image={user1} />
            <div>
              <CustomAllTypography name={"Vaibhav Naik"} variant={"h3"} />
              <CustomAllTypography
                name={"vaibhavnaik@gmail.com"}
                variant={"body2"}
              />
            </div>
          </div>
        </div>
        <CustomInputButton
        startIcon={<PasswordKeyIcon color='#605DEC'/>}
          size="small"
          variant="outlined"
          onClick={() => navigate("/dashboard/changepass")}
        >
          Change Password
        </CustomInputButton>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <CustomAllTypography name={"Basic Details"} variant={"h1"} />
      </div>
      <div
        style={{
          marginTop: "3rem",
          backgroundColor: "",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <div
          style={{
            display: responsive.isMobile ? "" : "flex",
            flexDirection: responsive.isMobile ? "column" : "",
            justifyContent: "space-between",
            gap: "1.25rem",
          }}
        >
          <CommonTextInput
            // value={email}
            // setvalue={setEmail}
            // title="Email ID"
            placeholder="First Name"
            searchInput={false}
            // setValue={setEmail}
            type1={"email"}
          />
          <br />
          <CommonTextInput
            // value={email}
            // setvalue={setEmail}
            // title="Email ID"
            placeholder="Last Name"
            searchInput={false}
            // setValue={setEmail}
            type1={"email"}
          />
        </div>
        <CommonTextInput
          style={{ margin: "1.5rem 0rem" }}
          startIcon={<PhoneIcon />}
          extraText={"+91"}
          placeholder="Mobile no."
        />
        <CommonTextInput
          // value={email}
          // setvalue={setEmail}
          // title="Email ID"
          placeholder="Company Name"
          searchInput={false}
          // setValue={setEmail}
          type1={"email"}
        />
        <CommonTextInput
          style={{ margin: "1.5rem 0rem" }}
          type="dropdown"
          placeholder="Your Profession"
        />
      </div>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom:'4rem'
        }}
      >
        <CustomInputButton size="medium">Save Changes</CustomInputButton>
      </div>
    </div>
  );
};

export default MyProfile;
