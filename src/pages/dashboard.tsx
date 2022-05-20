import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import CountUp from 'react-countup';
import { GridBox } from "../components/GridBox";
import { HistoryItem } from "../components/HistoryItem";
import { NotificationItem } from "../components/NotificationItem";

export default function Dashboard(){

    return(
        <>
            <title>Dashboard | Bonadio</title>
            <Flex direction="column" h="100vh">
                <Header />

                <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    <Flex flex="1" gap="4" flexDir="column">
                        <SimpleGrid gap="4" minChildWidth="320px" alignItems="flex-start">
                            <GridBox
                                name="Pedidos aprovados"
                            >
                                <Text
                                    fontSize="7xl"
                                    fontWeight="bold"
                                >
                                    <CountUp start={0} end={3}/>
                                </Text>
                            </GridBox>
                            <GridBox
                                name="Pedidos aprovados"
                            >
                                <Text
                                    fontSize="7xl"
                                    fontWeight="bold"
                                >
                                    <CountUp start={0} end={1}/>
                                </Text>
                            </GridBox>
                            <GridBox
                                name="Pedidos aprovados"
                            >
                                <Text
                                    fontSize="7xl"
                                    fontWeight="bold"
                                >
                                    <CountUp start={0} end={2} />
                                </Text>
                            </GridBox>
                        </SimpleGrid>
                        <SimpleGrid gap="4" alignItems="flex-start">
                            <GridBox
                                name="Última notificação"
                            >
                                <Stack spacing="4">
                                    <NotificationItem />
                                </Stack>
                            </GridBox>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}