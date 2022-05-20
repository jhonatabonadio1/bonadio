import { Box, Flex, Text } from "@chakra-ui/react";

interface Badge{
    date: string;
}

export function DateBadge({date}: Badge){
    return(
        <Flex
            align="center"
            justify="center"
            mb="8"
        >
        <Box
            bg="gray.700"
            py="1"
            px="4"
            borderRadius="8"
        >
            <Text fontSize="sm">{date}</Text>
        </Box>
    </Flex>
    )
}