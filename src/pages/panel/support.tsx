import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../../components/Panel/Header";
import { Sidebar } from "../../components/Panel/Sidebar/Sidebar";
import { GridBox } from "../../components/Panel/GridBox";

export default function Support(){
    return(
        <>
        <title>Contato | Bonadio.</title>
            <Flex direction="column" h="100vh">
                <Header />
                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    <Flex flex="1" gap="4" flexDir="column">
                        <SimpleGrid gap="4" alignItems="flex-start">
                            <GridBox
                                name="Contato"
                            >
                                
                            </GridBox>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}