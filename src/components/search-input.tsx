'use client'

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
    <FormControl fontSize={"1.6rem"}>
      <InputGroup size="md">
        <Input
          fontSize={"1.6rem"}
          onChange={onChange}
          w={"28rem"}
          py="2.2rem"
          px="1rem"
          type="search"
          shadow={"sm"}
          placeholder="search..."
          focusBorderColor="typography.lightGreen"
          border="1px solid rgba(0, 0, 0, 0.10)"
          borderRadius={'.5rem'}
          // {...register}
        />
     

      </InputGroup>
    </FormControl>
  );
};

export default SearchBar;
