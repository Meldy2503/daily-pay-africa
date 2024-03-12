import React from "react";
import mapIcon1 from "../../assets/gold-chart.svg";
import mapIcon2 from "../../assets/green-chart.svg";
import mapIcon3 from "../../assets/pink-chart.svg";
import Icon1 from "../../assets/pink-icon.svg";
import Icon2 from "../../assets/gold-icon.svg";
import Icon3 from "../../assets/green-icon.svg";
import Card from "../card";
import { Flex } from "@chakra-ui/react";

const DashboardCard = () => {
  const data = [
      {
        title: "Total Agents",
        subTitle: "Total Customers",
        value: 50,
        icon: Icon2,
        map: mapIcon1,
      },
    {
      title: "Total Customers",
      subTitle: "Total Customers",
      value: 150,
      icon: Icon3,
      map: mapIcon2,
    },
    {
      title: "Total Managers",
      subTitle: "Total Customers",
      value: 350,
      icon: Icon1,
      map: mapIcon3,
    },
  ];

  return (
    <Flex
      justify={{ base: "center", lg: "space-between" }}
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
