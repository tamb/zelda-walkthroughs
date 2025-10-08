import { useState } from 'react';
import { Button, Alert, Modal } from 'react-bootstrap';
import { forceFreshLoad, getServiceWorkerInfo } from '../../utils/cacheUtils';
import { getVersionInfo } from '../../utils/versionUtils';

const CacheRefresh: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [swInfo, setSwInfo] = useState<any>(null);

  const handleRefreshClick = async () => {
    setIsRefreshing(true);
    try {
      await forceFreshLoad();
    } catch (error) {
      console.error('Cache refresh failed:', error);
      setIsRefreshing(false);
    }
  };

  const handleInfoClick = async () => {
    const info = await getServiceWorkerInfo();
    setSwInfo(info);
    setShowModal(true);
  };

  const versionInfo = getVersionInfo();

  return (
    <>
      <div className="cache-refresh-controls d-flex gap-2 align-items-center">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={handleInfoClick}
          disabled={isRefreshing}
        >
          🔧 Cache Info
        </Button>
        <Button
          variant="warning"
          size="sm"
          onClick={handleRefreshClick}
          disabled={isRefreshing}
        >
          {isRefreshing ? '🔄 Refreshing...' : '🔄 Clear Cache'}
        </Button>
        <small className="text-muted">
          v{versionInfo.version}
        </small>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cache & Service Worker Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h6>App Version</h6>
            <p className="mb-0">{versionInfo.display}</p>
          </div>
          
          <div className="mb-3">
            <h6>Service Worker Status</h6>
            {swInfo ? (
              <div>
                <p className="mb-1">
                  <strong>Registered:</strong> {swInfo.registered ? '✅ Yes' : '❌ No'}
                </p>
                <p className="mb-1">
                  <strong>State:</strong> {swInfo.state || 'Unknown'}
                </p>
                <p className="mb-0">
                  <strong>Scope:</strong> {swInfo.scope || 'N/A'}
                </p>
              </div>
            ) : (
              <p className="mb-0">❌ Service Worker not supported</p>
            )}
          </div>

          <Alert variant="info" className="mb-0">
            <h6 className="mb-2">Cache Issues?</h6>
            <p className="mb-2">
              If you're seeing an old version (like alpha.1 instead of alpha.2), 
              try the "Clear Cache" button above.
            </p>
            <p className="mb-0 small">
              This will clear all cached data and force a fresh load of the latest version.
            </p>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CacheRefresh;
