import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { RiEyeCloseLine } from "react-icons/ri";
import { generalStyle } from "@/utils";
import {
  Box,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface InputProps {
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  index?: any;
  type?: string;
  label?: string;
  id?: string;
  icon?: any;
  control?: any;
  as?: any;
  w?: any;
  color?: string;
  border?: string;
  isDisabled?: boolean;
  borderRadius?: string;
  isRequired?: boolean;
  defaultValue?: string;
  register?: any;
  fontWeight?: string;
  isDate?: boolean;
  isPassword?: boolean;
  isPhone?: boolean;
  maxDate?: any;
  errorMessage?: any;
  helperText?: string;
}

const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  icon,
  as,
  name,
  isDisabled,
  isRequired,
  fontWeight,
  register,
  errorMessage,
  defaultValue,
  control,
  id,
  isPassword,
  isPhone,
  isDate,
  maxDate,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  return (
    <FormControl fontSize={"1.6rem"}>
      <FormLabel fontWeight={fontWeight ?? "500"} fontSize={"1.5rem"}>
        {label} {icon}
      </FormLabel>
      {isPhone ? (
        <Controller
          name={id ? id : ""}
          control={control}
          render={({
            field: { onChange: onPhoneChange, value: phoneValue },
          }) => (
            <PhoneInput
              id={id}
              onChange={onPhoneChange}
              value={phoneValue}
              defaultValue={defaultValue}
              isDisabled={isDisabled}
              isRequired={isRequired}
              defaultCountry="NG"
              placeholder="0803-754-7855"
              focusBorderColor="typography.lightGreen"
              {...register}
              style={{ ...generalStyle }}
            />
          )}
        />
      ) : isPassword ? (
        <InputGroup size="md">
          <Input
            onChange={onChange}
            defaultValue={defaultValue}
            type={showPassword ? "text" : "password"}
            placeholder="********"
            focusBorderColor="typography.lightGreen"
            {...register}
            style={{ ...generalStyle }}
          />

          <InputRightElement mt="1.3rem" mr="1rem">
            <Box onClick={handleClick} cursor="pointer">
              {showPassword ? (
                <Icon as={FiEye} boxSize={9}  />
              ) : (
                <Icon as={RiEyeCloseLine} boxSize={9} />
              )}
            </Box>
          </InputRightElement>
        </InputGroup>
      ) : isDate ? (
        <Input
          size="lg"
          type="date"
          max={maxDate}
          {...register}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          style={{ ...generalStyle }}
        />
      ) : (
        <Input
          onChange={onChange}
          as={as}
          name={name}
          value={value}
          {...register}
          focusBorderColor="typography.lightGreen"
          isDisabled={isDisabled}
          isRequired={isRequired}
          defaultValue={defaultValue}
          type={type ?? "text"}
          placeholder={placeholder}
          style={{ ...generalStyle }}
        />
      )}

      <Text color="red" fontSize="1.4rem" mt=".5rem">
        {" "}
        {errorMessage}
      </Text>
    </FormControl>
  );
};

export default InputField;
