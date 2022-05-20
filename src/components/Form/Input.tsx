import { Input as ChakraInput, InputGroup, InputLeftElement, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface InputProps extends ChakraInputProps{
    name: string;
    size?: "lg" | "md" | "sm" | "xs";
    icon?: ReactNode;
}

export function Input({name, size, icon, ...rest}: InputProps){
    return(
        <InputGroup size={size}>
            {
                icon &&
                <InputLeftElement 
                    pointerEvents='none'
                    children={icon}
                />
            }
            <ChakraInput 
                name={name}
                id={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={
                    {
                        bgColor: "gray.900"
                    }
                }
                {...rest}
            />
        </InputGroup>
    )
}