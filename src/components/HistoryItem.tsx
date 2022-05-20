import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiChat1Line } from "react-icons/ri";

export function HistoryItem(){
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
                <Avatar size="md" name="Lucas Assis"/>
                <Box>
                    <Text fontWeight="bold">Lucas Assis</Text>
                    <Text color="gray.300">Designer</Text>
                </Box>
            </HStack>
            <Box
                pr="8"
                mr="8"
                flex="1"
                borderRightWidth={1}
                borderColor="gray.700"
            >
            <Text
                fontWeight="bold"
            >Finalizando o projeto</Text>
            <Text
                color="gray.300"
            >
                Publicado há 2 horas atrás
                <Text as="span" fontWeight="bold" ml="1">
                    · Site de rifas #172846
                </Text>
            </Text>
            </Box>
            <HStack
                spacing="4"
            >
                <Icon as={RiChat1Line} fontSize="28" />
                <Icon as={RiArrowRightLine} fontSize="28" />
            </HStack>
        </Flex>
    )
}