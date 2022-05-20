import { Link } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'

interface HeaderLink extends LinkProps{
    name: string;
    active?: boolean;
}

export function HeaderLink({name, active = false, ...rest}: HeaderLink){
    return !active ? (
        <NextLink {...rest}>
            <Link _hover={{textDecor: "none", color: "pink.500"}}>{name}</Link>
        </NextLink>
    ) :
    (
        <NextLink {...rest}>
            <Link color="pink.500" fontWeight="bold" _hover={{textDecor: "none", color: "pink.500"}}>{name}</Link>
        </NextLink>
    )
}