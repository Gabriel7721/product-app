import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo3Ds } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo3Ds,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack>
      {platforms
        .filter((p) => iconMap[p.slug])
        .map((p) => (
          <Icon key={p.id} as={iconMap[p.slug]} />
        ))}
    </HStack>
  );
};

export default PlatformIconList;
