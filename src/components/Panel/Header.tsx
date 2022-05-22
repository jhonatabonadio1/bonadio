import {
    Box, 
    Flex, 
    HStack, 
    Icon, 
    Input, 
    Text, 
    Avatar, 
    Menu, 
    MenuButton, 
    MenuItem, 
    MenuList
} from '@chakra-ui/react'

import {
    RiBankCardLine, 
    RiLogoutCircleLine, 
    RiNotificationLine, 
    RiPhoneLine, 
    RiSearchLine, 
    RiUserLine
} from 'react-icons/ri'

import NextLink from 'next/link'

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
            <Text 
                fontSize={["2xl", "3xl"]} 
                fontWeight="700" 
                letterSpacing="tight" 
                w="64"
            >
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
                <Menu placement="bottom-end">
                    <MenuButton>
                        <Flex align="center">
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
                    </MenuButton>
                    <MenuList 
                        bg="gray.800"
                        border="none"
                        boxShadow="lg"
                        mt="2"
                    >
                        <MenuItem 
                            icon={<RiUserLine color="#D53F8C" size="1.3rem"/>}
                            py="3"
                            px="5"
                            _hover={{
                                bg: "gray.900"
                            }}
                            _active={{
                                bg: "gray.900"
                            }}
                            _focus={{
                                bg: "gray.900"
                            }}
                        >
                            Minha conta
                        </MenuItem>
                        <NextLink href="/panel/payments">
                            <MenuItem 
                                icon={<RiBankCardLine color="#D53F8C" size="1.3rem"/>}
                                py="3"
                                px="5"
                                _hover={{
                                    bg: "gray.900"
                                }}
                                _active={{
                                    bg: "gray.900"
                                }}
                                _focus={{
                                    bg: "gray.900"
                                }}
                            >
                                Pagamentos
                            </MenuItem>
                        </NextLink>
                        <NextLink href="./support">
                            <MenuItem 
                                icon={<RiPhoneLine color="#D53F8C" size="1.3rem"/>}
                                py="3"
                                px="5"
                                _hover={{
                                    bg: "gray.900"
                                }}
                                _active={{
                                    bg: "gray.900"
                                }}
                                _focus={{
                                    bg: "gray.900"
                                }}
                            >
                                Contato
                            </MenuItem>
                        </NextLink>
                        <NextLink href="/">
                            <MenuItem 
                                icon={<RiLogoutCircleLine color="#D53F8C" size="1.3rem"/>}
                                py="3"
                                px="5"
                                _hover={{
                                    bg: "gray.900"
                                }}
                                _active={{
                                    bg: "gray.900"
                                }}
                                _focus={{
                                    bg: "gray.900"
                                }}
                            >
                                Sair
                            </MenuItem>
                        </NextLink>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}