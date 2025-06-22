import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExtandableText from "../components/ExtandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshot from "../components/GameScreenshot";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExtandableText>{game.description_raw}</ExtandableText>{" "}
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id}></GameTrailer>
        <GameScreenshot gameId={game.id}></GameScreenshot>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
