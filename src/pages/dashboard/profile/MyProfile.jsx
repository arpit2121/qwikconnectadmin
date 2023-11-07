import React, { useState } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useNavigate, useParams } from "react-router-dom";
import UsersComponent from "../../../components/admin/UsersComponent";
import user1 from "../../../assets//svg/user1.svg";
import PhoneIcon from "../../../components/icons/PhoneIcon";
import LinkBar from "../jobposting/LinkBar";
import KeyIcon from "../../../components/icons/KeyIcon";
import { useGetAdminInfoQuery } from "../../../services/admin";
import { useDispatch } from "react-redux";
import { setApiLoadere } from "../../../slice/common.slice";
import EditIcon from "../../../components/icons/EditIcon";

const MyProfile = () => {
  const responsive = useResponsiveStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const {id} = useParams();
  const {
    data:adminData,
    isLoading,
  } = useGetAdminInfoQuery(id);


  const isEdit = () =>{
    console.log("edit called")
    setDisabled(false)
  }

  console.log("id --> ",id)


  if(isLoading) {
    dispatch(setApiLoadere(true));
  }
  else{
    dispatch(setApiLoadere(false));
  }

  console.log("admin data in my profiel --> ",adminData)
  return (
    <div
      style={{
        backgroundColor: "",
        padding: responsive.isMobile ? "0 1rem 0 1rem" : responsive.isTablet? "0 5rem 0 5rem" : "0rem 15rem 0 15rem",
      }}
    >
      <LinkBar
        linkArray={[
          { title: "Home", path: "/dashboard/home/existinguser" },
          { title: "My Profile", path: "/dashboard/myprofile" },
          { title: "Change Password" },
        ]}
      />
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
              <CustomAllTypography name={adminData?.admin?.fullName} variant={"h3"} />
              <CustomAllTypography
                name={adminData?.email}
                variant={"body2"}
              />
            </div>
          </div>
        </div>
        {
          responsive.isMobile
          ?
          <div onClick={() => navigate("/dashboard/changepass")}>
            <KeyIcon/>
          </div>
          :
          <CustomInputButton
          size="small"
          variant="outlined"
          startIcon={<KeyIcon/>}
          onClick={() => navigate("/dashboard/changepass")}
        >
          Change Password
        </CustomInputButton>
        }
      </div>
      <div style={{ marginTop: "2rem", display:'flex', alignItems:'center', gap:'2rem' }}>
        <CustomAllTypography name={"Basic Details"} variant={"h1"} />
        <div onClick={isEdit} style={{cursor:'pointer'}}><EditIcon/></div>
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
          disabled={disabled}
            value={adminData?.admin?.fullName}
            // setvalue={setEmail}
            title="First Name"
            placeholder="First Name"
            searchInput={false}
            // setValue={setEmail}
            type1={"email"}
          />
          <br />
          <CommonTextInput
          disabled={disabled}
            value={adminData?.admin?.fullName}
            // setvalue={setEmail}
            title="Last Name"
            placeholder="Last Name"
            searchInput={false}
            // setValue={setEmail}
            type1={"email"}
          />
        </div>
        <CommonTextInput
        disabled={disabled}
          style={{ margin: "1.5rem 0rem" }}
          startIcon={<PhoneIcon />}
          extraText={"+91"}
          placeholder="Mobile no."
          value={adminData?.admin?.phone_number}
        />
        <CommonTextInput
        disabled={disabled}
          value={adminData?.admin?.company_name}
          // setvalue={setEmail}
          title="Company Name"
          placeholder="Company Name"
          searchInput={false}
          // setValue={setEmail}
          type1={"email"}
        />
        <CommonTextInput
        disabled={disabled}
          style={{ margin: "1.5rem 0rem" }}
          type="dropdown"
          placeholder="Your Profession"
          value={adminData?.admin?.profession}
        />
      </div>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: "4rem",
        }}
      >
        <CustomInputButton size="medium">Save Changes</CustomInputButton>
      </div>
    </div>
  );
};

export default MyProfile;
