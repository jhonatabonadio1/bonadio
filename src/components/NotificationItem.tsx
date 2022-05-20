import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiChat1Line, RiCheckboxBlankCircleFill } from "react-icons/ri";

interface Notification{
    date: string;
    read?: boolean;
    author?: {
        name: string;
        avatar?: string;
    };
    text: string;
}

export function NotificationItem({date, read, author, text}: Notification){

    return(
        <Flex
            align="center"
            py="4"
        > 
            <HStack 
                spacing="4"
                pr="8"
                mr="8"
                flex="1"
            >
                {
                    !!author &&
                    <Avatar size="md" name={author.name} src={author.avatar}/>
                }
                <Box>
                    <Text fontWeight="bold">{author && author.name} <Text as="span" fontWeight="normal">{text}</Text></Text>
                    <Text color="gray.300">{date}</Text>
                </Box>
            </HStack>
            
            {
                !read && 
                <HStack
                    spacing="4"
                >
                    <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="pink.500"/>
                </HStack>
            }
            
        </Flex>
    )
}