import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../../../components/Panel/Header";
import { Sidebar } from "../../../components/Panel/Sidebar/Sidebar";
import { GridBox } from "../../../components/Panel/GridBox";
import { AppItem } from "../../../components/Panel/AppItem";
import { Pagination } from "../../../components/Pagination";

export default function AppList(){
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
                                <Pagination />
                            </GridBox>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}