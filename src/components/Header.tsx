import {Box, Flex, HStack, Icon, Input, Text, Avatar} from '@chakra-ui/react'
import {RiNotificationLine, RiSearchLine} from 'react-icons/ri'

export function Header(){
    return(
        <Flex 
            as="header" 
            w="100%" 
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            align="center"
            px="6"
        >
            <Text fontSize="3xl" fontWeight="700" letterSpacing="tight" w="64">
                bonadio
                <Text as="span" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input 
                    color="gray.50"
                    variant="unstyled"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: 'gray.400'}}
                />
                <Icon as={RiSearchLine} fontSize="20"/>
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack 
                    spacing="4"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                </HStack>
                <Flex
                    align="center"
                >
                    <Box
                        mr="4"
                        textAlign="right"
                    >
                        <Text>Jhonata Bonadio</Text>
                        <Text
                            color="gray.300" fontSize="small"
                        >jhonbonadio@gmail.com</Text>
                    </Box>
                    <Avatar size="md" name="Jhonata Bonadio"/>
                </Flex>
            </Flex>
        </Flex>
    )
}