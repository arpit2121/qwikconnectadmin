    import React from "react";
    import { makeStyles } from "@mui/styles";
    import { useDropzone } from 'react-dropzone';
    // import UploadIcon from '../../assets/svg/upload.svg';
    // import DeleteIcon from '@mui/icons-material/Delete';
    import DeleteIcon from "../icons/DeleteIcon";
    import DownloadIcon from "../icons/DownloadIcon";
    import useResponsiveStyles from "../../utils/MediaQuery";

    const useStyles = makeStyles((theme) => ({
    // ... your existing styles ...
    parent: {
        backgroundColor: '#E5E4FF',
        width: '100%',
        backgroundImage: 'linear-gradient(337deg, #E3E5FB 0%, #E6E7FA 12.50%,#F8F5F6 100%)',
        position: 'relative',
    },
    vectorBoxRight: {
        position: 'absolute',
        right: '0',
        top: '0'
    },
    vectorBoxLeft: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        maxWidth: '40rem'
    },
    cardBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6.25rem 0'
    },
    cardContainer: {
        maxWidth: "31.8rem",
        padding: '3.25rem 4.75rem 4.25rem 3.44rem'
    },
    textfieldContainer: {
        padding: '0 0 1.5rem 0',
    },
    dropZone: {
        padding: '2.5rem 8.75rem 3.75rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px dashed',
        // [theme.breakpoints.down("md")]: {
        //     padding: '1.5rem 5.75rem',
        // },
        // [theme.breakpoints.down("sm")]: {
        //     padding: '1.5rem 3.75rem',
        // },
    },
    dropZoneContentBox: {
        maxWidth: {xs:'100%',md:'20.1rem'},
        textAlign: 'center',
    },
    uploadedFiles: {
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },

    uploadedFile: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },

    deleteIcon: {
        cursor: "pointer",
    },
    }));

    const CustomDropzone = ({style}) => {
    const classes = useStyles();
    const responsive = useResponsiveStyles();
    const { getRootProps, getInputProps, acceptedFiles, removeFile } = useDropzone({
        accept: ".pdf,.doc,.docx,video", // Accept PDF and Word formats
        maxFiles: 1, // Limit to one file
        maxSize: 3 * 1024 * 1024, // 3 MB max size
    });

    return (
        <div className={classes.dropZone} {...getRootProps()} style={style}>
        <input {...getInputProps()} />
        {acceptedFiles.length === 0 ?
            <div className={classes.dropZoneContentBox}>
            {/* <img src={UploadIcon} alt="uploadIcon" /> */}
            <DownloadIcon/>
            {
                !responsive.isMobile ?
                <div style={{ textAlign: "center", color: "#212121" }}>
                    <span>Upload your resume here</span>
                    <br />
                    <span>(PDF, Word format only, File Size: 3 MB max)</span>
                </div>
                : ""
            }
            </div>
            : ""
        }
        {/* Display selected files list */}
        {acceptedFiles.length > 0 && (
            <div className={classes.uploadedFiles}>
            {acceptedFiles.map((file, index) => (
                <div key={index} className={classes.uploadedFile}>
                <h6 style={{ width: { md: 'max-content', xs: '100%' } }}>{file.name}</h6>
                <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={() => removeFile(index)}
                />
                </div>
            ))}
            </div>
        )}
        </div>
    );
    };

    export default CustomDropzone;



//     import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import { useDropzone } from "react-dropzone";
// import DeleteIcon from "../icons/DeleteIcon";
// import DownloadIcon from "../icons/DownloadIcon";
// import useResponsiveStyles from "../../utils/MediaQuery";

// const useStyles = makeStyles((theme) => ({
//   // ... your existing styles ...
// }));

// const CustomDropzone = () => {
//   const classes = useStyles();
//   const responsive = useResponsiveStyles();
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   const { getRootProps, getInputProps, acceptedFiles, removeFile } = useDropzone({
//     accept: ".pdf,.doc,.docx", // Accept PDF and Word formats
//     maxFiles: 1, // Limit to one file
//     maxSize: 3 * 1024 * 1024, // 3 MB max size
//     onDrop: (acceptedFiles) => {
//       if (!selectedFile || !acceptedFiles.some((file) => file.name === selectedFile.name)) {
//         setErrorMessage("");
//         setSelectedFile(acceptedFiles[0]);
//       } else {
//         setErrorMessage("File already selected");
//       }
//     },
//   });

//   const handleFileRemove = () => {
//     removeFile(0);
//     setSelectedFile(null);
//   };

//   return (
//     <div className={classes.parent}>
//       <div className={classes.dropZone} {...getRootProps()}>
//         <input {...getInputProps()} />
//         {acceptedFiles.length === 0 ? (
//           <div className={classes.dropZoneContentBox}>
//             <DownloadIcon />
//             {!responsive.isMobile ? (
//               <div style={{ textAlign: "center", color: "#212121" }}>
//                 <span>Upload your resume here</span>
//                 <br />
//                 <span>(PDF, Word format only, File Size: 3 MB max)</span>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//       {/* Display selected file preview and delete option */}
//       {selectedFile && (
//         <div className={classes.uploadedFiles}>
//           <div className={classes.uploadedFile}>
//             <h6 style={{ width: { md: "max-content", xs: "100%" } }}>
//               {selectedFile.name}
//             </h6>
//             <DeleteIcon
//               className={classes.deleteIcon}
//               onClick={handleFileRemove}
//             />
//           </div>
//           {errorMessage && (
//             <div style={{ color: "red" }}>{errorMessage}</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomDropzone;
