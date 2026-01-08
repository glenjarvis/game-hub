import { List, ListItem, Image, HStack, Text, Spinner } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import { getCroppedImageURL } from "../services/image-urls";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
