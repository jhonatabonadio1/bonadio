import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

export function PaymentItem(){
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
                    <Text fontWeight="bold">Criação de site avançado</Text>
                    <Text color="gray.300">Cartão de crédito</Text>
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
                    <Text fontWeight="bold">R$7500,00 · <Text as="span" fontWeight="normal" color="gray.300">Crédito Parcelado</Text></Text>
                </Flex>
            <Text
                color="gray.300"
            >
                6x de R$1150,00 · CET 2,6% ao mês
            </Text>
            </Box>
            <HStack
                spacing="4"
            >
                <Flex align="center">
                    <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="green.300"/>
                    <Text fontWeight="bold">Aprovado</Text>
                </Flex>
            </HStack>
        </Flex>
    )
}