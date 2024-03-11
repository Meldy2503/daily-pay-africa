"use client";

// import { Button } from "@/app/utils/button";
// import { Heading } from "@/app/utils/heading";
// import { InputElement, PasswordInput } from "@/app/utils/input-element";
// import { ErrorToast, SuccessToast } from "@/app/utils/toast";
import { Box, Button, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
// import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputElement, PasswordInput } from "../../../components/input-field";
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
    <Grid placeItems={"center"}>
      <Stack maxW={"500px"} w={"90%"} py={"30px"} mt="2.5rem">
        <Flex
          justify="center"
          position={"sticky"}
          top="10px"
          w="100%"
          bg="brand.600"
          zIndex={"100"}
          mb="2rem"
        >
            <Text>Logo</Text>
        </Flex>

        <Heading
          textAlign="center"
          variant="h5"
          fontWeight="700"
          mb="3rem"
          mt="3rem"
        >
          Login to your Account
        </Heading>

        <form >
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
            mt=".5rem"
            mb="3rem"
            color={"brand.150"}
          >
            <Link
              href="/pages/auth/password-reset-link"
              style={{ borderBottom: "1.5px solid #9fbe31" }}
            >
              {" "}
              Forgot Password?
            </Link>
          </Box>
          <Button w="100%" type="submit" as="button">
          {/* <Button w="100%" type="submit" as={"button"} loading={loading}> */}
            Login
          </Button>
        </form>
      </Stack>
    </Grid>
  );
};

export default Login;