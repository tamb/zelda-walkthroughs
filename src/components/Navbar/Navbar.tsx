import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';
import {
  clearAppCache,
  confirmCacheRefresh,
  isPWA,
} from '../../utils/cacheUtils';
import { getVersionInfo } from '../../utils/versionUtils';

export const Navbar = () => {
  const navbarId = useId();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const versionInfo = getVersionInfo();

  const handleRefresh = async () => {
    try {
      const confirmed = await confirmCacheRefresh();
      if (!confirmed) return;

      setIsRefreshing(true);
      await clearAppCache();
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
          <small className="text-muted ms-1">{versionInfo.display}</small>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls={navbarId} />
        <BSNavbar.Collapse id={navbarId}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#games">Games</Nav.Link>
            <Nav.Link href="#guides">Guides</Nav.Link>
            {isPWA() && (
              <Nav.Item className="d-flex align-items-center">
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="ms-2"
                  title="Refresh app and download updates"
                >
                  {isRefreshing ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-1"
                        aria-hidden="true"
                      ></span>
                      Refreshing...
                    </>
                  ) : (
                    <>🔄 Refresh</>
                  )}
                </Button>
              </Nav.Item>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};
