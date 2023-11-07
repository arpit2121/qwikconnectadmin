import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomAllTypography from "../../components/typography/CustomTypograpgy";
import { CustomCard } from "../../components/card/CustomCard";
import { CustomInputButton } from "../../components/button/CustomButoon";
import RightArrowIcon from "../../components/icons/RightArrowIcon";
import { useAddNewJobMutation } from "../../services/job";



const NonExisting = () => {
  
  const [addNewJob, {data,isLoading}] = useAddNewJobMutation();
  const navigate = useNavigate();

  const handelClick = async () =>{
    console.log("hiii")
    await addNewJob("651137f89cbfd5858dc871a5").then((response) => {
      console.log("response data", response.data);
      if (response.data) {
        navigate("/jobposting/basicDaetails");
      }
    });
  }

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
                  onClick={handelClick}
                >
            New Job
          </CustomInputButton>
      </CustomCard>
    </div>
  );
};

export default NonExisting;
