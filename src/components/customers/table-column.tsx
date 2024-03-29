'use client';


import { TableColumn } from "react-data-table-component";
import ActionsMenu from "@/components/action-menu";
import { configOptions } from "@/services/config";
import { Box, Text } from "@chakra-ui/react";
import { NextRouter } from "next/router";
import { Dispatch } from "react";
import { AppTag } from "../tags";
import { useRouter } from "next/navigation";

export const GetCustomerColumns = () => {
  const router = useRouter();


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
      name: "Agent",
      selector: (row) => row?.agent,
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
        <ActionsMenu
          actions={[
            {
              label: "View",
              cta: () => {
                router.push(`/dashboard/customers/1`);

              },
            },
         
            {
              label: "Suspend",
              cta: () => {},
            },
          ]}
        />
      ),
      center: true,
      maxWidth: "12rem",
    },
  ];

  return columns;
};
