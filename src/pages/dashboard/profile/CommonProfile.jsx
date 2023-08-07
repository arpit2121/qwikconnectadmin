import React from "react";
import UsersComponent from "../../../components/admin/UsersComponent";
import useResponsiveStyles from "../../../utils/MediaQuery";
import user1 from "../../../assets/svg/user1.svg";

const CommonProfile = ({
    title="",
    subtitle="",
}) => {
  const responsive = useResponsiveStyles();

  return (
    <div
      style={{
        display: !responsive.isMobile ? "flex" : "",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <UsersComponent image={user1} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: responsive.isMobile ? "center" : "flex-start",
          marginTop: responsive.isMobile ? 5 : 0,
        }}
      >
        <CustomAllTypography name={"Good Morning, Vaibhav"} variant={"h3"} />
        <CustomAllTypography
          name={"Ready to hunt your next candidate? "}
          variant={"body2"}
        />
      </div>
    </div>
  );
};

export default CommonProfile;
