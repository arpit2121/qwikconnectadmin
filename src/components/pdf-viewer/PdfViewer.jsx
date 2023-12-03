import React from 'react';
import { Document, Page } from 'react-pdf';


const PdfViewer = () => {
    return (
        <div>
        <iframe src="https://qwik-connect.s3.ap-south-1.amazonaws.com/resume/655364e7d1ef0451a919ede2/65536dc6eb5d71a72315d981/hrushkeshvagga%40gmail.com/Arpit_Resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2MBJCQ6UG67QLSF5%2F20231202%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20231202T202329Z&X-Amz-Expires=900&X-Amz-Signature=e273d02d36d65c907e61a55cd0b8a401260685057d9eac136c1c35e79723a9e5&X-Amz-SignedHeaders=host&x-id=GetObject" width="100%" height="500px" />
        </div>
        );
};
export default PdfViewer;



// import React from 'react';
// import { Document, Page } from 'react-pdf';


// const PdfViewer = () => {
//  const pdfURL = 'https://qwik-connect.s3.ap-south-1.amazonaws.com/resume/655364e7d1ef0451a919ede2/65536dc6eb5d71a72315d981/hrushkeshvagga%40gmail.com/Arpit_Resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2MBJCQ6UG67QLSF5%2F20231202%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20231202T202329Z&X-Amz-Expires=900&X-Amz-Signature=e273d02d36d65c907e61a55cd0b8a401260685057d9eac136c1c35e79723a9e5&X-Amz-SignedHeaders=host&x-id=GetObject';
// return (
//  <div>
//  <Document file={pdfURL}>
//  {/* <Page pageNumber={1} /> */}
//  </Document>
//  </div>
//  );
// };
// export default PdfViewer;