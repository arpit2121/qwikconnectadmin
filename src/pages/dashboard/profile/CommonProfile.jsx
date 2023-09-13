import React from "react";
import UsersComponent from "../../../components/admin/UsersComponent";
import useResponsiveStyles from "../../../utils/MediaQuery";
import user1 from "../../../assets/svg/user1.svg";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { darkspacetheme } from "../../../theme/theme";


function getGreetingByTime() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 11) {
    return "Good Morning";
  } else if (currentHour >= 11 && currentHour < 16) {
    return "Good Afternoon";
  } else if (currentHour >= 16 && currentHour < 22) {
    return "Good Evening";
  }
  else {
    return "Hello, Night Owl";
  }
}


const CommonProfile = ({
    title=`${getGreetingByTime()}, Vaibhav`,
    subtitle="Ready to hunt your next candidate? ",
    style={}
}) => {

  const responsive = useResponsiveStyles();
  const size=responsive.isMobile?'2.4rem':'5.93rem'

  return (
    <div
      style={{
        display:'flex',
        gap: "1rem",
        alignItems: "center",
        marginBottom: responsive.isMobile ? "2rem" : 0 ,
        ...style
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <UsersComponent style={{height:size,width:size}} image={user1} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: responsive.isMobile ? 5 : 0,
        }}
      >
        <CustomAllTypography name={title} variant={"h3"} />
        <CustomAllTypography
          name={subtitle}
          variant={"body2"}
          color={darkspacetheme.colorPallete.textGrey}
        />
      </div>
    </div>
  );
};

export default CommonProfile;
