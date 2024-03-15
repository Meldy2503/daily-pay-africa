"use client";

import React from "react";
import Icon1 from "../../assets/images/pink-icon.svg";
import Icon2 from "../../assets/images/gold-icon.svg";
import Icon3 from "../../assets/images/green-icon.svg";
import SummaryCard from "../cards/summary-card";
import { Flex } from "@chakra-ui/react";

const CustomerCards = () => {
  const data = [
    {
      title: "Total Customers",
      subTitle: "Total no. of customers",
      value: 1500,
      icon: Icon2,
    },
    {
      title: "Active Customers",
      subTitle: "No. of active customers",
      value: 1000,
      icon: Icon3,
    },
    {
      title: "Inactive Customers",
      subTitle: "No. of inactive customers",
      value: 500,
      icon: Icon1,
    },
  ];

  return (
    <Flex
      justify={{ base: "center", xl: "space-between" }}
      gap="1rem"
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

export default CustomerCards;
