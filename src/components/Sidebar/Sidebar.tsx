import { Box, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiAppsLine, RiBankCardLine, RiBoxingLine, RiDashboardLine, RiHistoryLine, RiMessageLine, RiPhoneLine } from "react-icons/ri";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){

    const router = useRouter()

    return(
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.400"
                        fontSize="small"
                    >GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <SidebarItem 
                            name="Dashboard" 
                            icon={RiDashboardLine} 
                            active={router.pathname === '/dashboard'} 
                            href="/dashboard"
                        />
                        <SidebarItem 
                            name="Meus aplicativos" 
                            icon={RiAppsLine} 
                            active={router.pathname === '/apps'} 
                            href="/apps"
                        />
                        <SidebarItem 
                            name="Pedidos" 
                            icon={RiBoxingLine} 
                            active={router.pathname === '/orders'} 
                            href="/orders"
                        />
                        <SidebarItem 
                            name="Pagamentos" 
                            icon={RiBankCardLine} 
                            active={router.pathname === '/payments'} 
                            href="/payments"
                        />
                        <SidebarItem 
                            name="Histórico" 
                            icon={RiHistoryLine} 
                            active={router.pathname === '/history'} 
                            href="/history"
                        />
                    </Stack>
                </Box>
                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.400"
                        fontSize="small"
                    >
                        SUPORTE
                    </Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <SidebarItem 
                            name="Contato" 
                            icon={RiPhoneLine} 
                            active={router.pathname === '/support'} 
                            href="/support" 
                        />
                        <SidebarItem 
                            name="Mensagens" 
                            icon={RiMessageLine} 
                            active={router.pathname === '/inbox'} 
                            href="/inbox"
                        />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}