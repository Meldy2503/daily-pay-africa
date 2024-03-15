"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";

import {
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface SearchProps {
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: any;
}

const SearchBar = ({ name, value, register, onChange }: SearchProps) => {
  return (
    <FormControl fontSize={"1.6rem"} maxW={"28rem"}>
      <Input
        fontSize={"1.6rem"}
        onChange={onChange}
        w={"100%"}
        py="2.2rem"
        px="1rem"
        type="search"
        shadow={"sm"}
        placeholder="search..."
        focusBorderColor="typography.lightGreen"
        border="1px solid rgba(0, 0, 0, 0.10)"
        borderRadius={".5rem"}
        // {...register}
      />
    </FormControl>
  );
};

export default SearchBar;
