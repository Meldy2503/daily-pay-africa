'use client';

import React from "react";
import mapIcon1 from "../../assets/images/gold-chart.svg";
import mapIcon2 from "../../assets/images/green-chart.svg";
import mapIcon3 from "../../assets/images/pink-chart.svg";
import Icon1 from "../../assets/images/pink-icon.svg";
import Icon2 from "../../assets/images/gold-icon.svg";
import Icon3 from "../../assets/images/green-icon.svg";
import Card from "../card";
import { Flex } from "@chakra-ui/react";

const DashboardCard = () => {
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
      title: "Total Amount",
      subTitle: "Total amount",
      value: 350000,
      icon: Icon1,
      map: mapIcon3,
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
          <Card
            key={index}
            map={items.map}
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

export default DashboardCard;
