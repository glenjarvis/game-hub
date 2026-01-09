import {
  List,
  ListItem,
  Image,
  HStack,
  Button,
  Spinner,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageURL } from "../services/image-urls";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              borderRadius={8}
              boxSize={8}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
