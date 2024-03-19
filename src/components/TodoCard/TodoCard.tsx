import { Box, Text } from "@chakra-ui/react";

export type TodoItem = {
  id: string;
  title: string;
};

export function TodoCard({ title }: TodoItem) {
  return (
    <Box
      cursor="pointer"
      p="8px"
      borderRadius="8px"
      bg="white"
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31)"
    >
      <Text size="sm">{title}</Text>
    </Box>
  );
}
