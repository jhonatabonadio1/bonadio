import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {Header} from '../components/Header/Header';
import {ImageBox} from '../components/ImageBox';

import Illustration from '../assets/Images/launch.svg';
import Baratao from '../assets/Images/baratao.png';

import Laptop from '../assets/Images/laptop.svg';
import Browser from '../assets/Images/browser.svg';
import LaptopChat from '../assets/Images/laptop-chat.svg';
import Mobile from '../assets/Images/mobile-device.svg';

import {CounterBox} from '../components/CounterBox';

export default function Home() {
  return (
    <>
      <title>Bonadio · Desenvolvimento de aplicativos profissionais</title>
      <Header />
      <Box as="main">
        <Flex
          as="section"
          h={`calc(100vh - 5rem)`}
          align="center"
          maxWidth={1280}
          px="6"
          mx="auto"
          justifyContent="space-between">
          <Flex maxWidth={600}>
            <Stack spacing={12}>
              <Text
                fontSize="1.5rem"
                fontWeight="700"
                lineHeight="1.5rem"
                as="h2">
                👏{' '}
                <Text as="span" ml="3">
                  Hey, bem-vindo(a)!
                </Text>
              </Text>
              <Text
                fontWeight="900"
                fontSize="4.2rem"
                lineHeight="4.2rem"
                as="h1">
                Desenvolvimento de aplicativos para{' '}
                <Text as="span" color="cyan">
                  Negócios
                </Text>{' '}
                de sucesso.
              </Text>
              <Text
                fontSize="1.5rem"
                lineHeight="1.5rem"
                fontWeight="400"
                as="h2">
                Oferecemos as melhores e mais modernas soluções para
                <Text as="span" color="cyan">
                  {' '}
                  seu negócio.
                </Text>
              </Text>

              <Flex>
                <Button
                  colorScheme="pink"
                  bgColor="pink.500"
                  size="lg"
                  borderRadius={25}
                  px="12">
                  Quero conhecer
                </Button>
              </Flex>
            </Stack>
          </Flex>
          <Illustration />
        </Flex>

        <Box
          as="section"
          py="6rem"
          bgColor="gray.1000"
          borderColor="gray.600"
          borderTopWidth={1}>
          <Flex
            maxWidth={1280}
            px="6"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mx="auto">
            <Text
              w={600}
              textAlign="center"
              fontSize="2.6rem"
              lineHeight="2.6rem"
              fontWeight="600"
              mb="6rem"
              as="h1">
              Somos especialistas em desenvolvimento de software
            </Text>

            <SimpleGrid gap="4rem" justifyContent="space-between" columns={3}>
              <ImageBox
                title="Aplicativos"
                description="Desenvolvimento de aplicativos avançados para iOS e Android."
                image={<Mobile />}
              />
              <ImageBox
                title="Sistemas"
                description="Desenvolvimento de sistemas para empresas, lojas ou negócios online."
                image={<Browser />}
              />
              <ImageBox
                title="Suporte"
                description="Manutenção e configuração de sistemas já prontos, com relatório detalhado."
                image={<LaptopChat />}
              />
              <ImageBox
                title="Suporte"
                description="Manutenção e configuração de sistemas já prontos, com relatório detalhado."
                image={<LaptopChat />}
              />
              <ImageBox
                title="Sistemas"
                description="Desenvolvimento de sistemas para empresas, lojas ou negócios online."
                image={<Browser />}
              />
              <ImageBox
                title="Aplicativos"
                description="Desenvolvimento de aplicativos avançados para iOS e Android."
                image={<Mobile />}
              />
            </SimpleGrid>
          </Flex>
        </Box>

        <Box
          as="section"
          py="6rem"
          bgColor="gray.900"
          borderColor="gray.600"
          borderTopWidth={1}>
          <Flex maxWidth={1280} px="6" flexDirection="column" mx="auto">
            <Flex justifyContent="space-between" alignItems="center" mb="6rem">
              <Text
                w={600}
                textAlign="left"
                fontSize="2.6rem"
                lineHeight="2.6rem"
                fontWeight="600"
                as="h1">
                Nós criamos aplicativos de sucesso
              </Text>
              <Text
                fontSize="4xl"
                fontWeight="700"
                letterSpacing="tight"
                w="64">
                bonadio
                <Text as="span" color="pink.500">
                  .
                </Text>
              </Text>
            </Flex>

            <SimpleGrid gap="4rem" justifyContent="space-between" columns={4}>
              <CounterBox
                count={40}
                title="Usuários conectados simultaneamente em nossos aplicativos."
                prefix="+"
                suffix="mil"
              />
              <CounterBox
                count={10}
                title="Transações realizadas por aplicativos e sistemas."
                prefix="+R$"
                suffix="mi"
              />
              <CounterBox
                count={102}
                title="Downloads de aplicativos nas lojas."
                prefix="+"
                suffix="mil"
              />
              <CounterBox
                count={2}
                title="Downloads diários de aplicativos nas lojas."
                prefix="+"
                suffix="mil"
              />
            </SimpleGrid>
          </Flex>
        </Box>

        <Flex
          as="section"
          py="6rem"
          bgColor="gray.1000"
          borderColor="gray.600"
          borderTopWidth={1}
          flexDir="column"
          align="center">
          <Text
            w={600}
            textAlign="center"
            fontSize="2.6rem"
            lineHeight="2.6rem"
            fontWeight="600"
            as="h1">
            Cases de sucesso
          </Text>

          <Flex
            h={`calc(100vh - 5rem)`}
            align="center"
            maxWidth={1280}
            px="6"
            mx="auto"
            gap={4}
            justifyContent="space-between"></Flex>
        </Flex>

        <Box
          as="section"
          py="6rem"
          bgColor="gray.900"
          borderColor="gray.600"
          borderTopWidth={1}>
          <Flex maxWidth={1280} px="6" flexDirection="column" mx="auto">
            <Flex justifyContent="space-between" alignItems="center" mb="6rem">
              <Text
                w={600}
                textAlign="left"
                fontSize="2.6rem"
                lineHeight="2.6rem"
                fontWeight="600"
                as="h1">
                Sobre a Bonadio
              </Text>
              <Text
                fontSize="4xl"
                fontWeight="700"
                letterSpacing="tight"
                w="64">
                bonadio
                <Text as="span" color="pink.500">
                  .
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Flex
          as="section"
          py="6rem"
          bgColor="gray.1000"
          borderColor="gray.600"
          borderTopWidth={1}
          flexDir="column"
          align="center">
          <Text
            w={600}
            textAlign="center"
            fontSize="2.6rem"
            lineHeight="2.6rem"
            fontWeight="600"
            as="h1">
            Quanto custa meu aplicativo?
          </Text>

          <Flex
            h={`calc(100vh - 5rem)`}
            align="center"
            maxWidth={1280}
            px="6"
            mx="auto"
            gap={4}
            justifyContent="space-between"></Flex>
        </Flex>

        <Box
          as="section"
          py="6rem"
          bgColor="gray.900"
          borderColor="gray.600"
          borderTopWidth={1}>
          <Flex maxWidth={1280} px="6" flexDirection="column" mx="auto">
            <Flex justifyContent="space-between" alignItems="center" mb="6rem">
              <Text
                w={600}
                textAlign="left"
                fontSize="2.6rem"
                lineHeight="2.6rem"
                fontWeight="600"
                as="h1">
                Fale com um especialista
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
