import { Avatar, AvatarBadge, Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";

interface Message{
    type: "received" | "sended";
    author: {
        name: string;
        avatar?: string;
    }
    date: string;
    message: string;
}

export function Message({type, author, date, message}: Message){
    return type == "received" ?
        <Flex
            flexDir="column"
        >   
            <HStack align="flex-start">
                <Stack>
                    <HStack>
                        
                        <Avatar name={author.name} w="8" h="8" size="sm">
                            
                        </Avatar>
                        <Box
                            py="2"
                            px="4"
                            bgColor="blue.500"
                            borderRadius="8"
                            maxW="360"
                        >
                            <Text>{message}</Text>
                        </Box>
                    </HStack>
                    <HStack>
                        <Box w="8"/>
                        <Text color="gray.400" fontSize="small">{date}</Text>
                    </HStack>
                </Stack>
            </HStack> 
        </Flex>
    :
    <Flex
        flexDir="column"
        align="flex-end"
    >
        <HStack align="flex-start">
            <Stack>
                <HStack>
                    <Box
                        py="2"
                        px="4"
                        bgColor="gray.600"
                        borderRadius="8"
                        maxW="360"
                    >
                        <Text>{message}</Text>
                    </Box>
                </HStack>
                <Box flex="1" alignSelf="flex-end">
                    <Text color="gray.400" fontSize="small">{date}</Text>
                </Box>
            </Stack>
        </HStack>   
    </Flex>
}