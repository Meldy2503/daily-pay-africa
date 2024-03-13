import CustomerCards from "@/components/customers/customer-cards";
import CustomerTable from "@/components/customers/customer-table";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Customers = () => {
  return (
    <Box>
      <CustomerCards />
      <CustomerTable />{" "}
    </Box>
  );
};

export default Customers;
