import {Flex, HStack, Text, Button} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HeaderLink } from './Link'

import NextLink from 'next/link'

export function Header(){

    const router = useRouter()

    return(
        <Flex 
            as="header" 
            w="100%"
            bg="gray.900"
            borderColor="gray.600"
            borderBottomWidth={1}
            h="5rem"
            align="center"
        >
            <Flex
                w="100%"
                maxWidth={1360}
                mx="auto"
                px="6"
            >
                <Text fontSize="3xl" fontWeight="700" letterSpacing="tight" w="64">
                    bonadio
                    <Text as="span" color="pink.500">.</Text>
                </Text>

                <HStack
                    m="auto"
                    spacing={8}
                    color="gray.300"
                >
                  
                    <HeaderLink 
                        href="/"
                        name="Home"
                        active={router.pathname === '/'}
                    />
                    <HeaderLink 
                        href="/"
                        name="Serviços"
                        active={router.pathname === '/services'}
                    />
                    <HeaderLink 
                        href="/"
                        name="Blog"
                        active={router.pathname === '/blog'}
                    />
                    <HeaderLink 
                        href="/"
                        name="A Bonadio"
                        active={router.pathname === '/about'}
                    />

                </HStack>

                <Flex
                    align="center"
                    ml="auto"
                >
                    <HStack 
                        spacing="4"
                        py="1"
                        color="gray.300"
                    >
                        <NextLink href='/panel/login'>
                            <Button
                                bg="transparent"
                                borderColor="pink.500"
                                borderWidth={1}
                                colorScheme="pink"
                            >Acessar painel</Button>
                        </NextLink>
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    )
}