import type { Genre } from "@/hooks/useGenres";
import useGenres from "@/hooks/useGenres";
import getCropImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {data.map((g) => (
          <List.Item key={g.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCropImageUrl(g.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontSize={"md"}
                variant={"subtle"}
                fontWeight={g.id === selectedGenre?.id ? "extrabold" : "normal"}
                onClick={() => onSelectedGenre(g)}>
                {g.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
