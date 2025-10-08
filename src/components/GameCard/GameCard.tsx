import { Link } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';
import { createGameSlug } from '../../utils/gameUtils';

export interface ZeldaGame {
  title: string;
  subtitle: string;
  description: string;
  platform: string;
  year: string;
  category: string;
}

interface GameCardProps {
  game: ZeldaGame;
}

export const GameCard = ({ game }: GameCardProps) => {
  const gameSlug = createGameSlug(game.title);

  return (
    <Card className="h-100">
      <Card.Header>{game.title}</Card.Header>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{game.subtitle}</Card.Title>
        <Card.Text className="flex-grow-1">{game.description}</Card.Text>
        <div className="mb-3">
          <Badge bg="primary" className="me-2">
            {game.platform}
          </Badge>
          <Badge bg="secondary" className="me-2">
            {game.category}
          </Badge>
          <Badge bg="dark">{game.year}</Badge>
        </div>
        <div>
          <Button
            as={Link}
            to={`/game/${gameSlug}`}
            variant="primary"
            size="sm"
          >
            View Guide
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
