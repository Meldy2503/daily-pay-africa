"use client";

import ActionsMenu from "@/components/action-menu";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { TableColumn } from "react-data-table-component";
import { AppTag } from "../../tags";

export const GetContributionColumns = () => {
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
      name: "Amount",
      selector: (row) => row?.amount,
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
