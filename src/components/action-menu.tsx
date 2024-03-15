import ApproveIcon from "@/assets/icons/checkCircle";
import DeleteIcon from "@/assets/icons/delete";
import CancelIcon from "@/assets/icons/disable";
import DownloadIcon from "@/assets/icons/download";
import EditIcon from "@/assets/icons/edit";
import ViewIcon from "@/assets/icons/eye";
import {
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";

export enum Actions {
  View = "View",
  Edit = "Edit",
  Download = "Download",
  Delete = "Delete",
  Suspend = "Suspend",
  Approve = "Approve",
}

export interface ActionType {
  label: `${Actions}`;
  loading?: boolean;
  cta?: () => void;
  disabled?: boolean;
}

interface ActionsPropsType {
  actions: ActionType[];
}

const renderIcon = ({ label, cta, loading, disabled }: ActionType) => {
  const tooltipContent =
    label === Actions.View
      ? "View"
      : label === Actions.Edit
      ? "Edit"
      : label === Actions.Download
      ? "Download"
      : label === Actions.Delete
      ? "Delete"
      : label === Actions.Approve
      ? "Approve"
      : label === Actions.Suspend
      ? "Suspend"
      : "";

  return (
    <Popover trigger="hover" placement="bottom" key={label}>
      <PopoverTrigger>
        <Flex
          align="center"
          justify="center"
          cursor="pointer"
          ml=".5rem"
          opacity={disabled ? 0.5 : 1}
        >
          {label === Actions.View && (
            <ViewIcon
              width="1.7rem"
              onClick={!loading && !disabled ? cta : undefined}
              cursor={loading || disabled ? "not-allowed" : "pointer"}
            />
          )}
          {label === Actions.Edit && (
            <EditIcon
              width="1.7rem"
              onClick={!loading && !disabled ? cta : undefined}
              cursor={loading || disabled ? "not-allowed" : "pointer"}
            />
          )}

          {label === Actions.Download && (
            <DownloadIcon
              width="1.7rem"
              onClick={!loading && !disabled ? cta : undefined}
              cursor={loading || disabled ? "not-allowed" : "pointer"}
            />
          )}

          {label === Actions.Delete && (
            <DeleteIcon
              width="1.7rem"
              onClick={!loading && !disabled ? cta : undefined}
              cursor={loading || disabled ? "not-allowed" : "pointer"}
            />
          )}

          {label === Actions.Approve && (
            <ApproveIcon
              width="1.7rem"
              onClick={!loading && !disabled ? cta : undefined}
              cursor={loading || disabled ? "not-allowed" : "pointer"}
            />
          )}

          {label === Actions.Suspend && (
            <CancelIcon
              width="1.7rem"
              onClick={!loading && !disabled ? cta : undefined}
              cursor={loading || disabled ? "not-allowed" : "pointer"}
            />
          )}
        </Flex>
      </PopoverTrigger>
      <PopoverContent maxW="max-content">
        <PopoverBody>
          <Text textAlign="center">{tooltipContent}</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const ActionsMenu = ({ actions }: ActionsPropsType) => {
  return (
    <Flex align="center" justify="center" gap="0.5rem">
      {actions.map((action) => renderIcon(action))}
    </Flex>
  );
};

export default ActionsMenu;
