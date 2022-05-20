import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiChat1Line, RiCheckboxBlankCircleFill } from "react-icons/ri";

export function NotificationItem(){
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
                <Avatar size="md" name="Pedro Viana"/>
                <Box>
                    <Text fontWeight="bold">Pedro Viana <Text as="span" fontWeight="normal">lhe enviou uma nova mensagem</Text></Text>
                    <Text color="gray.300">Há 2 dias</Text>
                </Box>
            </HStack>
            
            <HStack
                spacing="4"
            >
                <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="pink.500"/>
            </HStack>
        </Flex>
    )
}