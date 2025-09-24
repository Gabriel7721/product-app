import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bonglua.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justify={"space-between"} width={"90%"} p={4}>
      <HStack>
        <Image src={logo} alt="Logo" boxSize={"60px"} objectFit={"contain"} />
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Navigation bar
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
