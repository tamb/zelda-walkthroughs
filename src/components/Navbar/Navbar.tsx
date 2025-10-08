import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';
import {
  forceFreshLoad,
} from '../../utils/cacheUtils';
import { version } from '../../../package.json';

export const Navbar = () => {
  const navbarId = useId();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    try {
      const confirmed = window.confirm(
        'This will clear all cached data and reload the app with the latest version. Continue?'
      );
      if (!confirmed) return;

      setIsRefreshing(true);
      await forceFreshLoad();
    } catch (error) {
      console.error('Failed to refresh app:', error);
      alert('Failed to refresh the app. Please try again.');
      setIsRefreshing(false);
    }
  };

  return (
    <BSNavbar variant="dark" expand="lg" className="mb-4">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          <div className="d-flex flex-column">
            <span className="triforce-accent">Zelda Walkthroughs</span>
            <small className="fs-6">
              {version}
            </small>
          </div>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls={navbarId} />
        <BSNavbar.Collapse id={navbarId}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Item className="d-flex align-items-center">
              <Button
                variant="outline-warning"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="ms-2"
                title="Clear cache and force refresh to latest version"
              >
                {isRefreshing ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-1"
                      aria-hidden="true"
                    ></span>
                    Clearing Cache...
                  </>
                ) : (
                  <>🔄 Clear Cache</>
                )}
              </Button>
            </Nav.Item>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};
