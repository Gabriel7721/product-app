import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import type { Genre } from "./hooks/useGenres";

export interface GameQuery {
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem gridArea={"nav"} bg={"#"}>
        <NavBar />
      </GridItem>
      <Show when={"lg"}>
        <GridItem
          gridArea={"aside"}
          bg={"#"}
          display={{ base: "none", lg: "block" }}>
          <GenreList
            onSelectedGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"} bg={"#"}>
        <PlatformSelector
          onSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
