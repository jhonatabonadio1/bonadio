import React, { ReactNode } from "react";
import { Avatar, Box, Flex, HStack, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Tooltip } from '@chakra-ui/react'
import NextLink from 'next/link'
import { RiArrowLeftLine } from "react-icons/ri";

import { Header } from "../../../components/Panel/Header";
import { Sidebar } from "../../../components/Panel/Sidebar/Sidebar";
import { GridBox } from "../../../components/Panel/GridBox";

import ReactJS from '../../../assets/Images/reactjs.svg'
import Ruby from '../../../assets/Images/ruby.svg'
import Typescript from '../../../assets/Images/typescript.svg'
import Javascript from '../../../assets/Images/javascript.svg'



interface Tooltip{
    children: ReactNode;
}

export default function AppShow(){

    return(
        <>
        <title>Meus aplicativos | Bonadio.</title>
            <Flex direction="column" h="100vh">
                <Header />
                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    
                    <Flex flex="1" gap="4" flexDir="column">
                        <HStack align="center" mb="2">
                            <NextLink href="./">
                                <Icon 
                                    as={RiArrowLeftLine}
                                    fontSize="3xl"
                                    color="gray.300"
                                    
                                    _hover={{
                                        color: "gray.600",
                                    }}
                                    cursor="pointer"
                                    transition="color 0.2s ease"
                                />
                            </NextLink>
                            <Text fontSize="larger">Meus aplicativos</Text>
                        </HStack>
                        <SimpleGrid gap="4" gridTemplateColumns="2fr 1fr" minChildWidth="320px" alignItems="flex-start">
                            <SimpleGrid gap="4">
                                
                                <GridBox>
                                    <Stack>
                                        
                                        <HStack
                                            spacing="6"
                                        >
                                            <Avatar name="Site de rifas" size="xl"/>
                                            <Box>
                                                <Text fontWeight="bold" fontSize="3xl" lineHeight="normal">Site de rifas</Text>
                                                <Text color="gray.300" fontSize="xl">#3412414</Text>
                                            </Box>
                                        </HStack>
                                    </Stack>
                                </GridBox>
                                <GridBox>
                          
                                </GridBox>
                            </SimpleGrid>
                            <SimpleGrid gap="4">
                                <GridBox
                                    name="Tecnologias"
                                >
                                    <HStack>
                                        <Tooltip label='ReactJS' shouldWrapChildren>
                                            <ReactJS />
                                        </Tooltip>
                                        <Tooltip label='Ruby' shouldWrapChildren>
                                            <Ruby />
                                        </Tooltip>
                                        <Tooltip label='Javascript' shouldWrapChildren>
                                            <Javascript />
                                        </Tooltip>
                                        <Tooltip label='Typescript' shouldWrapChildren>
                                            <Typescript />
                                        </Tooltip>
                                        <Text fontWeight="bold">+ 2</Text>
                                    </HStack>
                                </GridBox>
                                <GridBox
                                    name="Equipe"
                                >
                                    <HStack>
                                        <Tooltip label='Jhonata Bonadio' shouldWrapChildren>
                                            <Avatar name="Jhonata Bonadio" />
                                        </Tooltip>
                                        <Tooltip label='Lucas Assis' shouldWrapChildren>
                                            <Avatar name="Lucas Assis" />
                                        </Tooltip>
                                        <Tooltip label='Pedro Viana' shouldWrapChildren>
                                            <Avatar name="Pedro Viana" />
                                        </Tooltip>
                                        <Text fontWeight="bold">+ 12</Text>
                                    </HStack>
                                </GridBox>
                                <GridBox
                                    name="Última atividade"
                                >
                                   <HStack spacing="4">
                                       <Avatar name="Lucas Assis" />
                                       <Box>
                                           <Text fontWeight="bold">Pedro Viana</Text>
                                           <Text>Finalizando backend do pro...</Text>
                                       </Box>
                                   </HStack>
                                </GridBox>
                            </SimpleGrid>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}