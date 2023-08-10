import React from "react";
import useResponsiveStyles from "../../utils/MediaQuery";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
// import UserPlusIcon from "../../components/icons/UserplusIcon";
import UserIcon from "../../components/icons/UserIcon";
import RejectedIcon from "../../components/icons/RejectedIcon";
import { darkspacetheme } from "../../theme/theme";

const StatsTopBar = ({ application = 23, shortlisted = 2, rejected = 3 }) => {
  const responsive = useResponsiveStyles();

  const size = responsive?.isMobile ? 24 : 32;
  const outerDiv = {
    display: "flex",
    flexDirection: responsive.isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const innerDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const typographyStyle={
    fontSize: responsive.isMobile
      ? "1.5rem !important"
      : "2rem !important",
    marginRight: responsive.isMobile ? 0 : "0.94rem",
  }
console.log(responsive)
  return (
    <div
      style={{
        display: "flex",
        gap: !responsive.isMobile || responsive.isRandom ? "2rem" : "0.5rem",
        justifyContent: "space-between",
        alignItems: "center",
        padding: responsive.isMobile || responsive.isRandom ? "1rem 1.5rem" : "0rem",
        background: responsive.isMobile ? darkspacetheme.colorPallete.aliceBlue
          : "none",
        borderRadius: responsive.isMobile ? "1.25rem" : "0rem",
      }}
    >
      <div style={outerDiv}>
        <div style={innerDiv}>
          <UserIcon
            height={size}
            width={size}
        
            style={{ marginRight: "0.9rem" }}
          />
          <CustomAllTypography
            sx={typographyStyle}
            name={application} 
          
            variant={responsive.isMobile ? "h4" : "h1"}
          />
        </div>
        <CustomAllTypography name={'Application'} variant={"body1"} />
      </div>
      <div style={outerDiv}>
        <div style={innerDiv}>
          <UserIcon
            height={size}
            width={size}
            style={{ marginRight: "0.9rem" }}
          />
          <CustomAllTypography
            sx={typographyStyle}
            name={shortlisted}
            variant={responsive.isMobile ? "h4" : "h1"}
          />
        </div>
        <CustomAllTypography name={"Shortlisted"} variant={"body1"} />
      </div>
      <div style={outerDiv}>
        <div style={innerDiv}>
          <RejectedIcon
            height={size}
            width={size}
            style={{ marginRight: "0.9rem" }}
          />
          <CustomAllTypography
            sx={typographyStyle}
            name={rejected}
            variant={responsive.isMobile ? "h4" : "h1"}
          />
        </div>
        <CustomAllTypography name={"Rejected"} variant={"body1"} />
      </div>
    </div>
  );
};

export default StatsTopBar;

// import React from 'react'
// import useResponsiveStyles from '../../utils/MediaQuery';
// import UserPlus12Icon from '../../components/icons/UserPlus12Icon';
// import UserIcon from "../../components/icons/UserIcon";
// import RejectedIcon from "../../components/icons/RejectedIcon";
// import CustomAllTypography from '../../components/typography/CustomTypograpgy';

// const StatsTopBar = () => {
//   const responsive = useResponsiveStyles()
//   return (
//     <div style={{backgroundColor:'red',display:'flex',gap:responsive.isMobile?'1.75rem':'3.06rem',padding:responsive.isMobile?'0.25rem':'',backgroundColor:responsive.isMobile?'':'', borderRadius:responsive.isMobile?'0.5rem':''}}>
//       <div style={{display:responsive.isMobile?'':'flex',gap:'0.94rem'}}>
//         <div style={{display:'flex',gap:responsive.isMobile?'0.25rem':'0.94rem',alignItems:'center'}}>
//         <UserIcon/>
//         <CustomAllTypography name="23" variant={'h3'}/>
//         </div>
//         <CustomAllTypography name="Applications" variant={"body2"}/>
//       </div>
//       <div style={{display:responsive.isMobile?'':'flex',gap:'0.94rem'}}>
//         <div style={{display:'flex',gap:responsive.isMobile?'0.25rem':'0.94rem',alignItems:'center'}}>
//         <UserPlus12Icon />
//         <CustomAllTypography name="3" variant={'h3'}/>
//         </div>
//         <CustomAllTypography name="Shortlisted" variant={"body2"}/>
//       </div>
//       <div style={{display:responsive.isMobile?'':'flex',gap:'0.94rem',alignItems:'center'}}>
//         <div style={{display:'flex',gap:responsive.isMobile?'0.25rem':'0.94rem',alignItems:'center'}}>
//         <RejectedIcon />
//         <CustomAllTypography name="2" variant={'h3'}/>
//         </div>
//         <CustomAllTypography name="Rejected" variant={"body2"}/>
//       </div>
//     </div>
//   )
// }

// export default StatsTopBar