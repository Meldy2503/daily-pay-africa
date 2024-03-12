import Card from "@/components/card";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import LogoIcon from "../../../assets/logo-icon.svg";
import DashboardCard from "@/components/dashboard/dashboard-card";




const Dashboard = () => {
  return (
    <Box h='200rem'>
      <DashboardCard />
      <Text>Dashboard</Text>
    </Box>
  );
};

export default Dashboard;
