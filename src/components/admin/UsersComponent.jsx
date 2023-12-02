import React from "react";
import { useGetAvtarQuery, useGetAvtarsQuery } from "../../services/admin";
import { useEffect, useState } from "react";
import { base64ToArrayBuffer } from "../../utils/utilsFunctions";


const UsersComponent = ({s3Key="avatars/seaHorse.avatar.png", style}) => {
  
  // const { s3Key } = props;
  console.log("sds",s3Key)
  const key = s3Key.replaceAll("/", "%2F");
  const { data } = useGetAvtarsQuery({ key: key });
  console.log("data",data)
  let byteData = data && base64ToArrayBuffer(data);
  const urlCreator =
    data &&
    window.URL.createObjectURL(
      new Blob([byteData], { type: "application/octet-stream" })
    );

  return (
    <div
      style={{
        ...style,
      }}
    >
      <img src={urlCreator} alt="Avtar" height={"100%"} width={"100%"}></img>
   </div>
  );
};

export default UsersComponent;
