import { useState, useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showManualInstructions, setShowManualInstructions] = useState(false);

  useEffect(() => {
    // Check if already installed
    const checkIfInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
        return true;
      }
      return false;
    };

    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('beforeinstallprompt event fired');
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      setIsInstalled(true);
    };

    // Check if already installed
    if (!checkIfInstalled()) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);
    }

    // Show manual instructions after a delay if no prompt appears
    const timer = setTimeout(() => {
      if (!deferredPrompt && !isInstalled) {
        setShowManualInstructions(true);
      }
    }, 10000); // Show after 10 seconds

    return () => {
      clearTimeout(timer);
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [deferredPrompt, isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      // Show the install prompt
      await deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setShowInstallPrompt(false);
        setDeferredPrompt(null);
      } else {
        console.log('User dismissed the install prompt');
        setShowManualInstructions(true);
      }
    } catch (error) {
      console.error('Install prompt failed:', error);
      setShowManualInstructions(true);
    }

    // Clear the deferredPrompt so it can only be used once
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleManualInstall = () => {
    setShowManualInstructions(true);
    setShowInstallPrompt(false);
  };

  if (isInstalled) {
    return null;
  }

  if (showManualInstructions) {
    const isBrave = navigator.userAgent.includes('Brave');
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    return (
      <div className="install-prompt position-fixed bottom-0 start-0 end-0 p-3 bg-dark text-light">
        <Alert variant="info" className="mb-3">
          <h6 className="mb-2">
            {isBrave ? '🦁 Install in Brave Browser' : isMobile ? '📱 Install on Mobile' : '💻 Install on Desktop'}
          </h6>
          {isBrave ? (
            <ol className="mb-0 small">
              <li>
                Click the <strong>Brave menu</strong> (three horizontal lines) in the top-right
              </li>
              <li>
                Go to <strong>"More Tools"</strong> → <strong>"Create Shortcut"</strong>
              </li>
              <li>
                Check <strong>"Open as window"</strong> option
              </li>
              <li>
                Click <strong>"Create"</strong> to install
              </li>
            </ol>
          ) : isMobile ? (
            <ol className="mb-0 small">
              <li>
                Tap the <strong>three dots menu</strong> (⋮) in your browser
              </li>
              <li>
                Select <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong>
              </li>
              <li>
                Tap <strong>"Add"</strong> to confirm
              </li>
            </ol>
          ) : (
            <ol className="mb-0 small">
              <li>
                Click the <strong>three dots menu</strong> (⋮) in your browser
              </li>
              <li>
                Look for <strong>"Install Zelda Walkthroughs"</strong> or <strong>"Create shortcut"</strong>
              </li>
              <li>
                Click to install the app
              </li>
            </ol>
          )}
        </Alert>
        <div className="d-flex gap-2">
          <Button
            variant="outline-light"
            size="sm"
            onClick={() => setShowManualInstructions(false)}
          >
            Close
          </Button>
        </div>
      </div>
    );
  }

  if (!showInstallPrompt) {
    return null;
  }

  return (
    <div className="install-prompt position-fixed bottom-0 start-0 end-0 p-3 bg-dark text-light">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h6 className="mb-1">Install Zelda Walkthroughs</h6>
          <small className="text-muted">Get quick access to your guides</small>
        </div>
        <div className="d-flex gap-2">
          <Button
            variant="outline-light"
            size="sm"
            onClick={() => setShowInstallPrompt(false)}
          >
            Not now
          </Button>
          <Button
            variant="outline-light"
            size="sm"
            onClick={handleManualInstall}
          >
            Manual
          </Button>
          <Button variant="success" size="sm" onClick={handleInstallClick}>
            Install
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;