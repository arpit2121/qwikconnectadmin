import React from "react";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import Toggle from "../../../components/selectedcontrols/Toggle";
import useResponsiveStyles from "../../../utils/MediaQuery";
import { useState } from "react";
import { CustomInputButton } from "../../../components/button/CustomButoon";
import CopyIcon from "../../../components/icons/CopyIcon";
import CustomDropzone from "../../../components/dropzone/CustomDropzone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { setCsvFile } from "../../../slice/job.slice";

const JobPostingStepFourA = () => {
  const responsive = useResponsiveStyles();
  const [isToggle, setIsToggle] = useState(false);
  // const [publicUrl, setPulicUrl] = useState('https://qwickconnect.io/interview/JobPostTitle/dateofexpire')
  const { publicLink, csvFile } = useSelector((state) => state.job.publish_link);

  console.log("paubslic", csvFile)
  const handleClick = () => {
    // console.log("hii")
    navigator.clipboard.writeText(publicLink);
  };

  // let memoizedUploadedFiles;

  const [uploadedFiles, setUploadedFiles] = useState();

  // memoizedUploadedFiles= useMemo(() => uploadedFiles, [uploadedFiles]);

  console.log("uploadedFilesuploadedFiles", uploadedFiles);

  const handelClick2 = async () => {
    console.log("csv downloading");
    try {
      // Replace 'api_url' with the actual URL of the API endpoint that returns the file
      const response = await fetch("http://localhost:4546/v1/job-post/csv", {
        method: "GET",
        headers: {
          "Content-Type": "text/csv", // Specify the expected response type
        },
      });

      // http://192.168.1.74:4546/admin-apis/v1/job-post/csv

      console.log("res", response);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      // Extract the filename from the response headers or use a default filename
      const contentDisposition = response.headers.get("content-disposition");
      const filename = contentDisposition
        ? contentDisposition.split("filename=")[1]
        : "downloaded_file";

      // Convert the response blob into a downloadable file
      const blob = await response.blob();

      // Create a temporary <a> element to trigger the download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();

      // Clean up the temporary <a> element and URL object
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };


  const dispatch = useDispatch();

  const settingUplodedFile = (file) =>{
    console.log("helleooeooeoeo")
    console.log("setingiuplpada file", file)
    dispatch(setCsvFile(file))
  }

  const navigate = useNavigate();
  return (
    <div style={{ padding: responsive.isMobile ? "0 1rem" : "" }}>
      <div>
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomAllTypography name={"Candidate Invitation"} variant={"h2"} />
          <Toggle
            disabled={false}
            setIsToggle={setIsToggle}
            isToggle={isToggle}
          />
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <CustomAllTypography
            name={
              "Enable the feature to send with the private links via their personal email IDs"
            }
            variant={"body2"}
          />
        </div>
        {isToggle ? (
          <>
            <div style={{ marginTop: "2rem" }}>
              <CustomDropzone
                acceptedTypes={[".csv"]}
                name={"Upload CSV File"}
                // setUploadedFiles={setUploadedFiles}
                // settingUplodedFile={settingUplodedFile}
                settingUplodedFile={setCsvFile}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ padding: "0.75rem 1.5rem" }}>
                <CustomInputButton
                  size="small"
                  variant="text"
                  onClick={() => navigate("/invite")}
                >
                  Edit Earlier Template
                </CustomInputButton>
              </div>
              <p onClick={handelClick2} style={{ cursor: "pointer" }}>
                Downlaod sample csv
              </p>
            </div>
            <div
              style={{
                marginTop: "3.06rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "4rem",
              }}
            >
              <CustomAllTypography
                name={
                  "Note: by publish we will auto send the email notification to the user with there unique link"
                }
              ></CustomAllTypography>
            </div>
          </>
        ) : (
          ""
        )}
        <div style={{ marginTop: "1.69rem" }}>
          <CustomAllTypography name="Public link" />
        </div>
        <div
          style={{
            marginTop: "0.56rem",
            padding: "1.5rem",
            border: "2px dashed #C1C1C1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexDirection: "column",
            wordBreak: "break-all",
            overflow: "hidden",
          }}
        >
          <CustomAllTypography name={publicLink} variant={"body2"} />
          <CopyIcon onClick={handleClick} style={{ marginTop: "1rem" }} />
        </div>
      </div>
    </div>
  );
};

export default JobPostingStepFourA;
