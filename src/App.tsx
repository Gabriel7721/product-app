import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
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
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea={"main"} bg={"#"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
