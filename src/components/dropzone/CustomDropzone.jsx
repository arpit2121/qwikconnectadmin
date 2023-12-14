import React, { useEffect } from "react";
import {styled } from "@mui/styles";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { Slider } from "@mui/material";
import { useState } from "react";
import CustomAllTypography from "../typography/CustomTypograpgy";
import useResponsiveStyles from "../../utils/MediaQuery";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import UploadIcon from "../icons/UploadIcon";
import SuccessIcon from "../icons/SuccessIcon";
import CloseIcon from "../icons/CloseIcon";
import PdfImage from "../../assets/pdfImage.jpg";
import { useDispatch } from "react-redux";
import { setFilesData } from "../../slice/common.slice";
import {setBrandingLogo} from "../../slice/job.slice";



const CustomSoundBar = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-root": {
    "@media (pointer: coarse)": {
      padding: "0px !important",
    },
  },
  "& .MuiSlider-track": {
    backgroundColor: "black", //color of track
    border: "none",
    opacity: 1,
    // width:'2%',
  },
  "& .MuiSlider-rail": {
    background: "white", ////color of the slider outside teh area between thumbs
    opacity: 1,
  },
}));



const Layout = ({
  input,
  previews,
  submitButton,
  dropzoneProps,
  files,
  extra: { maxFiles },
}) => {
  return (
    <div>
      {files.length == 0 && (
        <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
      )}
      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "0.62rem",
            border: "1px dotted black",
            padding: "1rem",
            // marginTop: "2.31rem",
            alignItems: "center",
            justifyContent: files.length == 1 ? "space-around" : "",
          }}
        >
          {previews}
        </div>
      )}
    </div>
  );
};

const Preview = ({ meta, files },...props) => {
  const [loaded, setLoaded] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);
  const responsive = useResponsiveStyles();
  const width = !responsive.isMobile ? "6.87rem" : "5rem";
  const [hovered, setHovered] = useState(false);


  useEffect(() => {
    setLoaded(meta?.percent);
    if (meta?.percent == 100) {
      setTimeout(() => {
        setDoneLoading(true);
      }, 1000);
    }
  }, [meta]);
  
  const onMouseOver = (e) => {
    e.stopPropagation();
    console.log("hoverr");
    doneLoading && setHovered(true);
  };

  const dispatch = useDispatch();

  const handelFileRemove = () =>{
       files.forEach((f) => {
                if (f?.meta?.id == meta?.id) f.remove();
              })
        dispatch(setBrandingLogo(""))
        // removedUploadedFile();
  }

  return (
    <div
      style={{
        height: width,
        width: width,
        display: "flex",
        position: "relative",
      }}
    >
      <img
        onMouseOver={onMouseOver}
        style={{ height: "100%", width: "100%", zIndex: 9 }}
        src={meta?.previewUrl ? meta?.previewUrl : PdfImage}
        // src={meta?.previewUrl || PdfImage}
      />

      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          display: doneLoading ? "none" : "flex",
          height: width,
          zIndex: 10,
          width: width,
          position: "absolute",
          top: 0,
          alignItems: "center",
          justifyContent: "center",
          left: 0,
        }}
      >
        {loaded < 100 ? (
          <CustomSoundBar
            sx={{ height: "10px", padding: "0px !important", width: "80%" }}
            aria-label="Volume"
            value={loaded}
          />
        ) : (
          <SuccessIcon />
        )}
      </div>
      {hovered && (
        <div
          onMouseOut={(e) => {
              e.stopPropagation();
            setHovered(false);
          }}
          style={{
            background: "rgba(0,0,0,0.4)",
            zIndex: 10,
            height: width,
            width: width,
            position: "absolute",
            top: 0,
            display: "flex ",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            left: 0,
          }}
        >
          {
            true ?
            <CloseIcon
            // onClick={() =>
            //   files.forEach((f) => {
            //     if (f?.meta?.id == meta?.id) f.remove();
            //   })
            // }
            onClick={handelFileRemove}
          />
            :
            ""
          }
          <CustomAllTypography
            name={meta.name}
            textcolor={"white"}
            sx={{
              fontSize: "0.75rem",
              maxWidth: "100%",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          />
          <CustomAllTypography
            name={`${Math.ceil(meta.size / 1000)}KB`}
            textcolor={"white"}
            sx={{ fontSize: "6px" }}
          />
        </div>
      )}
    </div>
  );
};



const Input = ({ accept, onFiles, files, getFilesFromEvent, message}) => {

  const text = files.length > 0 ? "Add more files" : "Choose files";
  const responsive = useResponsiveStyles();

  return (
    <label
      style={{
        color: "#fff",
        cursor: "pointer",
        borderRadius: 3,
        minHeight: "10.62rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UploadIcon />
      <div style={{ textAlign: "center", color: "#212121" }}>
        <CustomAllTypography
          // name={"Upload your resume here"}
          name={message}
          sx={{ fontSize: "0.75rem" }}
          textcolor={"#8A8894"}
        />
        <CustomAllTypography
          name={message?message:"PDF, Word format only, File Size: 3 MB max"}
          sx={{ fontSize: "0.75rem" }}
          textcolor={"#8A8894"}
        />
      </div>

      <input
        style={{ display: "none" }}
        // disabled
        //you can disabled once the files is true
        type="file"
        accept={accept}
        onChange={(e) => {
          getFilesFromEvent(e).then((chosenFiles) => {
            onFiles(chosenFiles);
          });
        }}
      />
    </label>
  );
};

const CustomLayout = ({ acceptedTypes,message, settingUplodedFile, removeUploadedFile, handelSaveVideoKey,  index}) => {

  const dispatch = useDispatch();

  console.log("index", index)

  const getUploadParams = () => ({ url: "https://httpbin.org/post" });

  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };

  const handleChangeStatus = ({ meta, file }, status) => {
     console.log("uploading",file,"status",status) 
      if(status==="done"){
        dispatch(settingUplodedFile({file,index}))
      }
    }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };


  return (
    <Dropzone
      getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      onSubmit={handleSubmit}
      // PreviewComponent={<Preview removeUploadedFile={removeUploadedFile}/>}
      PreviewComponent={Preview}
      onChangeStatus={handleChangeStatus}
      multiple={false}
      maxFiles={5}

      disabled={(files) =>
        files.some((f) =>
          ["preparing", "getting_upload_params", "uploading"].includes(
            f.meta.status
          )
        )
      }
      // disabled={disabled}
      accept= {acceptedTypes[0]}
      styles={{
        dropzone: {
          border: "1px dotted black",
          minHeight: "10.62rem",
        },
      }}
      InputComponent={Input}
      getFilesFromEvent={getFilesFromEvent}
    />
  );
};

const CustomDropzone = ({ multiple = false,acceptedTypes,name,setUploadedFiles, dispatch, setFile, settingUplodedFile, removeUploadedFile, handelSaveVideoKey, index}) => {
  return <CustomLayout acceptedTypes={acceptedTypes} message={name}  settingUplodedFile={settingUplodedFile} removeUploadedFile={removeUploadedFile} handelSaveVideoKey={handelSaveVideoKey} index={index}/>;
};

export default CustomDropzone;
