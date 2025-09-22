import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bonglua.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Logo" boxSize={"60px"} objectFit={"contain"} />
      <Text>Navigation bar</Text>
    </HStack>
  );
};

export default NavBar;
