import { CreateAgentSchema } from "@/schema/agents";
import { generalStyle } from "@/utils";
import {
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

const AssignAccountModal = () => {
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
        Edit Account
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"5xl"}>
        <ModalOverlay />
        <ModalContent px={{ base: "1rem", md: "2rem" }} py="3rem">
          <Text fontWeight={700} px="1rem">
            Assign Account
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(submit)}>
              <Flex
                flexDir="column"
                mt="2rem"
                gap= "1.5rem"
              >
                <InputField
                  isRequired
                  label="Bank Name"
                  placeholder="First Bank"
                  register={register("bankName")}
                  errorMessage={errors.bankName?.message}
                  onChange={(e: any) => {
                    setValue("bankName", e.target.value);
                  }}
                />

                <InputField
                  isRequired
                  label="Account Number"
                  placeholder="3004526624"
                  register={register("accountNumber")}
                  errorMessage={errors.accountNumber?.message}
                  onChange={(e: any) => {
                    setValue("accountNumber", e.target.value);
                  }}
                />
                <InputField
                  isRequired
                  label="Account Name"
                  placeholder="Mike Edward"
                  register={register("accountName")}
                  errorMessage={errors.accountName?.message}
                  onChange={(e: any) => {
                    setValue("accountName", e.target.value);
                  }}
                />
              </Flex>

              <Flex gap="1rem" mt="5rem" justify={"flex-end"}>
                <ModalButton
                  onClick={onClose}
                  bg="typography.lighterGreen"
                  color="typography.darkGreen"
                  className={""}
                >
                  Cancel
                </ModalButton>
                <ModalButton>Save</ModalButton>
              </Flex>
            </form>{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignAccountModal;
