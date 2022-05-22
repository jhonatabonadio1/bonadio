import { Avatar, AvatarBadge, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface Message{
    author: {
        name: string;
        avatar?: string;
    }
    message: string;
    date: string;
    online?: boolean;
}

export function MessageCard({author, message, date, online}: Message){
    return(
        <Flex
            align="center"
            py="2"
        > 
            <HStack 
                spacing="4"
            >
                <Avatar size="md" name={author.name} src={author.avatar}>
                    {online &&
                        <AvatarBadge boxSize='1.3rem' bg='green.500' />
                    }
                </Avatar>
                <Box>
                    <HStack>
                        <Text fontWeight="bold">{author.name}</Text>

                    </HStack>
                    <Text >{message}</Text>

                </Box>
            </HStack>
        </Flex>
    )
}