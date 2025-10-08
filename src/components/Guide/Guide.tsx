import { useState } from 'react';
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Badge,
  Button,
  Accordion,
} from 'react-bootstrap';

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
  const [checkedSections, setCheckedSections] = useState<Set<string>>(
    new Set(),
  );

  const toggleSection = (sectionId: string) => {
    const newChecked = new Set(checkedSections);
    if (newChecked.has(sectionId)) {
      newChecked.delete(sectionId);
    } else {
      newChecked.add(sectionId);
    }
    setCheckedSections(newChecked);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              <Button
                variant="link"
                className="p-0 text-start fw-bold"
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </Button>
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
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 text-start text-muted"
                      onClick={() => scrollToSection(subsection.id)}
                    >
                      {subsection.title}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </Card.Body>
    </Card>
  );

  const renderHeading = (title: string, id: string, level: number) => {
    const headingLevel = Math.min(level + 1, 6);
    const className = 'mb-0';

    switch (headingLevel) {
      case 2:
        return (
          <h2 id={id} className={className}>
            {title}
          </h2>
        );
      case 3:
        return (
          <h3 id={id} className={className}>
            {title}
          </h3>
        );
      case 4:
        return (
          <h4 id={id} className={className}>
            {title}
          </h4>
        );
      case 5:
        return (
          <h5 id={id} className={className}>
            {title}
          </h5>
        );
      case 6:
        return (
          <h6 id={id} className={className}>
            {title}
          </h6>
        );
      default:
        return (
          <h2 id={id} className={className}>
            {title}
          </h2>
        );
    }
  };

  const renderSection = (section: GuideSection, level: number = 1) => {
    return (
      <div key={section.id} className="mb-4">
        <Card>
          <Card.Header>
            <div className="d-flex align-items-center">
              <Form.Check
                type="checkbox"
                id={`section-${section.id}`}
                checked={checkedSections.has(section.id)}
                onChange={() => toggleSection(section.id)}
                className="me-3"
              />
              {renderHeading(section.title, section.id, level)}
              {checkedSections.has(section.id) && (
                <Badge bg="success" className="ms-auto">
                  ✓ Complete
                </Badge>
              )}
            </div>
          </Card.Header>
          {section.content && (
            <Card.Body>
              <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                {section.content}
              </div>
            </Card.Body>
          )}
          {section.subsections && (
            <div className="mx-3 mb-3">
              <Accordion>
                {section.subsections.map((subsection, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
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
                        <span className="flex-grow-1">{subsection.title}</span>
                        {checkedSections.has(subsection.id) && (
                          <Badge bg="success" className="ms-2">
                            ✓
                          </Badge>
                        )}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body id={subsection.id}>
                      <div
                        style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}
                      >
                        {subsection.content}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          )}
        </Card>
      </div>
    );
  };

  return (
    <div className="guide-content">
      <Container className="py-4">
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
          <Col lg={9}>{sections.map((section) => renderSection(section))}</Col>
        </Row>
      </Container>
    </div>
  );
};
