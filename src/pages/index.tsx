import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { Header } from '../components/Header/Header'

import Illustration from '../assets/Images/launch.svg'

export default function Home() {
  return (
    <>
      <title>Bonadio · Aplicativos e sites sob-medida.</title>
      <Header />
      <Flex 
        as="main"
        maxWidth={1280}
        mx="auto"
        px="6"
        h={`calc(100vh - 5rem)`}
        align="center"
        justifyContent="space-between"
      >
       <Flex
        maxWidth={600}
       >
          <Stack spacing={12}>
            <Text
              fontSize="1.5rem"
              fontWeight="700"
              lineHeight="1.5rem"
            >👏  <Text as="span" ml="3">Hey, bem-vindo(a)!</Text></Text>
            <Text 
              fontWeight="900" 
              fontSize="4.5rem" 
              lineHeight="4.5rem"
            >
              Aplicações para <Text as="span" color="cyan">Negócios</Text> de sucesso.
            </Text>
            <Text
              fontSize="1.5rem"
              lineHeight="1.5rem"
              fontWeight="400"
            >
              Oferecemos as melhores e mais modernas soluções para 
              <Text as="span" color="cyan"> seu negócio.</Text>
            </Text>

            <Flex>
              <Button 
                colorScheme="pink"
                size="lg"
                borderRadius={25}
                px="12"
              >
                Quero conhecer
              </Button>
            </Flex>
          </Stack>
       </Flex>
        <Illustration />
      </Flex>

    </>
  )
}
