import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

interface App{
    id: string
    appName: string;
    appImage?: string;
    status: "Em andamento" | "Concluído";
    lastCommit?: {
        date: string;
        name: string;
    }
}

export function AppItem({id, appName, appImage, status, lastCommit}: App){

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
                <Avatar size="md" name={appName} src={appImage}/>
                <Box>
                    <Text fontWeight="bold">{appName}</Text>
                    <Text color="gray.300">#{id}</Text>
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
                    {
                        status === "Em andamento" && <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="orange.400"/>
                    }
                    {
                        status === "Concluído" && <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="green.300"/>
                    }
                    <Text fontWeight="bold">{status}</Text>
                </Flex>
            {
                lastCommit &&
                <Text
                    color="gray.300"
                >
                    {lastCommit.name}
                    <Text as="span" fontWeight="bold" ml="1">
                    · Publicado {lastCommit.date}
                    </Text>
                </Text>
            }
            </Box>
            <HStack
                spacing="4"
            >
                <Icon as={RiArrowRightLine} fontSize="28" />
            </HStack>
        </Flex>
    )
}