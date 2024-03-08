"use client";

import { Center } from "@chakra-ui/react";
import Image from "next/image";
// import loadingIcon from "../assets/images/loading-icon.svg";

const LoadingIcon = () => {
  return (
    <Center h="100vh">
        <p>loading....</p>
      {/* <Image src={loadingIcon} height={150} width={150} alt="loading icon" /> */}
    </Center>
  );
};

export default LoadingIcon;
