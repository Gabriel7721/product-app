import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import type { Genre } from "./hooks/useGenres";
import SortSelector from "./components/sortSelector";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    platform: null,
    genre: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem gridArea={"nav"}>
        <NavBar
          searchText={gameQuery.searchText}
          onSearchTextChange={(text) =>
            setGameQuery((q) => ({ ...q, searchText: text }))
          }
        />
      </GridItem>
      <Show when={"lg"}>
        <GridItem gridArea={"aside"} display={{ base: "none", lg: "block" }}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"}>
        <HStack>
          <PlatformSelector
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
