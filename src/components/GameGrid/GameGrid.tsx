import { GameCard, type ZeldaGame } from '../GameCard';

interface GameGridProps {
  games: ZeldaGame[];
}

export const GameGrid = ({ games }: GameGridProps) => {
  return (
    <div className="row g-4">
      {games.map((game) => (
        <div key={`${game.title}-${game.year}`} className="col-md-6 col-lg-4">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
};
