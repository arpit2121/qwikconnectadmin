import React from 'react'
import { CustomCard } from '../card/CustomCard'
import QuestionCardLines from '../icons/QuestionCardLines'
import CustomAllTypography from '../typography/CustomTypograpgy'
import EditIcon from '../icons/EditIcon'
import useResponsiveStyles from '../../utils/MediaQuery'
import QuestionCardIconHorizontal from '../icons/QuestionCardIconHorizontal'
import Checkbox from '../selectedcontrols/CheckBox'
import CommonTextInput from '../textfield/CommonTextInput'
import CustomDropzone from '../dropzone/CustomDropzone'


function QuestionCard() {
    const responsive = useResponsiveStyles();
  return (
    <CustomCard sx={{display:'flex', alignItems:'center',gap:'1.5rem', flexDirection:responsive.isMobile?'column-reverse':''}}>
        {/* <div style={{width:'0.6875rem', height:'2.9375rem',backgroundColor:'red'}}> */}
        {responsive.isMobile? <QuestionCardIconHorizontal/>:<QuestionCardLines/>}
        {/* </div> */}
        {/* <div style={{width:'10.5rem', height:'10.625rem', backgroundColor:'grey'}}> */}
        {/* <div> */}
        <CustomDropzone style={{width:'10.5rem', height:'10.625rem'}}/>
        {/* </div> */}
        {/* </div> */}
        <div style={{display:'flex',flexDirection:'column', gap:'1.50rem',width: responsive.isMobile?'100%':'80%'}}> 
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <CustomAllTypography name="Question Title here" variant='h3'/>
            <EditIcon/>
            </div>
            <div style={{display:'flex',gap:'0.652rem'}}><Checkbox/><div>Mandatory</div></div>
            <div style={{display:responsive.isMobile?'':'flex',gap:'2.56rem'}}>
            <div style={{display:responsive.isMobile?'flex':'', justifyContent:'space-between', alignItems:'center'}}>
                <div>Retakes</div>
                <CommonTextInput
                    style={{ margin: "1.5rem 0rem",width:responsive.isMobile?'9.6435rem':''}}
                    borderStyle = {{borderRadius:'0.25rem'}}
                    type="dropdown"
                    placeholder="None"
                  />
                </div>
                <div style={{display:responsive.isMobile?'flex':'', justifyContent:'space-between',alignItems:'center'}}>
                <div>Thinking Time:</div>
                <CommonTextInput
                    style={{ margin: "1.5rem 0rem",width:responsive.isMobile?'9.6435rem':''}}
                    borderStyle = {{borderRadius:'0.25rem'}}
                    type="dropdown"
                    placeholder="30 Sec"
                  />
                </div>
                <div style={{display:responsive.isMobile?'flex':'', justifyContent:'space-between',alignItems:'center'}}>
                <div>Time to Answer:</div>
                <CommonTextInput
                    style={{ margin: "1.5rem 0rem", width:responsive.isMobile?'9.6435rem':''}}
                    borderStyle = {{borderRadius:'0.25rem'}}
                    type="dropdown"
                    placeholder="30 Sec"
                  />
                </div>
            </div>
            {/* <div>hii</div> */}
        </div>
    </CustomCard>
  )
}

export default QuestionCard