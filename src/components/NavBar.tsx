import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bonglua.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  searchText: string;
  onSearchTextChange: (text: string) => void;
}

const NavBar = ({ searchText, onSearchTextChange }: Props) => {
  return (
    <HStack justify="space-between" width="90%" p={4}>
      <HStack flex="1" gap={4}>
        <Image src={logo} alt="Logo" boxSize="60px" objectFit="contain" />
        <Text fontSize="xl" fontWeight="bold">
          Navigation bar
        </Text>
        <SearchInput
          value={searchText}
          onChange={onSearchTextChange} 
        />
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
