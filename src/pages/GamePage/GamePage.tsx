import { useParams, Link } from 'react-router-dom';
import { Container, Breadcrumb, Card } from 'react-bootstrap';
import { zeldaGames } from '../../data/zeldaGames';
import { Guide } from '../../components/Guide';
import { windWakerGuide } from '../../data/windWakerGuide';

export const GamePage = () => {
  const { gameSlug } = useParams<{ gameSlug: string }>();

  const game = zeldaGames.find(
    (g) => g.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === gameSlug,
  );

  if (!game) {
    return (
      <Container className="py-4">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Game Not Found</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Game Not Found</h1>
        <p>The game you're looking for doesn't exist.</p>
      </Container>
    );
  }

  // Check if this is Wind Waker and we have a guide for it
  const isWindWaker = game.title.toLowerCase().includes('wind waker');

  if (isWindWaker) {
    return (
      <>
        <Container className="py-4">
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{game.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        <Guide gameTitle={game.title} sections={windWakerGuide} />
      </>
    );
  }

  return (
    <Container className="py-4">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{game.title}</Breadcrumb.Item>
      </Breadcrumb>

      <Card>
        <Card.Header>{game.title}</Card.Header>
        <Card.Body>
          <p className="text-muted">Coming soon...</p>
        </Card.Body>
      </Card>
    </Container>
  );
};
