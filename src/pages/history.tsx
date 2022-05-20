import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../components/Panel/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { GridBox } from "../components/Panel/GridBox";
import { HistoryItem } from "../components/Panel/HistoryItem";

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
                                        date="Publicado há 2 horas atrás"
                                        project={{
                                            id: "81495184",
                                            name: "Site de rifas"
                                        }}
                                   />
                                    <HistoryItem 
                                        author={{
                                            name: "Jhonata Lima",
                                            description: "Desenvolvedor"
                                        }}
                                        date="Publicado há 2 horas atrás"
                                        project={{
                                            id: "81495184",
                                            name: "Site de rifas"
                                        }}
                                   />
                                    <HistoryItem 
                                        author={{
                                            name: "Jhonata Lima",
                                            description: "Desenvolvedor"
                                        }}
                                        date="Publicado há 2 horas atrás"
                                        project={{
                                            id: "81495184",
                                            name: "Site de rifas"
                                        }}
                                   />
                                    <HistoryItem 
                                        author={{
                                            name: "Jhonata Lima",
                                            description: "Desenvolvedor"
                                        }}
                                        date="Publicado há 2 horas atrás"
                                        project={{
                                            id: "81495184",
                                            name: "Site de rifas"
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