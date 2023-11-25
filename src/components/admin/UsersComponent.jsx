import React from "react";
import { useGetAvtarQuery } from "../../services/admin";
import { useEffect, useState } from "react";


const UsersComponent = (props) => {
  
  const {s3Key, adminId} = props;

  const [imageUrl, setImageUrl] = useState(null);

  console.log("s3Kwy",s3Key)

  const { data } = useGetAvtarQuery({key:"avatars/seaHorse.avatar.png"});
  console.log("data",data&&hiii)

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch(`http://localhost:4546/v1/admin/avatar?key=${"avatars/seaHorse.avatar.png"}`);
        if (response.ok) {
          // Assuming the response is an image, you can set it directly as the image source
          setImageUrl(`/api/avatar?key=${"avatars/seaHorse.avatar.png"}`);
        } else {
          console.error('Error fetching avatar:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching avatar:', error.message);
      }
    };

    fetchAvatar();
  }, [s3Key]);


  return (
    <div
      style={{
        backgroundColor: "#E5E0FF",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70px",
        width: "70px",
        ...props.style,
      }}
    >
      <img src={props.image} alt="user1" height={"70%"} width={"70%"}></img>
    </div>
  );
};

export default UsersComponent;
