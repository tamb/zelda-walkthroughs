import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';
import {
  forceFreshLoad,
  getServiceWorkerInfo,
} from '../../utils/cacheUtils';
import { getVersionInfo } from '../../utils/versionUtils';

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
        <BSNavbar.Brand as={Link} to="/" className="triforce-accent">
          Zelda Walkthroughs
          <small className="text-muted ms-1">{getVersionInfo().display}</small>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls={navbarId} />
        <BSNavbar.Collapse id={navbarId}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#games">Games</Nav.Link>
            <Nav.Link href="#guides">Guides</Nav.Link>
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
