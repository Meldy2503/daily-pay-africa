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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Button, ModalButton } from "../button";
import InputField from "../input-field";
import ApproveIcon from "@/assets/icons/approve";


const AssignAgentModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formHook = useForm<any>({
    // const formHook = useForm<EnrolleeType>({
    resolver: yupResolver(CreateAgentSchema),
    defaultValues: {
      bankName: "",
      accountNumber: "",
      accountName: "",
    },
  } as { resolver: Resolver<any> });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = formHook;

  const submit: SubmitHandler<any> = async (data) => {
    // if (!data) return;
    // Object.keys(data).forEach((key: string) => {
    //   if (!data[key]) {
    //     delete data[key];
    //   }
    // });
    // const result = await createEnrollee(data);
    // try {
    //   if (!result) {
    //     return;
    //   }
    //   if (result.status === 200 || result.status === 201) {
    //     toast.success('Enrollee Added Successfully!');
    //     formHook.reset();
    //     setOpenAddEnrollee(false);
    //   }
    // } catch (error) {
    //   toast.error(result.data.message || 'An error occurred');
    //   throw new Error(result.data.message);
    // }
  };
  return (
    <>
      <Button type="button" as="button" onClick={onOpen}>
        Change Agent
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay />
        <ModalContent px={{ base: "1rem", md: "2rem" }} py="3rem">
          <Text fontWeight={700} px="1rem">
            Assign Agent
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(submit)}>
              <Box
                mt="2rem"
              >
             <Flex justify={"center"} mb='3rem' >
                <ApproveIcon />
              </Flex>
              <FormControl w="100%" pb='3rem'>
                 
                    <Select
                      placeholder="Select agent"
                      focusBorderColor="typography.lightGreen"
                      style={{ ...generalStyle }}
                    >
                      <option value="male">Emmanuel Udoh</option>
                      <option value="female">Faith Obi</option>
                    </Select>
                  </FormControl>
              </Box>

              <Flex gap="1.5rem" mt="4rem" direction={'column'}>
                  <ModalButton w='100%'>Confirm</ModalButton>
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
            </form>{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignAgentModal;
