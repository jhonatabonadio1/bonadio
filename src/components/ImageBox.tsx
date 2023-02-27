import {Box, Text, VStack} from '@chakra-ui/react';
import {ReactNode} from 'react';

interface ImageBoxProps {
  title: string;
  description: string;
  image?: ReactNode;
}

export function ImageBox({title, description, image}: ImageBoxProps) {
  return (
    <VStack gap={4} alignItems="flex-start">
      <Box>{image}</Box>
      <Text
        fontWeight="800"
        fontSize="1.8rem"
        lineHeight="1.8rem"
        textAlign="left"
        as="h2">
        {title}
      </Text>
      <Text fontSize="1rem" lineHeight="1rem" fontWeight="400" color="gray.300">
        {description}
      </Text>
    </VStack>
  );
}
