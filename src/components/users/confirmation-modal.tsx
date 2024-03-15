import { CreateAgentSchema } from "@/schema/agents";
import { generalStyle } from "@/utils";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Button, ModalButton } from "../button";
import InputField from "../input-field";
import ApproveIcon from "@/assets/icons/approve";
import DeclineIcon from "@/assets/icons/decline";

const UserConfirmationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Box onClick={onOpen}>

      <Switch ml="1.5rem" colorScheme="brand" size={"lg"} />
    </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"2xl"}>
        <ModalOverlay />
        <ModalContent px={{ base: "1rem", md: "2rem" }} py="3rem">
       
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Flex justify={"center"}>
                {/* {selectedOption === 'Approve' ? <ApproveIcon /> : <DeclineIcon />} */}
                <ApproveIcon />
              </Flex>
              <Text
                textAlign={"center"}
                mt='2rem'
                fontWeight="semiBold"
               
                   color= "typography.green"
                
                // color={
                //   selectedOption === "Approve"
                //     ? "typography.green"
                //     : "typography.red"
                // }
              >
                  Are you sure you want to activate this user?
                {/* {selectedOption === "Approve"
                  ? "Are you sure you want to activate this useruser?"
                  : "Are you sure you want to suspend this agent?"} */}
              </Text>
              <Flex gap="1.5rem" mt="4rem" direction={'column'}>
                  <ModalButton w='100%'>Yes</ModalButton>
                  {/* <ModalButton className={'modalbtn-red'} w='100%'>Yes</ModalButton> */}
                <ModalButton
                 w='100%'
                  onClick={onClose}
                  bg="typography.lighterGreen"
                  color="typography.darkGreen"
                  className={""}
                >
                  Cancel
                </ModalButton>
              </Flex>
            </Box>{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserConfirmationModal;
