import React from "react";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import { CustomCard } from "../../components/card/CustomCard";
import useResponsiveStyles from "../../utils/MediaQuery";
import { CustomInputButton } from "../../components/button/CustomButoon";
import RightArrowIcon from "../../components/icons/RightArrowIcon";
import LeftArrowIcon from "../../components/icons/LeftArrowIcon";


const NonExisting = () => {
  const responsive = useResponsiveStyles();
  return (
    <div style={{ marginTop: "8rem", marginRight: "4rem", marginLeft: "3rem" }}>
      <CustomCard
        sx={{
          boxShadow: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)",
          borderRadius: "1.25rem",
          background: "#FFF",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.38rem",
        }}
      >
        <CustomAllTypography name="Positions" variant={"h4"} />
        <CustomAllTypography
          name="Create your first position and video interview"
          variant={"body1"}
        />
        <CustomInputButton
                  variant="outlined"
                  size="medium"
                  endIcon={<RightArrowIcon color="#605DEC"/>}
                  // onClick={handleBack}
                >
            New Job
          </CustomInputButton>
      </CustomCard>
    </div>
    // <div style={{width: "100%" }}>

    // </div>
  );
};

export default NonExisting;

{
  /* <CustomCard responsive={responsive} sx={{display:'flex',
  flexDirection:'column',
  alignItems:'center',borderRadius:'1.25rem'}}>
          <div>
          <CustomAllTypography
            name={"Positions"}
            variant={"h3"}
            fontStyle={"normal"}
          />
          </div>
          <div>
          <CustomAllTypography
            name={"Create your first position and video interview"}
            variant={"body1"}
          />
          </div>
          <div>
          <Button
            variant="contained"
            sx={{ borderRadius: "14px" }}
            endIcon={<ArrowForwardIcon />}
          >
            New Job
          </Button>
          </div>
        </CustomCard> */
}
