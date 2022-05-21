import { Box, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiAppsLine, RiBankCardLine, RiBoxingLine, RiDashboardLine, RiHistoryLine, RiLogoutCircleLine, RiMessageLine, RiPhoneLine } from "react-icons/ri";
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
                            active={router.pathname === '/panel/dashboard'} 
                            href="/panel/dashboard"
                        />
                        <SidebarItem 
                            name="Meus aplicativos" 
                            icon={RiAppsLine} 
                            active={router.asPath === '/panel/apps'} 
                            href="/panel/apps"
                        />
                        <SidebarItem 
                            name="Pedidos" 
                            icon={RiBoxingLine} 
                            active={router.pathname === '/panel/orders'} 
                            href="/panel/orders"
                        />
                        <SidebarItem 
                            name="Pagamentos" 
                            icon={RiBankCardLine} 
                            active={router.pathname === '/panel/payments'} 
                            href="/panel/payments"
                        />
                        <SidebarItem 
                            name="Histórico" 
                            icon={RiHistoryLine} 
                            active={router.pathname === '/panel/history'} 
                            href="/panel/history"
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
                            active={router.pathname === '/panel/support'} 
                            href="/panel/support" 
                        />
                        <SidebarItem 
                            name="Mensagens" 
                            icon={RiMessageLine} 
                            active={router.pathname === '/panel/inbox'} 
                            href="/panel/inbox"
                        />
                        <SidebarItem 
                            name="Sair" 
                            icon={RiLogoutCircleLine} 
                            href="/"
                        />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}