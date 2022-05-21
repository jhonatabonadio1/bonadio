import { Avatar, Box, Divider, Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Header } from "../../components/Panel/Header";
import { Sidebar } from "../../components/Panel/Sidebar/Sidebar";
import { GridBox } from "../../components/Panel/GridBox";

import ReactJS from '../../assets/Images/reactjs.svg'
import Ruby from '../../assets/Images/ruby.svg'
import Typescript from '../../assets/Images/typescript.svg'
import Javascript from '../../assets/Images/javascript.svg'

export default function AppShow(){
    return(
        <>
        <title>Meus aplicativos | Bonadio.</title>
            <Flex direction="column" h="100vh">
                <Header />
                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    <Flex flex="1" gap="4" flexDir="column">
                        <SimpleGrid gap="4" gridTemplateColumns="2fr 1fr" minChildWidth="320px" alignItems="flex-start">
                            <SimpleGrid>
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
                            </SimpleGrid>
                            <SimpleGrid gap="4">
                                <GridBox
                                    name="Tecnologias"
                                >
                                    <HStack>
                                        <ReactJS />
                                        <Ruby />
                                        <Javascript />
                                        <Typescript />
                                        <Text fontWeight="bold">+ 2</Text>
                                    </HStack>
                                </GridBox>
                                <GridBox
                                    name="Equipe"
                                >
                                    <HStack>
                                        <Avatar name="Jhonata Bonadio" />
                                        <Avatar name="Lucas Assis" />
                                        <Avatar name="Pedro Viana" />
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