import { useId } from 'react';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { useProgressPersistence } from '../../hooks/useProgressPersistence';

export interface GuideSection {
  id: string;
  title: string;
  content: string;
  subsections?: GuideSection[];
}

interface GuideProps {
  gameTitle: string;
  sections: GuideSection[];
}

export const Guide = ({ gameTitle, sections }: GuideProps) => {
  const {
    checkedSections,
    toggleSection,
    clearProgress,
    downloadProgress,
    uploadProgress,
    isLoading,
  } = useProgressPersistence(gameTitle);
  const uploadInputId = useId();

  const handleClearProgress = () => {
    const confirmed = window.confirm(
      `Are you sure you want to clear all progress for ${gameTitle}? This action cannot be undone.`,
    );

    if (confirmed) {
      clearProgress();
    }
  };

  const handleUploadProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadProgress(file).then((success) => {
        if (success) {
          alert('Progress uploaded successfully!');
        } else {
          alert('Failed to upload progress. Please check the file format.');
        }
      });
      // Reset the input so the same file can be selected again
      event.target.value = '';
    }
  };

  const getProgressPercentage = () => {
    let totalSections = 0;
    let checkedCount = 0;

    const countSections = (sectionList: GuideSection[]) => {
      for (const section of sectionList) {
        totalSections++;
        if (checkedSections.has(section.id)) {
          checkedCount++;
        }
        if (section.subsections) {
          countSections(section.subsections);
        }
      }
    };

    countSections(sections);
    return totalSections > 0
      ? Math.round((checkedCount / totalSections) * 100)
      : 0;
  };

  const renderTableOfContents = () => (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <span>Table of Contents</span>
        <div>
          <Badge bg="secondary" className="me-2">
            {sections.length.toString()} sections
          </Badge>
          <Badge bg="primary">
            {getProgressPercentage().toString()}% complete
          </Badge>
        </div>
      </Card.Header>
      <Card.Body>
        {sections.map((section) => (
          <div key={section.id} className="mb-2">
            <div className="d-flex align-items-center">
              <Form.Check
                type="checkbox"
                id={`toc-${section.id}`}
                checked={checkedSections.has(section.id)}
                onChange={() => toggleSection(section.id)}
                className="me-2"
              />
              <span className="fw-bold">{section.title}</span>
            </div>
            {section.subsections && (
              <div className="ms-4 mt-1">
                {section.subsections.map((subsection) => (
                  <div
                    key={subsection.id}
                    className="d-flex align-items-center mb-1"
                  >
                    <Form.Check
                      type="checkbox"
                      id={`toc-${subsection.id}`}
                      checked={checkedSections.has(subsection.id)}
                      onChange={() => toggleSection(subsection.id)}
                      className="me-2"
                    />
                    <span className="text-muted">{subsection.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </Card.Body>
    </Card>
  );

  const renderSection = (section: GuideSection) => {
    return (
      <div key={section.id} className="mb-4">
        <Card>
          <Accordion>
            <Accordion.Item eventKey={section.id}>
              <Accordion.Header>
                <div className="d-flex align-items-center w-100 me-3">
                  <Form.Check
                    type="checkbox"
                    id={`section-${section.id}`}
                    checked={checkedSections.has(section.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleSection(section.id);
                    }}
                    className="me-3"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="flex-grow-1">{section.title}</span>
                  {checkedSections.has(section.id) && (
                    <Badge bg="success" className="ms-2">
                      ✓ Complete
                    </Badge>
                  )}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {section.content && (
                  <div className="mb-3">
                    <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                      {section.content}
                    </div>
                  </div>
                )}
                {section.subsections && (
                  <div>
                    <Accordion>
                      {section.subsections.map((subsection, index) => (
                        <Accordion.Item
                          eventKey={`${section.id}-${index}`}
                          key={subsection.id}
                        >
                          <Accordion.Header>
                            <div className="d-flex align-items-center w-100 me-3">
                              <Form.Check
                                type="checkbox"
                                id={`subsection-${subsection.id}`}
                                checked={checkedSections.has(subsection.id)}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  toggleSection(subsection.id);
                                }}
                                className="me-3"
                                onClick={(e) => e.stopPropagation()}
                              />
                              <span className="flex-grow-1">
                                {subsection.title}
                              </span>
                              {checkedSections.has(subsection.id) && (
                                <Badge bg="success" className="ms-2">
                                  ✓
                                </Badge>
                              )}
                            </div>
                          </Accordion.Header>
                          <Accordion.Body id={subsection.id}>
                            <div
                              style={{
                                whiteSpace: 'pre-wrap',
                                lineHeight: '1.6',
                              }}
                            >
                              {subsection.content}
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="guide-content">
        <Container className="py-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '200px' }}
          >
            <div className="text-center">
              <div className="spinner-border text-primary">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2 text-muted">Loading your progress...</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="guide-content">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="triforce-accent mb-0">{gameTitle} Walkthrough</h1>
          <Badge bg="primary" className="fs-6">
            Progress: {getProgressPercentage().toString()}%
          </Badge>
        </div>

        <Row>
          <Col lg={3}>
            <div style={{ position: 'sticky', top: '20px' }}>
              {renderTableOfContents()}
            </div>
          </Col>
          <Col lg={9}>
            {sections.map((section) => renderSection(section))}

            {/* Progress Management Buttons */}
            <div className="mt-5 pt-4 border-top">
              <div className="text-center">
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                  {/* Download Progress Button */}
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={downloadProgress}
                    className="px-4"
                  >
                    📥 Download Progress
                  </Button>

                  {/* Upload Progress Button */}
                  <div>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleUploadProgress}
                      style={{ display: 'none' }}
                      id={uploadInputId}
                    />
                    <Button
                      variant="outline-success"
                      size="lg"
                      onClick={() =>
                        document.getElementById(uploadInputId)?.click()
                      }
                      className="px-4"
                    >
                      📤 Upload Progress
                    </Button>
                  </div>

                  {/* Clear Progress Button */}
                  <Button
                    variant="outline-danger"
                    size="lg"
                    onClick={handleClearProgress}
                    className="px-4"
                  >
                    🗑️ Clear Progress
                  </Button>
                </div>
                <p className="text-muted text-light mt-3 mb-0">
                  Download your progress as a backup, upload a previous save, or
                  reset everything
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
