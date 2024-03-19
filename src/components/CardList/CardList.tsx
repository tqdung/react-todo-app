import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { TodoCard, TodoItem } from "../TodoCard";

type CardListProps = {
  title: string;
  items?: TodoItem[];
};

export function CardList({ title, items = [] }: CardListProps) {
  const { isOpen, onClose, onToggle } = useDisclosure();

  const addCard = () => {};

  return (
    <Card
      width="280px"
      borderRadius="8px"
      backgroundColor="rgb(241, 242, 244)"
      boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
    >
      <CardHeader padding="8px">
        <Text size="md" fontWeight="bold">
          {title}
        </Text>
      </CardHeader>

      <CardBody display="flex" flexDir="column" gap="8px" px="8px" py="0">
        {items.map((todo) => (
          <TodoCard {...todo} key={todo.id} />
        ))}
        {isOpen && <Textarea placeholder="Enter a title for this card..." />}
      </CardBody>
      <CardFooter padding="8px">
        <Button
          onClick={isOpen ? addCard : onToggle}
          variant={isOpen ? "solid" : "unstyled"}
          colorScheme={isOpen ? "blue" : undefined}
          size="sm"
          px="8px"
          mr="16px"
          leftIcon={<AddIcon />}
        >
          Add a card
        </Button>
        {isOpen && (
          <IconButton
            size="sm"
            aria-label="close"
            icon={<CloseIcon />}
            onClick={onClose}
          />
        )}
      </CardFooter>
    </Card>
  );
}
