import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { Header } from "../components/Panel/Header";
import { Sidebar } from "../components/Panel/Sidebar/Sidebar";
import { GridBox } from "../components/Panel/GridBox";
import { OrderItem } from "../components/Panel/OrderItem";
import { Pagination } from "../components/Pagination";

export default function Orders(){
    return(
        <>
        <title>Pedidos | Bonadio.</title>
            <Flex direction="column" h="100vh">
                <Header />
                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    <Flex flex="1" gap="4" flexDir="column">
                        <SimpleGrid gap="4" alignItems="flex-start">
                            <GridBox
                                name="Pedidos"
                            >
                                <Stack spacing="4">
                                   <OrderItem 
                                        date="24 de abril às 11:14"
                                        description="Site de rifas"
                                        id="17283900003"
                                        name="Criação de site avançado"
                                        status="Pedido aprovado"
                                   />
                                    <OrderItem 
                                        date="24 de abril às 11:14"
                                        description="Site de rifas"
                                        id="17283900002"
                                        name="Aplicativo iOS"
                                        status="Pedido pendente"
                                   />
                                    <OrderItem 
                                        date="24 de abril às 11:14"
                                        description="Site de rifas"
                                        id="17283900001"
                                        name="Aplicativo Android"
                                        status="Pedido recusado"
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