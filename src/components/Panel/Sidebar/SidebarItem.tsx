import {Icon, Link, Text} from "@chakra-ui/react";
import { IconType } from "react-icons";
import NextLink, { LinkProps } from 'next/link'

interface SidebarItem extends LinkProps{
    name: string;
    icon: IconType;
    active?: boolean;
}

export function SidebarItem({name, icon, active = false, ...rest}: SidebarItem){
    
    return active ?(
        <NextLink {...rest}>
            <Link display="flex" alignItems="center" color="pink.500" _hover={{textDecor: "none"}}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{name}</Text>
            </Link>
        </NextLink>
    ) : (
        <NextLink {...rest}>
            <Link display="flex" alignItems="center" _hover={{color: "pink.500", textDecor: "none"}}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{name}</Text>
            </Link>
        </NextLink>
    )
}