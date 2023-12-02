import React, { useEffect, useState } from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import useResponsiveStyles from "../../../utils/MediaQuery";
import CommonTextInput from "../../../components/textfield/CommonTextInput";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import { useNavigate } from "react-router-dom";
import UsersComponent from "../../../components/admin/UsersComponent";
import user1 from "../../../assets//svg/user1.svg";
import PhoneIcon from "../../../components/icons/PhoneIcon";
import LinkBar from "../jobposting/LinkBar";
import KeyIcon from "../../../components/icons/KeyIcon";
import { useGetAdminInfoQuery, useUpdateAdminProfileMutation } from "../../../services/admin";
import { useDispatch, useSelector } from "react-redux";
import { setApiLoadere } from "../../../slice/common.slice";
import EditIcon from "../../../components/icons/EditIcon";
import { adminsApi } from "../../../services/admin";
import { setAdminProfile } from "../../../slice/admin.slice";


const MyProfile = () => {
  const responsive = useResponsiveStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const adminId = useSelector((state)=>state.auth.adminId);

  const [getAdminInfo, {data: adminsData, isLoading}] = adminsApi.endpoints.getAdminInfo.useLazyQuery()

  const [updateAdminProfile, {error}] = useUpdateAdminProfileMutation();

  const adminProfile = useSelector((state)=> state.admin.adminProfile)
  console.log(adminProfile)

  if(isLoading) {
    dispatch(setApiLoadere(true));
  }
  else{
    dispatch(setApiLoadere(false));
  }


  useEffect(() => {
    (async () => {
      if (adminId) {
        await getAdminInfo(adminId);
      }
    })();
  }, [dispatch]);


  const isEdit = () =>{
    setDisabled(false)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setAdminProfile({name, value}))
  };


  const handelClick = async () =>{
    const adminProfileData = {...adminProfile, fullName: `${adminProfile.firstName} ${adminProfile.lastName}`}
    delete adminProfileData.firstName;
    delete adminProfileData.lastName;
    const data = await updateAdminProfile({adminId, adminProfileData});
    if(!data){
      console.log("error", error)
    }
  }


  return (
    <div
      style={{
        backgroundColor: "",
        padding: responsive.isMobile ? "0 1rem 0 1rem" : responsive.isTablet? "0 5rem 0 5rem" : "0rem 15rem 0 15rem",
      }}
    >
      <LinkBar
        linkArray={[
          { title: "Home", path: "/dashboard/home" },
          { title: "My Profile", path: "/dashboard/myprofile" },
          { title: "Update Profile" },
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
              <CustomAllTypography name={adminsData?.admin?.fullName.split(" ")[0]} variant={"h3"} />
              <CustomAllTypography
                name={adminsData?.admin?.email}
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
            value={adminProfile?.firstName}
            title="First Name"
            placeholder="First Name"
            name="firstName"
            handleInputChange={handleInputChange}
          />
          <br />
          <CommonTextInput
          disabled={disabled}
          value={adminProfile?.lastName}
          title="Last Name"
          placeholder="Last Name"
          name="lastName"
          handleInputChange={handleInputChange}
          // type1={"email"}
          />
        </div>
        <CommonTextInput
        disabled={disabled}
          style={{ margin: "1.5rem 0rem" }}
          startIcon={<PhoneIcon />}
          extraText={"+91"}
          placeholder="Mobile no."
          value={adminProfile?.phone_number}
          handleInputChange={handleInputChange}
          name="phone_number"
        />
        <CommonTextInput
          disabled={disabled}
          value={adminProfile?.company_name}
          title="Company Name"
          placeholder="Company Name"
          searchInput={false}
          handleInputChange={handleInputChange}
          name="company_name"
        />
        <CommonTextInput
          disabled={disabled}
          style={{ margin: "1.5rem 0rem" }}
          type="dropdown"
          placeholder="Your Profession"
          value={adminProfile?.profession}
          handleInputChange={handleInputChange}
          name="profession"
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
        <CustomInputButton size="medium" onClick={handelClick} disabled={disabled}>Save Changes</CustomInputButton>
      </div>
    </div>
  );
};

export default MyProfile;
