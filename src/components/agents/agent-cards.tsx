"use client";

import React from "react";
import Icon1 from "../../assets/images/pink-icon.svg";
import Icon2 from "../../assets/images/gold-icon.svg";
import Icon3 from "../../assets/images/green-icon.svg";
import SummaryCard from "../cards/summary-card";
import { Flex } from "@chakra-ui/react";

const AgentCards = () => {
  const data = [
    {
      title: "Total Agents",
      subTitle: "Total no. of Agents",
      value: 5000,
      icon: Icon2,
    },
    {
      title: "Active Agents",
      subTitle: "No. of active agents",
      value: 150,
      icon: Icon3,
    },
    {
      title: "Suspended Agents",
      subTitle: "No. of suspended agents",
      value: 350,
      icon: Icon1,
    },
  ];

  return (
    <Flex
      justify={{ base: "center", xl: "space-between" }}
      gap="2rem"
      flexWrap={"wrap"}
    >
      {data.map((items, index) => {
        return (
          <SummaryCard
            key={index}
            icon={items.icon}
            value={items.value}
            title={items.title}
            subTitle={items.subTitle}
          />
        );
      })}
    </Flex>
  );
};

export default AgentCards;
