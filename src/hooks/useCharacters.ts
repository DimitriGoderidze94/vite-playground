import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

type Character = {
  id: string;
  name: string;
  image: string;
};

type CharactersQueryResult = {
  characters: {
    results: Character[];
  };
};

export const useCharacters = () => {
    const { error, loading, data } =
    useQuery<CharactersQueryResult>(GET_CHARACTERS);

    return { 
        error, 
        loading,
        data
     }
}

 