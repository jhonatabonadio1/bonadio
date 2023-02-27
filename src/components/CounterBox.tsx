import {Box, Text, VStack} from '@chakra-ui/react';
import {ReactNode} from 'react';
import CountUp from 'react-countup';

interface CounterBoxProps {
  title: string;
  count: number;
  prefix?: string;
  suffix: string;
}

export function CounterBox({title, suffix, prefix, count}: CounterBoxProps) {
  return (
    <VStack gap={2} alignItems="flex-start">
      <Box width="100%">
        <Text
          fontWeight="800"
          fontSize="3.5rem"
          lineHeight="3.5rem"
          textAlign="left"
          as="h2"
          color="cyan">
          <CountUp prefix={prefix} start={0} end={count} delay={1} />

          <Text color="white" as="span">
            {' ' + suffix}
          </Text>
        </Text>
        <Box
          as="div"
          width="100%"
          my={4}
          height="3px"
          backgroundImage="linear-gradient(90deg, rgb(213, 63, 140), rgba(213, 63, 140, 0.25))"
        />
      </Box>

      <Text
        fontSize="1.2rem"
        lineHeight="1.2rem"
        fontWeight="400"
        color="gray.300">
        {title}
      </Text>
    </VStack>
  );
}
