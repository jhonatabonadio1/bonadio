import {  Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface Payment{
    name: string;
    method: string;
    paymentMethod: string;
    value: string,
    description: string
    status: "Aprovado" | "Pendente" | "Recusado"
}

export function PaymentItem({name, method, paymentMethod, value, description, status}: Payment){
    return(
        <Flex
            align="center"
            py="2"
        > 
            <HStack 
                spacing="4"
                pr="8"
                mr="8"
                borderRightWidth={1}
                borderColor="gray.700"
                w="56"
            >
                <Box>
                    <Text fontWeight="bold">{name}</Text>
                    <Text color="gray.300">{method}</Text>
                </Box>
            </HStack>
            <Box
                pr="8"
                mr="8"
                flex="1"
                borderRightWidth={1}
                borderColor="gray.700"
            >
                <Flex align="center">
                    <Text fontWeight="bold">{value} · <Text as="span" fontWeight="normal" color="gray.300">{paymentMethod}</Text></Text>
                </Flex>
            <Text
                color="gray.300"
            >
                {description}
            </Text>
            </Box>
            <HStack
                spacing="4"
            >
                <Flex align="center">
                    {
                        status === "Aprovado" && <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="green.300"/>
                    }
                    {
                        status === "Pendente" && <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="orange.400"/>
                    }
                    {
                        status === "Recusado" && <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="red.300"/>
                    }
                    
                    <Text fontWeight="bold">{status}</Text>
                </Flex>
            </HStack>
        </Flex>
    )
}