import DashboardCard from "@/components/dashboard/dashboard-card";
import DashboardTable from "@/components/dashboard/dashboard-table";
import { Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box>
      <DashboardCard />
      <DashboardTable />
    </Box>
  );
};

export default Dashboard;
