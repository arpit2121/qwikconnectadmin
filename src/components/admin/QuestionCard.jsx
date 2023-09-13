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
import { TextField } from '@mui/material'
import DeleteIcon from '../icons/DeleteIcon'
import TrashIcon from '../icons/TrashIcon'


function QuestionCard({index}) {
    const responsive = useResponsiveStyles();

    const onEdit = () =>{
      console.log("Edit Called")
    }

    const [questionsObject,setQuestionObject] = [
      {
        question_title: "Quesstion Title here",
        questionVideo: "",
        isMandatory: false,
        retakes: "1",
        thinking_time: "30sec",
        time_to_answer: "30sec",
      },
    ]

    

  return (
    <CustomCard key={index} sx={{display:'flex', alignItems:'center',gap:'1.5rem', flexDirection:responsive.isMobile?'column-reverse':'',strokeWidth:'1px',stroke:'#F4F3FE',filter:'drop-shadow(0px 8px 16px rgba(142, 141, 208, 0.12))',borderRadius:'1rem',boxShadow:'0px 8px 16px 0px rgba(142, 141, 208, 0.12)'}}>
        <div style={{cursor:'move'}}>{responsive.isMobile? <QuestionCardIconHorizontal/>:<QuestionCardLines/>}</div>
        <CustomDropzone style={{width:'10.5rem', height:'10.625rem'}}/>
        <div style={{display:'flex',flexDirection:'column', gap:'1.50rem',width: responsive.isMobile?'100%':'80%',justifyContent:'center'}}> 
            <div style={{display:'flex',gap:'1rem',alignItems:'center'}} key={index}>
            {
              true
              ?
              <CustomAllTypography name="Question Title here" variant='h3' textcolor="#C9C8D3"/>
              :
              <TextField  
              variant="standard"
              autoFocus
              inputProps={{
                style: {
                  fontSize: "16px",
                  border: "none",
                  outline: "none",
                  padding: "2px",
                  fontWeight: 700,
                },
              }}
              value={"Question Title here"}
              name="job_title"
              onChange={(event) => handleInputChange(event)}
              onBlur={(event) => setIsNamedFocused(false)}
            />
            }
            <div onClick={onEdit}>
            <EditIcon/>
            </div>
            </div>
            <div style={{display:'flex',gap:'0.652rem'}}><Checkbox/><div>Mandatory</div></div>
            <div style={{display:responsive.isMobile?'':'flex',gap:'2.56rem'}}>
            <div style={{display:responsive.isMobile?'flex':'', justifyContent:'space-between', alignItems:'center'}}>
                <div>Retakes:</div>
                <CommonTextInput
                    style={{ margin: "1.5rem 0rem",width:responsive.isMobile?'9.6435rem':''}}
                    borderStyle = {{borderRadius:'0.25rem'}}
                    type="dropdown"
                    placeholder="1 time"
                    options={[1,2,3,4,5]}
                    value=''
                    
                  />
                </div>
                <div style={{display:responsive.isMobile?'flex':'', justifyContent:'space-between',alignItems:'center'}}>
                <div>Thinking Time:</div>
                <CommonTextInput
                    style={{ margin: "1.5rem 0rem",width:responsive.isMobile?'9.6435rem':''}}
                    borderStyle = {{borderRadius:'0.25rem'}}
                    type="dropdown"
                    placeholder="30 Sec"
                    options={['5s','10s','15s','20s','25s']}
                    value=''
                  />
                </div>
                <div style={{display:responsive.isMobile?'flex':'', justifyContent:'space-between',alignItems:'center'}}>
                <div>Time to Answer:</div>
                <CommonTextInput
                    style={{ margin: "1.5rem 0rem", width:responsive.isMobile?'9.6435rem':''}}
                    borderStyle = {{borderRadius:'0.25rem'}}
                    type="dropdown"
                    placeholder="30 Sec"
                    options={['30s','1m','2m','5m','10m']}
                    value=''
                  />
                </div>
            </div>
        </div>
        {responsive.isMobile ? '':<div style={{flex:'1',alignSelf:'end',marginBottom:'1rem'}}><TrashIcon/></div>}
    </CustomCard>
  )
}

export default QuestionCard