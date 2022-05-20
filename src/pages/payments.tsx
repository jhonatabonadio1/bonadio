import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { GridBox } from "../components/GridBox";
import { PaymentItem } from "../components/PaymentItem";

export default function Payments(){
    return(
        <>
        <title>Pagamentos | Bonadio.</title>
            <Flex direction="column" h="100vh">
                <Header />
                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    <Flex flex="1" gap="4" flexDir="column">
                        <SimpleGrid gap="4" alignItems="flex-start">
                            <GridBox
                                name="Pagamentos"
                            >
                                <Stack spacing="4">
                                   <PaymentItem />
                                </Stack>
                            </GridBox>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}