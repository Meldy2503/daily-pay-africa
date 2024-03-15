import { Tag, TagLabel } from "@chakra-ui/react";
import React from "react";

type TagProps = {
  label: string;
  style?: React.CSSProperties;
};

enum Statuses {
  Pending = "Pending",
  Successful = "Successful",
  Completed = "Completed",
  Active = "Active",
  Inactive = "Inactive",
  Failed = "Failed",
  Declined = "Declined",
  Paid = "Paid",
  Processed = "Processed",
  InProgress = "In Progress",
  Suspended = "Suspended",
}

const AppTag = ({ label, style }: TagProps) => {
  const backgrounds: Record<string, string> = {
    [Statuses.Pending]: "#FDF1C5",
    [Statuses.Successful]: "#D0FED5",
    [Statuses.Completed]: "#D0FED5",
    [Statuses.Failed]: "#F5C9C9",
    [Statuses.Active]: "#D0FED5",
    [Statuses.Inactive]: "#F5C9C9",
    [Statuses.Suspended]: "#F5C9C9",
    [Statuses.Declined]: "#F5C9C9",
    [Statuses.Paid]: "#D0FED5",
    [Statuses.Processed]: "#D0FED5",
    [Statuses.InProgress]: "#FDF1C5",
  };
  const colors: Record<string, string> = {
    [Statuses.Pending]: "#A96C34",
    [Statuses.Successful]: "#047168",
    [Statuses.Completed]: "#047168",
    [Statuses.Failed]: "#aa1e38",
    [Statuses.Active]: "#047168",
    [Statuses.Suspended]: "#aa1e38",
    [Statuses.Inactive]: "#aa1e38",
    [Statuses.Declined]: "#aa1e38",
    [Statuses.Paid]: "#047168",
    [Statuses.Processed]: "#047168",
    [Statuses.InProgress]: "#A96C34",
  };

  let color = colors[label];
  let background = backgrounds[label];

  return (
    <Tag
      style={style}
      size={"lg"}
      borderRadius="full"
      variant="solid"
      color={color}
      background={background}
      maxW="fit-content"
    >
      <TagLabel py={".6rem"} px="1rem" fontSize={"1.3rem"} whiteSpace="nowrap">
        {label}
      </TagLabel>
    </Tag>
  );
};

export { AppTag };
