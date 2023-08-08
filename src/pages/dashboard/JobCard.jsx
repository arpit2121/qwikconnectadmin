import React from 'react'
import { CustomCard } from '../../components/card/CustomCard'
import CustomAllTypography from '../../components/typography/CustomTypograpgy'
import TrashIcon from '../../components/icons/TrashIcon'
import { useNavigate } from 'react-router-dom'

const JobCard = () => {
const navigate = useNavigate();
  return (
    <CustomCard
    sx={{ maxWidth: "23.65rem", padding: "1rem", borderRadius: "1.25rem" }}
    onClick={() => navigate("/jobpostingdetailspage")}
  >
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <CustomAllTypography name={"1d ago"} variant={"body3"} />
    </div>
    <div style={{ marginTop: "1.26rem" }}>
      <CustomAllTypography name={"UI/UX Developer / Lead"} variant={"h4"} />
    </div>
    <div style={{ marginTop: "0.75rem" }}>
      <CustomAllTypography name={"Office: Remote"} variant={"body2"} />
    </div>
    <div style={{ marginTop: "0.75rem" }}>
      <CustomAllTypography name={"Exp.: 12 to 16 year"} variant={"body2"} />
    </div>
    <div
      style={{
        marginTop: "1.95rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CustomAllTypography
        name={"24 Applied • 2 Shortlisted • 1 Closed"}
        variant={"body2"}
        color={"#36BF76"}
        textcolor={"#36BF76"}
      />
      <TrashIcon />
    </div>
  </CustomCard>
  )
}

export default JobCard