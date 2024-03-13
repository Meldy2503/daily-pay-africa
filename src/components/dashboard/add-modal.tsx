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
  useDisclosure
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
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      email: "",
      phone: "",
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
      <Button
        w={{ base: "20rem", sm: "100%" }}
        type="button"
        as="button"
        className="btn"
        onClick={onOpen}
      >
            Create Account
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"6xl"}>
        <ModalOverlay />
        <ModalContent px={{ base: "1rem", md: "2rem" }} py="3rem">
          <Text fontWeight={700} px="1rem">
          Create Account
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(submit)}>
              <Flex
                flexDir="column"
                mt="2rem"
                gap={{ base: "1.5rem", md: "2.5rem" }}
              >
                <Flex
                  gap={{ base: "1.5rem", md: "5rem" }}
                  direction={{ base: "column", md: "row" }}
                >
                  <InputField
                    isRequired
                    label="First Name"
                    placeholder="John"
                    register={register("firstName")}
                    errorMessage={errors.firstName?.message}
                    onChange={(e: any) => {
                      setValue("firstName", e.target.value);
                    }}
                  />

                  <InputField
                    isRequired
                    label="Last Name"
                    placeholder="Doe"
                    register={register("lastName")}
                    errorMessage={errors.lastName?.message}
                    onChange={(e: any) => {
                      setValue("lastName", e.target.value);
                    }}
                  />
                </Flex>
                <Flex
                  gap={{ base: "1.5rem", md: "5rem" }}
                  direction={{ base: "column", md: "row" }}
                >
                  <InputField
                    label="Email"
                    placeholder="johndoe@example.com"
                    register={register("email")}
                    errorMessage={errors.email?.message}
                    onChange={(e: any) => {
                      setValue("email", e.target.value);
                    }}
                  />

                  <InputField
                    isPhone
                    control={control}
                    label="Phone Number"
                    placeholder="123-456-2268"
                    id="phone"
                    register={register("phone")}
                    errorMessage={errors.phone?.message}
                    onChange={(e: any) => {
                      setValue("phone", e.target.value);
                    }}
                  />
                </Flex>
                <Flex
                  gap={{ base: "1.5rem", md: "5rem" }}
                  direction={{ base: "column", md: "row" }}
                >
                  <InputField
                    isRequired
                    isDate
                    label="Date of Birth"
                    placeholder="Select Date and Time"
                    register={register("dateOfBirth")}
                     maxDate={new Date().toISOString().split("T")[0]}
                  />
                  <FormControl w="100%">
                    <FormLabel fontWeight={"500"} fontSize={"1.6rem"}>
                      Gender
                    </FormLabel>
                    <Select
                      placeholder="Select gender"
                      focusBorderColor="typography.lightGreen"
                      style={{ ...generalStyle }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                  </FormControl>
                </Flex>
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
                <ModalButton>Save changes</ModalButton>
              </Flex>
            </form>{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignAccountModal;
