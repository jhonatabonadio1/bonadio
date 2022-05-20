import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

export function OrderItem(){
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
                    <Text color="gray.300">Site de rifas</Text>
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
                    <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="green.300"/>
                    <Text fontWeight="bold">Pedido Aprovado</Text>
                </Flex>
            <Text
                color="gray.300"
            >
                #17284600001
                <Text as="span" fontWeight="bold" ml="1">
                    · 10 de maio de 2022 às 15:23
                </Text>
            </Text>
            </Box>
            <HStack
                spacing="4"
            >
                <Icon as={RiArrowRightLine} fontSize="28" />
            </HStack>
        </Flex>
    )
}