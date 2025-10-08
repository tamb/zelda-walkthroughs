import { Container, Card, Alert } from 'react-bootstrap';

const AboutPage: React.FC = () => {
  return (
    <Container className="py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Card className="zelda-card">
            <Card.Header className="zelda-header">
              <h2 className="mb-0">About Zelda Walkthroughs</h2>
            </Card.Header>
            <Card.Body>
              <Alert variant="info" className="mb-4">
                <h5 className="alert-heading">📜 Disclaimer</h5>
                <p className="mb-0">
                  I do not own this content. I love The Legend of Zelda games and this project is not for profit.
                </p>
              </Alert>
              
              <div className="mb-4">
                <h4>🎮 About This Project</h4>
                <p>
                  This is a fan-made collection of walkthroughs and guides for The Legend of Zelda games. 
                  Created with love for the Zelda community and to help fellow adventurers on their quests.
                </p>
              </div>

              <div className="mb-4">
                <h4>⚔️ What You'll Find</h4>
                <ul>
                  <li>Interactive walkthroughs for various Zelda games</li>
                  <li>Step-by-step guides for dungeons and quests</li>
                  <li>Tips and tricks for completing your adventure</li>
                  <li>Mobile-friendly PWA for easy access on any device</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4>🏆 Current Games</h4>
                <ul>
                  <li>The Legend of Zelda: The Wind Waker</li>
                  <li>More games coming soon...</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4>💚 Made With Love</h4>
                <p>
                  This project is created by a passionate Zelda fan for the community. 
                  All content is used under fair use for educational and entertainment purposes.
                  If you are the original creator of the guide and would like me to remove it, please contact me.
                  tsapdeveloper@gmail.com
                </p>
                <p className="mb-0">
                  <strong>Not affiliated with Nintendo.</strong> The Legend of Zelda is a trademark of Nintendo.
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
