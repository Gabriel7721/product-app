import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 60 ? "yellow" : "purple";


  return (
    <Badge
      colorPalette={color}
      variant={"surface"}
      size={"md"}
      // padding ngang (padding bên trái & phải).
      px={3}
      borderRadius={"6px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
