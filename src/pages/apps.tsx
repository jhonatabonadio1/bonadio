import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { GridBox } from "../components/GridBox";
import { AppItem } from "../components/AppItem";

export default function Applications(){
    return(
        <>
        <title>Meus aplicativos | Bonadio.</title>
            <Flex direction="column" h="100vh">
                <Header />
                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    <Flex flex="1" gap="4" flexDir="column">
                        <SimpleGrid gap="4" alignItems="flex-start">
                            <GridBox
                                name="Meus aplicativos"
                            >
                                <Stack spacing="4">
                                   <AppItem 
                                        id="172846"
                                        appName="Site de rifas"
                                        status="Em andamento"
                                        lastCommit={{
                                            date: "há 2 horas atrás",
                                            name: "Finalizando o projeto"
                                        }}
                                   />
                                   <AppItem 
                                        id="172846"
                                        appName="Site institucional"
                                        status="Concluído"
                                        lastCommit={{
                                            date: "há 2 horas atrás",
                                            name: "Finalizando o projeto"
                                        }}
                                   />
                                </Stack>
                            </GridBox>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}