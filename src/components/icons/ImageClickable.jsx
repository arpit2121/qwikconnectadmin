import React from 'react'

const ImageClickable = ({ src, alt, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    />
  )
}

export default ImageClickable


// import React from 'react';
// import ClickableImage from './ClickableImage';

// const App = () => {
//   const handleClick = () => {
//     // Handle click event here
//     console.log('Image clicked!');
//   };

//   return (
//     <div>
//       <ClickableImage
//         src="path/to/image.jpg"
//         alt="Example Image"
//         onClick={handleClick}
//       />
//     </div>
//   );
// };

// export default App;
