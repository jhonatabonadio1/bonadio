import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { GridBox } from "../components/GridBox";

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
                                name="Caixa de entrada"
                            >
                                
                            </GridBox>
                            <GridBox
                             
                            >
                                
                            </GridBox>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}