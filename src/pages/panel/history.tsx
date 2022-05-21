import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../../components/Panel/Header";
import { Sidebar } from "../../components/Panel/Sidebar/Sidebar";
import { GridBox } from "../../components/Panel/GridBox";
import { HistoryItem } from "../../components/Panel/HistoryItem";
import { Pagination } from "../../components/Pagination";

export default function History(){
    return(
        <>
        <title>Histórico | Bonadio.</title>
            <Flex direction="column" h="100vh">
                <Header />
                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    <Flex flex="1" gap="4" flexDir="column">
                        <SimpleGrid gap="4" alignItems="flex-start">
                            <GridBox
                                name="Histórico"
                            >
                                <Stack spacing="4">
                                   <HistoryItem 
                                        author={{
                                            name: "Jhonata Lima",
                                            description: "Desenvolvedor"
                                        }}
                                        date="Há 2 horas"
                                        project={{
                                            id: "81495184",
                                            name: "Site de rifas"
                                        }}
                                        commit="Projeto criado"
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