import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../components/Panel/Header";
import { Sidebar } from "../components/Panel/Sidebar/Sidebar";
import { GridBox } from "../components/Panel/GridBox";
import { PaymentItem } from "../components/Panel/PaymentItem";
import { Pagination } from "../components/Pagination";

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
                                   <PaymentItem 
                                        name="Criação de site avançado"
                                        description="6x de R$1500,00"
                                        method="Cartão de crédito"
                                        paymentMethod="Crédito parcelado"
                                        status="Aprovado"
                                        value="R$7500,00"
                                   />
                                   <PaymentItem 
                                        name="Criação de site avançado"
                                        description="6x de R$1500,00"
                                        method="Cartão de crédito"
                                        paymentMethod="Crédito parcelado"
                                        status="Pendente"
                                        value="R$7500,00"
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