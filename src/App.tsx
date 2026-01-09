import { useState } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

import { Genre } from "./hooks/useGenres";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
        <Text>NavBar</Text>
      </GridItem>
      <GridItem
        area="aside"
        padding={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector
        selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => {
            setSelectedPlatform(platform);
          }}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
