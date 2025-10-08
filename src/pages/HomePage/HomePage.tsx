import { Container } from 'react-bootstrap';
import { Header } from '../../components/Header';
import { GameGrid } from '../../components/GameGrid';
import { zeldaGames } from '../../data/zeldaGames';

export const HomePage = () => {
  return (
    <Container className="py-4">
      <Header gameCount={zeldaGames.length} />
      <GameGrid games={zeldaGames} />
    </Container>
  );
};
