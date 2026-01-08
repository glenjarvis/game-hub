import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: 'fr',
        'lg': '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
        <Text>NavBar</Text>
      </GridItem>
      <GridItem area="aside" padding={5} display={{ base: "none", lg: "block" }}>
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
