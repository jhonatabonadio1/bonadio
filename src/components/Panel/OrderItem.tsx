import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

interface OrderItem{
    id: string;
    name: string;
    description: string;
    status: "Pedido aprovado" | "Pedido pendente" | "Pedido recusado";
    date: string;
}

export function OrderItem({id, name, description, status, date}: OrderItem){
    return(
        <Flex
            align="center"
            py="2"
        > 
            <HStack 
                spacing="4"
                pr="8"
                mr="8"
                flex="1"
                borderRightWidth={1}
                borderColor="gray.700"
                w="56"
            >
                <Box>
                    <Text fontWeight="bold">{name}</Text>
                    <Text color="gray.300">{description}</Text>
                </Box>
            </HStack>

            <HStack 
                spacing="4"
                pr="8"
                mr="8"
                
                borderRightWidth={1}
                borderColor="gray.700"
                w="56"
            >
                <Box>
                    <Text fontWeight="bold">#{id}</Text>
                    
                    <Text color="gray.300">{date}</Text>
                </Box>
            </HStack>
            <Box >
                <Flex align="center">
                    {
                        status == "Pedido aprovado" && <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="green.300"/>
                    }
                    {
                        status == "Pedido pendente" && <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="orange.400"/>
                    }
                    {
                        status == "Pedido recusado" && <Icon as={RiCheckboxBlankCircleFill} fontSize="8" mr="2" color="red.400"/>
                    }
                    <Text fontWeight="bold">{status}</Text>
                </Flex>
          
            </Box>

        </Flex>
    )
}