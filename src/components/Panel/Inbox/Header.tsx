import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface InboxHeader{
    author:{
        name: string;
        avatar?: string;
    }
    online?: boolean;
    onlineAt?: string;
}

export function InboxHeader({author, online = false, onlineAt}: InboxHeader){
    return(
        <Flex
            align="center"
            py="2"
        > 
        <HStack 
            spacing="4"
        >
            <Avatar size="md" name={author.name} src={author.avatar}/>
            <Box>
                <Text fontWeight="bold">{author.name}</Text>
                {
                    online && 
                    <HStack
                       spacing={0}
                    >
                        <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="green.300"/>
                        <Text>Disponível</Text>
                    </HStack>
                }
            </Box>
        </HStack>
    </Flex>
    )
}