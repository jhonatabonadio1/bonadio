import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiChat1Line } from "react-icons/ri";

interface History{
    author: {
        name: string;
        avatar?: string;
        description: string;
    }
    date: string;
    project?:{
        id: string;
        name: string;
    }
}

export function HistoryItem({author, date, project}: History){
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
                <Avatar size="md" name={author.name} src={author.avatar}/>
                <Box>
                    <Text fontWeight="bold">{author.name}</Text>
                    <Text color="gray.300">{author.description}</Text>
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
                >{project.name}</Text>
                    <Text
                        color="gray.300"
                    >
                    {date}
                    <Text as="span" fontWeight="bold" ml="1">
                        · #{project.id}
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