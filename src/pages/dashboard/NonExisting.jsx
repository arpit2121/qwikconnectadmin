import React from 'react'
import CustomAllTypography from '../../components/typography/CustomTypograpgy'
import { CustomCard } from '../../components/card/CustomCard'
import { Button } from '@mui/material'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useResponsiveStyles from '../../utils/MediaQuery';

const NonExisting = () => {
    const responsive = useResponsiveStyles();
  return (
    <div style={{width: "100%" }}>
        <CustomCard responsive={responsive} sx={{display:'flex',
  flexDirection:'column',
  alignItems:'center',borderRadius:'1.25rem',padding}}>
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
        </CustomCard>
      </div>
  )
}

export default NonExisting;