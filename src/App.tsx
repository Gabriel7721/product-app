import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
          bg={"gold"}
          display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea={"main"} bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
