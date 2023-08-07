import React from "react";
import UsersComponent from "../../../components/admin/UsersComponent";
import useResponsiveStyles from "../../../utils/MediaQuery";
import user1 from "../../../assets/svg/user1.svg";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import { darkspacetheme } from "../../../theme/theme";

const CommonProfile = ({
    title="Good Morning, Vaibhav",
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
