import React from "react";
import { Box, Text } from "@chakra-ui/react";
import AgentCards from "@/components/agents/agent-cards";
import AgentTable from "@/components/agents/agents-table/table";

const Agents = () => {
  return (
    <Box>
      <AgentCards />
      <AgentTable />
    </Box>
  );
};

export default Agents;
