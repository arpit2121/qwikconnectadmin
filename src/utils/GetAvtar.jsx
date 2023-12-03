import React from "react";
import { useGetAvtarsQuery } from "../services/admin";
import { base64ToArrayBuffer } from "./utilsFunctions";

const GetAvtarImage = ({s3Key="avatars/seaHorse.avatar.png"}) => {
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

    console.log("jhh",urlCreator)
  return (
    <img
      src={urlCreator}
      alt="Avtar"
      width="35"
      height="40"
      style={{ objectFit: "contain" }}
    />
  );
};

export default GetAvtarImage;