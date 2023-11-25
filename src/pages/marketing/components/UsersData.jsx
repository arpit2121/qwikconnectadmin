import React from "react";
import rounded from "../../../assets/qwik/Rectangle 242.png";
import Rounded from "./Rounded";
import vector from '../../../assets/qwik/Vector.png'
import vector1 from '../../../assets/qwik/Vector-1.png'
import counter from '../../../assets/marketing/counter.png'
import useResponsiveStyles from "../../../utils/MediaQuery";

const UsersData = () => {
    const responsive = useResponsiveStyles();
  return (
    <div width={'100%'}>
      <img src={counter} width={'100%'} height={'auto'}/>
    </div>
  );
};

export default UsersData;
