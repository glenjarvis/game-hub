import { useState } from "react";
// CHAKRA_V3_FIX: Commented out all Chakra imports
import { Grid, GridItem, HStack, Box } from "@chakra-ui/react";

// CHAKRA_V3_FIX: All component imports disabled
// import NavBar from "./components/NavBar";
// import GameGrid from "./components/GameGrid";
// import GameHeading from "./components/GameHeading";
// import GenreList from "./components/GenreList";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

import NavBar from "./components/NavBar";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem
        area="aside"
        padding={5}
        display={{ base: "none", lg: "block" }}
      >
        {/* CHAKRA_V3_FIX: GenreList disabled */}
        {/*
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        {/* CHAKRA_V3_FIX: Box, GameHeading, HStack, PlatformSelector, SortSelector, GameGrid disabled */}
        {/*
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            />

            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
        */}
      </GridItem>
    </Grid>
  );
}

export default App;
