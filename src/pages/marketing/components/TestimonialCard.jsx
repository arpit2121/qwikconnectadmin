import React from 'react'
import { CustomCard } from '../../../components/card/CustomCard'
import { makeStyles } from "@mui/styles";
import CustomAllTypography from '../../../components/typography/CustomTypograpgy';


const useStyles = makeStyles({
    card: {
      "&:hover": {
        background: "linear-gradient(180deg, rgba(96, 93, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #FFF",
        "& .trash-icon": {
          visibility: "visible",
          // backgroundColor:'red'
        },
      },
      "& .trash-icon": {
        position:'relative',
        // backgroundColor: "blue", // Apply a different background color when not hovered
        visibility: "hidden", // You can also control the default display here if needed
      },
    },
    // trashIcon: {
    //   display: "none",
    //   position: "absolute",
    //   top: "0.5rem",
    //   right: "0.5rem",
    //   cursor: "pointer",
    //   zIndex: 1,
    //   "&:hover": {
    //     display: "block",
    //   }
    // },
  });

const TestimonialCard = ({data}) => {
    const classes = useStyles();
  return (
    <CustomCard className={classes.card}
    sx={{
      maxWidth: "23.65rem",
      padding: "1rem",
      borderRadius: "1.25rem",
      border: "1px solid transparent",
      boxShadow: "0px 8px 16px 0px rgba(142, 141, 208, 0.12)",
    }}>
        <div style={{marginTop: '1rem', display:'flex', gap:'1rem', alignItems:'center'}}>
            <div style={{borderRadius:'50%', backgroundColor: '#D9D9D9', height:'3.5rem', width:'3.4375rem'}}></div>
            <div>
                <CustomAllTypography name={'ABC NAME'} variant={'h5'}/>
                <CustomAllTypography name={'HR Manager, ABC Corp'} variant={'body2'}/>
            </div>
        </div>
        <div style={{marginTop: '1.69rem'}}>
            <CustomAllTypography name={'Absolutely love how user-friendly this one-way video interviewing software is! Makes our hiring process a breeze.'} variant={'body2'}/>
        </div>
    </CustomCard>
  )
}

export default TestimonialCard