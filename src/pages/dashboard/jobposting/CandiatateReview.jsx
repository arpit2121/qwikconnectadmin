import React from "react";
import Navbar from "../../../components/structure/admin/Navbar";
import CustomContainer from "../../../components/structure/CustomContainer";
import { CustomCard } from "../../../components/card/CustomCard";
import CustomAllTypography, { CustomTypography } from "../../../components/typography/CustomTypograpgy";
import CustomizedTextField from "../../../components/textfield/CustomizedTextField";
import RadioGroupRating from "../../../components/admin/RatingParameter";
import Player from "../../../components/videoplayer/Player";

const CandiatateReview = () => {
  return (
    <CustomContainer>
      <div
        style={{
          height: "100%",
          width: "100vw",
          // display: "flex",
          maxHeight: "862px",
          
        }}
      >
        <div style={{ height: "100%", width: "100%", backgroundColor: "" }}>
          <div
            style={{
              height: "10%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 1rem 0 1rem",
              boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.5)",
              position: "sticky",
              top: 0,
              backgroundColor: "#fff",
            }}
          >
            <Navbar />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "25%",
                backgroundColor: "",
                // border: "1px solid #EBEBEB",
              }}
            >
              <div style={{border:'1px solid #EBEBEB',padding:'0 1rem 6rem 1rem',position:'sticky',top:'5rem'}}>
                  <div style={{marginTop:'3.41rem'}}>
                    <img src="" alt="profile"/>
                  </div>
                  <div style={{marginTop:'2.30rem'}}>
                    <CustomAllTypography name={'Danish Shah'} variant={'h3'}/>
                  </div>
                  <div  style={{marginTop:'0.75rem'}}>
                    <CustomAllTypography name={'email@emailexample.com'} variant={'body2'}/>
                    <CustomAllTypography name={'+91 993 000 0000'} variant={'body2'}/>
                  </div>
                  <div style={{marginTop:'1.44rem'}}>
                  <CustomAllTypography name={'1d ago'} variant={'body2'}/>
                  </div>
                  <div style={{marginTop:'2.50rem'}}>
                    status -- pending
                  </div>
                  <div style={{marginTop:'2.50rem',display:'flex',flexDirection:'column',gap:'0.50rem'}}>
                  <CustomAllTypography name={'Current company: Flipmart'} variant={'body2'}/>
                  <CustomAllTypography name={'Exp.: 16 years'} variant={'body2'}/>
                  <CustomAllTypography name={'Profession: UI/UX Lead'} variant={'body2'}/>
                  <CustomAllTypography name={'Location: Remote'} variant={'body2'}/>
                  </div>
                  <div style={{marginTop:'2.63rem'}}>
                      button
                  </div>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                backgroundColor: "",
                padding: "0 1.5rem 0 1.5rem",
                overflow: 'auto'
              }}
            >
              <div style={{ marginTop: "1.66rem" }}>dashboard</div>
              <div style={{ marginTop: "1.75rem" }}>
                <CustomCard sx={{ borderRadius: "1.25rem" }}>
                  <CustomAllTypography
                    name={"Q1. What are your hobbies?"}
                    variant={"h5"}
                  />
                  <div style={{ marginTop: "0.5rem",height:'21rem',backgroundColor:'black',display:'flex',justifyContent:'center',alignItems:'center',overflowX:'auto'}}>
                    {/* <CustomAllTypography name={"f"}/> */}
                    <h1 style={{color:'white'}}>Video</h1>
                  </div>
                  <div style={{marginTop:'1.21rem',display:'flex',gap:'1rem'}}>
                    <CustomCard sx={{width:'9.25rem', height:'3.875rem'}}>
                      videos will come in a slide way
                    </CustomCard>
                    <CustomCard sx={{width:'9.25rem', height:'3.875rem'}}>
                      videos will come in a slide way
                    </CustomCard>
                    <CustomCard sx={{width:'9.25rem', height:'3.875rem'}}>
                      videos will come in a slide way
                    </CustomCard>
                    <CustomCard sx={{width:'9.25rem', height:'3.875rem'}}>
                      videos will come in a slide way
                    </CustomCard>
                    <CustomCard sx={{width:'9.25rem', height:'3.875rem'}}>
                      videos will come in a slide way
                    </CustomCard>
                  </div>
                </CustomCard>
              </div>
              <div
                style={{
                  marginTop: "1.30rem",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                download anyway
              </div>
              <div>
                <CustomAllTypography name={"Comments"} variant={"h6"} />
              </div>
              <div style={{ marginTop: "0.75rem" }}>
                <CustomizedTextField />
              </div>
            </div>
            <div
              style={{
                width: "25%",
                backgroundColor: "",
                // border: "1px solid #EBEBEB",
              }}
            >
              <div style={{border:'1px solid #EBEBEB',padding:'0 1rem 5rem 1rem',position:'sticky',top:'5rem'}}>
                  <div  style={{ marginTop: "6rem" }}>
                    <CustomAllTypography name={'Overall Ratings:'} variant={'h5'}/>
                  </div>
                  <div  style={{ marginTop: "1.94rem" }}>
                    <CustomAllTypography name={'Rejected'} variant={'h4'}/>
                  </div>
                  <div style={{ marginTop: "3rem",display:'flex',flexDirection:'column',gap:'1.50rem' }}>
                  <CustomAllTypography name={'Rating Parameters'} variant={'body3'}/>
                  <span style={{gap:'2rem',display:'flex'}}><CustomAllTypography name={'Concentration'} variant={'body3'}/> <RadioGroupRating/></span>
                  <span style={{gap:'2rem',display:'flex'}}><CustomAllTypography name={'Flexible'} variant={'body3'}/> <RadioGroupRating/></span>
                  <span style={{gap:'2rem',display:'flex'}}><CustomAllTypography name={'Competency'} variant={'body3'}/> <RadioGroupRating/></span>
                  <span style={{gap:'2rem',display:'flex'}}><CustomAllTypography name={'Skills'} variant={'body3'}/> <RadioGroupRating/></span>
                  <span style={{gap:'2rem',display:'flex'}}><CustomAllTypography name={'Aptitude'} variant={'body3'}/> <RadioGroupRating/></span> 
                  </div>
                  <div style={{marginTop:'2.50rem'}}>
                    button
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default CandiatateReview;
