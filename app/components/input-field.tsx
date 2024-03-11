import React, {useState } from "react";
import { FiEye, FiUpload } from "react-icons/fi";
import { RiEyeCloseLine } from "react-icons/ri";

import { AiOutlineClose } from "react-icons/ai";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import { UseFormReturn } from "react-hook-form";

interface InputProps {
  name?: string;
  value?: any;
  title?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  index?: any;
  onClick?: () => void;
  type?: string;
  label?: string;
  icon?: any;
  OptionValue1?: string;
  OptionValue2?: string;
  OptionValue3?: string;
  OptionValue4?: string;
  OptionLabel1?: string;
  OptionLabel2?: string;
  OptionLabel3?: string;
  OptionLabel4?: string;
  as?: any;
  w?: any;
  color?: string;
  border?: string;
  isDisabled?: boolean;
  borderRadius?: string;
  isRequired?: boolean;
  register?: any;
  fontWeight?: string;
  errorMessage?: any;
  helperText?: string;
}
export const InputElement = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  icon,
  color,
  as,
  name,
  isDisabled,
  register,
  borderRadius,
  isRequired,
  errorMessage,
  fontWeight,
  w,
}: InputProps) => {
  return (
    <FormControl fontSize={"1.6rem"}>
      <FormLabel fontWeight={fontWeight ?? "500"} fontSize={"1.6rem"}>
        {label} {icon}
      </FormLabel>
      <Input
        fontSize={"1.6rem"}
        onChange={onChange}
        borderRadius={borderRadius ?? "4rem"}
        as={as}
        name={name}
        w={w ?? "100%"}
        mt=".3rem"
        value={value}
        {...register}
        focusBorderColor="brand.400"
        isDisabled={isDisabled}
        isRequired={isRequired}
        color={color}
        py="2.2rem"
        px="2rem"
        type={type ?? "text"}
        placeholder={placeholder}
        border="1px solid rgba(0, 0, 0, 0.10)"
      />
      <Text color="red" fontSize="1.5rem" mt=".5rem">
        {" "}
        {errorMessage}
      </Text>
    </FormControl>
  );
};

export const PasswordInput = ({
  register,
  errorMessage,
  onChange,
  label,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  return (
    <FormControl fontSize={"1.6rem"}>
      <FormLabel fontWeight="500" fontSize={"1.6rem"}>
        {label ?? "Password"}
      </FormLabel>
      <InputGroup size="md">
        <Input
          fontSize={"1.6rem"}
          onChange={onChange}
          borderRadius={"4rem"}
          w={"100%"}
          py="2.2rem"
          px="2rem"
          type={showPassword ? "text" : "password"}
          placeholder="********"
          focusBorderColor="brand.400"
          border="1px solid rgba(0, 0, 0, 0.10)"
          {...register}
        />

        <InputRightElement mt="1.3rem" mr="1rem">
          <Box onClick={handleClick} cursor="pointer">
            {showPassword ? (
              <Icon as={FiEye} boxSize={9} color="brand.900" />
            ) : (
              <Icon as={RiEyeCloseLine} boxSize={9} color="brand.900" />
            )}
          </Box>
        </InputRightElement>
      </InputGroup>
      <Text color="red" fontSize="1.5rem" mt=".5rem">
        {" "}
        {errorMessage}
      </Text>
    </FormControl>
  );
};






