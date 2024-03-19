import { ChakraProvider, Container, List, ListItem } from "@chakra-ui/react";
import { CardList } from "./components/CardList";
import { useApplicationStore } from "./store/useApplicationStore";

function App() {
  const { todo_list, progress_list, testing_list, done_list } = useApplicationStore();

  return (
    <ChakraProvider>
      <Container p="16px">
        <List display="flex" gap="10px">
          <ListItem>
            <CardList title="TODO" items={todo_list}/>
          </ListItem>
          <ListItem>
            <CardList title="IN PROGRESS" items={progress_list}/>
          </ListItem>
          <ListItem>
            <CardList title="READY FOR TEST" items={testing_list}/>
          </ListItem>
          <ListItem>
            <CardList title="DONE" items={done_list} />
          </ListItem>
        </List>
      </Container>
    </ChakraProvider>
  );
}

export default App;
