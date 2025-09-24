import type { Game } from "@/hooks/useGames";
import { Button, Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <div>
      <Card.Root>
        <Image
          src={getCropImageUrl(game.background_image)}
          alt="Game Background Image"
        />
        <Card.Body gap="2">
          <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
          <HStack justify={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2">
            $450
          </Text>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid">Buy now</Button>
          <Button variant="ghost">Add to cart</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default GameCards;
