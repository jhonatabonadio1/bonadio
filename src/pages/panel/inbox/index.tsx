import { Box, Flex, Icon, SimpleGrid, Stack, Input, Text, HStack, Avatar } from "@chakra-ui/react";
import { Header } from "../../../components/Panel/Header";
import { Sidebar } from "../../../components/Panel/Sidebar/Sidebar";
import { GridBox } from "../../../components/Panel/GridBox";
import { MessageCard } from "../../../components/Panel/Inbox/MessageCard";
import { InboxHeader } from "../../../components/Panel/Inbox/Header";
import { RiSendPlane2Line } from "react-icons/ri";
import { Message } from "../../../components/Panel/Inbox/Message";
import { DateBadge } from "../../../components/Panel/Inbox/DateBadge";

export default function Inbox(){
    return(
        <>
        <title>Caixa de entrada | Bonadio.</title>
            <Flex direction="column" h="100vh">
                <Header />
                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    <Flex flex="1" gap="4" flexDir="column">
                        <SimpleGrid gap="4" minChildWidth="320px" gridTemplateColumns="1fr 2fr" alignItems="flex-start">
                            <GridBox
                                name="Caixa de entrada (3)"
                                h="auto"
                            >
                                <Stack spacing={4}>
                                    <MessageCard 
                                        author={{
                                            name: "Lucas Assis"
                                        }}
                                        message="Ok, entendi!"
                                        date="23/09/2022 ás 12:30"
                                        online
                                    />
                                    <MessageCard 
                                        author={{
                                            name: "Jhonata Henrique"
                                        }}
                                        message="Beleza, vou entrar em contato..."
                                        date="23/09/2022 ás 12:30"
                                    />
                                    <MessageCard 
                                        author={{
                                            name: "Pedro Nunes"
                                        }}
                                        message="Acredito que em até 5 d..."
                                        date="23/09/2022 ás 12:30"
                                    />
                                </Stack>
                            </GridBox>
                            <GridBox
                                display="flex"
                                flexDir="column"
                            >
                                <InboxHeader 
                                    author={{
                                        name: "Lucas Assis"
                                    }}
                                    online
                                />
                                <Flex
                                    bg="gray.900"
                                    mt="8"
                                    px="8"
                                    py="8"
                                    flexDir="column"
                                    minH={400}
                                    maxH={400}
                                    borderRadius={8}
                                    overflow="auto"
                                >
                                  <DateBadge date="Segunda-feira"/>
                                    <Stack
                                        spacing="2"
                                    >
                                     
                                        <Message 
                                            author={{
                                                name: "Lucas Assis"
                                            }}
                                            type="received"
                                            date="23:20"
                                            message="Gostaria de mais alguma coisa?"
                                        />
                                        <Message 
                                            author={{
                                                name: "Jhonata Bonadio"
                                            }}
                                            type="sended"
                                            date="23:22"
                                            message="Sim, tenta colocar o fundo mais escuro, por favor."
                                        />
                                          <Message 
                                            author={{
                                                name: "Lucas Assis"
                                            }}
                                            type="received"
                                            date="23:24"
                                            message="Ok, entendi!"
                                        />
                                    </Stack>
                                  
                             
                                </Flex>

                                <Flex
                                    as="label"
                                    py="4"
                                    px="8"
                                    mt="8"
                                    color="gray.200"
                                    position="relative"
                                    bg="gray.900"
                                    borderRadius="full"
                                >
                                    <Input 
                                        color="gray.50"
                                        variant="unstyled"
                                        mr="4"
                                        placeholder="Escreva sua mensagem"
                                        _placeholder={{color: 'gray.400'}}
                                    />
                                    <Icon as={RiSendPlane2Line} fontSize="20"/>
                                </Flex>
                            </GridBox>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}