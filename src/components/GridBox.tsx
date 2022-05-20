import { Box, BoxProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GridBox extends BoxProps{
    name?: string;
    children?: ReactNode;
}

export function GridBox({name, children, ...rest}: GridBox){
    return(
        <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            h="100%"
            {...rest}
        >
            {name && <Text fontSize="lg" mb="4">{name}</Text>}
            {children}
        </Box>
    )
}