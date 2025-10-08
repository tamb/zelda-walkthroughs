import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
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
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt so it can only be used once
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

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
            variant="success"
            size="sm"
            onClick={handleInstallClick}
          >
            Install
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
