"use client";

import React from "react";
import mapIcon1 from "../../assets/images/gold-chart.svg";
import mapIcon2 from "../../assets/images/green-chart.svg";
import mapIcon3 from "../../assets/images/pink-chart.svg";
import Icon1 from "../../assets/images/pink-icon.svg";
import Icon2 from "../../assets/images/gold-icon.svg";
import Icon3 from "../../assets/images/green-icon.svg";
import SummaryCard from "../cards/summary-card";
import { Flex, useMediaQuery } from "@chakra-ui/react";

const DashboardCard = () => {
  const [isMobile] = useMediaQuery("(min-width: 600px)");
  const [isTablet] = useMediaQuery("(min-width: 1300px)");

  const data = [
    {
      title: "Total Agents",
      subTitle: "Total no. of agents",
      value: 550,
      icon: Icon2,
      map: mapIcon1,
    },
    {
      title: "Total Customers",
      subTitle: "Total no of customers",
      value: 1150,
      icon: Icon3,
      map: mapIcon2,
    },
    {
      title: "Total Cards",
      subTitle: "Total cards in use",
      value: 1150,
      icon: Icon1,
      map: mapIcon3,
    },
    {
      title: "Total Amount",
      subTitle: "Total amount collected",
      value: 350000,
      icon: Icon3,
      map: mapIcon2,
    },
  ];

  return (
    <Flex
      justify={{ base: "center", xl: "space-between" }}
      gap={isTablet ? "0" : "2rem"}
      flexWrap={"wrap"}
    >
      {data.map((items, index) => {
        return (
          <SummaryCard
            key={index}
            map={items.map}
            icon={items.icon}
            value={items.value}
            title={items.title}
            subTitle={items.subTitle}
            pd="2rem 1.5rem 0rem 1.5rem"
            gap="2rem"
            w={isTablet ? "24.5%" : isMobile ? "48%" : "100%"}
          />
        );
      })}
    </Flex>
  );
};

export default DashboardCard;
