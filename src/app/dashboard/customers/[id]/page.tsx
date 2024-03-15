"use client";

import ContributionHistoryTable from "@/components/customers/contribution-history/table";
import ViewCustomerDetails from "@/components/customers/view-customer-details";
import { Box } from "@chakra-ui/react";

const ViewDetails = () => {
  return (
    <Box mb="5rem">
      <ViewCustomerDetails />
      <ContributionHistoryTable />
    </Box>
  );
};

export default ViewDetails;
