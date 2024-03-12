"use client";

// import { Button } from "@/app/utils/button";
// import { Heading } from "@/app/utils/heading";
// import { InputElement, PasswordInput } from "@/app/utils/input-element";
// import { ErrorToast, SuccessToast } from "@/app/utils/toast";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
// import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputElement, PasswordInput } from "../../../components/input-field";
import { Button } from "../../../components/button";
import LogoIcon from "../../../assets/logo-icon.svg";
// import LogoIcon from "../assets/images/logo-icon.svg";
import Image from "next/image";

// import { Resolver, SubmitHandler, useForm } from "react-hook-form";
// import { LoginSchema } from "./schema/auth";
// import { UseLoginMutation } from "./services/auth";
// import { LoginProps } from "./types/auth";
// import LogoLink from "./utils/iwia-logo-link";

const Login = () => {
  //   const [loading, setLoading] = useState(false);

  //   const { mutateAsync: login } = UseLoginMutation();
  //   const router = useRouter();
  //   const formHook = useForm<LoginProps>({
  //     resolver: yupResolver(LoginSchema),
  //     defaultValues: {
  //       email: "",
  //       password: "",
  //     },
  //   } as { resolver: Resolver<LoginProps> });
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = formHook;

  //   const submit: SubmitHandler<LoginProps> = async (data: LoginProps) => {
  //     setLoading(true);
  //     const result = await login(data);

  //     try {
  //       if (!result) {
  //         setLoading(false);
  //         return;
  //       }
  //       if (result.status === 200 || result.status === 201) {
  //         setLoading(false);
  //       }
  //       router.push("/pages/jobs");
  //       SuccessToast("Login Successful!");

  //       if (typeof sessionStorage !== "undefined") {
  //         sessionStorage.setItem("admin", result!.data?.accessToken);
  //       }
  //     } catch (error: any) {
  //       ErrorToast(
  //         error?.response?.message || "An error occurred trying to login"
  //       );
  //       throw new Error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <Flex
      justify={"center"}
      align={"center"}
      maxW={"1280px"}
      mx="auto"
      direction={"column"}
      h="100vh"
      bg="brand.100"
    >
      <Box
        bg="brand.100"
        w={{ base: "95%", md: "55rem" }}
        py="5rem"
        px={{ base: "2rem", sm: "5rem" }}
        borderRadius={"3rem"}
        boxShadow="2px 2px 18px rgba(0, 0, 0, 0.1)"
      >
        <Flex
          align={"center"}
          justify={"center"}
          direction={"column"}
          gap="3rem"
        >
          <Image src={LogoIcon} height={150} width={150} alt="daily pay logo" />
          <Heading textAlign="center" variant="h4" fontWeight="700" mb="3rem">
            Login to your Account
          </Heading>
        </Flex>

        <form>
          {/* <form onSubmit={handleSubmit(submit)}> */}
          <Flex flexDir="column" gap={10}>
            <InputElement
              label="Email"
              type="email"
              placeholder="admin@gmail.com"
              //   register={register("email")}
              //   errorMessage={errors.email?.message}
            />
            <PasswordInput
            //   register={register("password")}
            //   errorMessage={errors.password?.message}
            />
          </Flex>
          <Box
            textAlign={"right"}
            fontWeight={"500"}
            fontSize="1.6rem"
            mt=".6rem"
            mb="5rem"
            color={"brand.300"}
          >
            <Link href=""> Forgot Password?</Link>
          </Box>
          <Flex align={"center"} justify={"center"}>
            <Button w="100%" type="submit" as="button">
              {/* <Button w="100%" type="submit" as={"button"} loading={loading}> */}
              Login
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
