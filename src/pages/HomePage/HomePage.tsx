import { Container } from 'react-bootstrap';
import { GameGrid } from '../../components/GameGrid';
import { Header } from '../../components/Header';
import { zeldaGames } from '../../data/zeldaGames';

export const HomePage = () => {
  return (
    <Container className="py-4">
      <Header gameCount={zeldaGames.length} />
      <GameGrid games={zeldaGames} />
    </Container>
  );
};
