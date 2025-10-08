import { Container } from 'react-bootstrap';
import { GameGrid } from '../../components/GameGrid';
import { Header } from '../../components/Header';
import { zeldaGames } from '../../data/zeldaGames';

export const HomePage = () => {
  return (
    <Container>
      <Header gameCount={zeldaGames.length} />
      <GameGrid games={zeldaGames} />
    </Container>
  );
};
