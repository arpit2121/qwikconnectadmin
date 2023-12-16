import React from 'react'
import {Link} from '@mui/material';

const CustomLink = ({name, handelReviewClick}) => {
  return (
    <Link
    underline="none"
    variant="body2"
    onClick={() => {
      handelReviewClick()
    }}
  >
    {name}
  </Link>
  )
}

export default CustomLink;