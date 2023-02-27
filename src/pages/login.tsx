import {Button, Flex, Stack, Link, Text} from '@chakra-ui/react';
import {EmailIcon, LockIcon} from '@chakra-ui/icons';
import {Input} from '../components/Form/Input';

export default function Login() {
  return (
    <>
      <title>Login | Bonadio</title>
      <Flex
        w="100vw"
        h="100vh"
        flexDir="column"
        align="center"
        justify="center">
        <Text fontSize="5xl" fontWeight="700" letterSpacing="tight" mb="3">
          bonadio
          <Text as="span" color="pink.500">
            .
          </Text>
        </Text>
        <Flex
          as="form"
          w="100%"
          maxWidth="360"
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          action="/panel/dashboard">
          <Stack>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              size="lg"
              icon={<EmailIcon color="gray.700" />}
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              size="lg"
              icon={<LockIcon color="gray.700" />}
            />
            <Flex>
              <Link
                color="pink.500"
                fontWeight="700"
                colorScheme="purple"
                _hover={{
                  textDecor: 'none',
                  color: 'pink.600',
                }}>
                Esqueci minha senha
              </Link>
            </Flex>
          </Stack>
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
