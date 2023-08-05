import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useNavigate } from "react-router-dom";
import UsersComponent from "../../../components/admin/UsersComponent";
import user1 from "../../../assets//svg/user1.svg";

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
      <div style={{ marginTop: "2.75rem"}}>dashboard profile</div>
      <div
        style={{
          marginTop: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
        <div style={{ display: "flex", justifyContent: "center",gap:'1rem',alignItems:'center' }}>
            <UsersComponent image={user1} />
            <div>
            <CustomAllTypography name={'Vaibhav Naik'} variant={'h3'}/>
            <CustomAllTypography name={'vaibhavnaik@gmail.com'} variant={'body2'}/>
            </div>
          </div>
        </div>
        <CustomInputButton
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
          // value={email}
          // setvalue={setEmail}
          // title="Email ID"
          placeholder="Mobile "
          searchInput={false}
          // setValue={setEmail}
          type1={"email"}
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
          // value={email}
          // setvalue={setEmail}
          // title="Email ID"
          placeholder="Your Profession"
          searchInput={false}
          // setValue={setEmail}
          type1={"email"}
        />
      </div>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CustomInputButton size="medium">Save Changes</CustomInputButton>
      </div>
    </div>
  );
};

export default MyProfile;
