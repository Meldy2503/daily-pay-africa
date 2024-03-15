"use client";

import ActionsMenu from "@/components/action-menu";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { TableColumn } from "react-data-table-component";
import { AppTag } from "../tags";
import UserConfirmationModal from "./confirmation-modal";

interface Props {
  onOpen: any;
}

export const GetUserColumns = ({ onOpen }: Props) => {
  const router = useRouter();

  const columns: TableColumn<any>[] = [
    {
      name: "Date Added",
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
      name: " Email",
      selector: (row) => row.email,
      cell: (row) => <Text>{row?.email}</Text>,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row?.role,
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
                cta: () => {
                  router.push(`/dashboard/users/1`);
                },
              },
              {
                label: "Edit",
                cta: () => {
                  onOpen();
                },
              },
            ]}
          />
          <UserConfirmationModal />
        </>
      ),
      center: true,
      maxWidth: "12rem",
    },
  ];

  return columns;
};
