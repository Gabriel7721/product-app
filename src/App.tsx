import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";

const App = () => {
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
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
