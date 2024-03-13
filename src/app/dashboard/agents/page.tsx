import React from "react";
import { Box, Text } from "@chakra-ui/react";
import DashboardCard from "@/components/agents/agent-cards";
import DashboardTable from "@/components/agents/agent-table";

const Agents = () => {
  return (
    <Box>
 <DashboardCard />
      <DashboardTable />    </Box>
  )
};

export default Agents;
