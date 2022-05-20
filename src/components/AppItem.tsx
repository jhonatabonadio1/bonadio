import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

export function AppItem(){
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
                <Avatar size="md" name="Site de Rifas"/>
                <Box>
                    <Text fontWeight="bold">Site de rifas</Text>
                    <Text color="gray.300">#172846</Text>
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
                    <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="orange.400"/>
                    <Text fontWeight="bold">Em Andamento</Text>
                </Flex>
            <Text
                color="gray.300"
            >
                Finalizando o projeto
                <Text as="span" fontWeight="bold" ml="1">
                    · Publicado há 2 horas atrás
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