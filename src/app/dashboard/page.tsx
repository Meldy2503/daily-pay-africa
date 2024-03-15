import AgentTable from "@/components/agents/agents-table/table";
import DashboardCard from "@/components/dashboard/dashboard-card";
import { Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box>
      <DashboardCard />
      <AgentTable />
    </Box>
  );
};

export default Dashboard;
