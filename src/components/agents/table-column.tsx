'use client';


import { TableColumn } from "react-data-table-component";
import ActionsMenu from "@/components/action-menu";
import { configOptions } from "@/services/config";
import { Box, Switch, Text } from "@chakra-ui/react";
import { NextRouter } from "next/router";
import { Dispatch } from "react";
import { AppTag } from "../tags";
import AgentConfirmationModal from "./confirmation-modal";

export const getAgentColumns = () => {

  const columns: TableColumn<any>[] = [
    {
      name: "Date ",
      selector: (row) => row.date,
      sortable: true,
      cell: (row) => <Text>{row.date}</Text>,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => <Box>{row.name}</Box>,
    },
    {
      name: " Amount (₦)",
      selector: (row) => row.amount,
      cell: (row) => <Text>{row?.amount}</Text>,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row?.age,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phone,
      sortable: true,
      cell: (row) => <Text variant="label">{row.phone}</Text>,
    },
    {
      name: "Status",
      cell: (row) => <AppTag label={row.status} />,
      maxWidth: "13rem",
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
        <ActionsMenu
          actions={[
            {
              label: "View",
              cta: () => {},
            },
            {
              label: "Edit",
              cta: () => {},
            },
          ]}
        />
        {/* <Switch
        ml='1rem'
        colorScheme="brand"
        size={'md'}
        onChange={() => {
        }}
      /> */}
      <AgentConfirmationModal/>
      </>
      ),
      center: true,
      maxWidth: "12rem",
    },
  ];

  return columns;
};
