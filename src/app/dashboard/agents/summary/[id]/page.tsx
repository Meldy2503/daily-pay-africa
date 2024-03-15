"use client";

import ViewCustomersTable from "@/components/agents/customers-table/view-customers-table";
import ViewAgentDetails from "@/components/agents/view-agent-details";
import { Box } from "@chakra-ui/react";

const ViewDetails = () => {
  return (
    <Box mb="5rem">
      <ViewAgentDetails />
      <ViewCustomersTable />
    </Box>
  );
};

export default ViewDetails;
