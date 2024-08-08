import React, { useState } from 'react';
import { Card, Collapse, Image, Button, Row, Col } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp, FaTrashAlt, FaEdit } from 'react-icons/fa';

const UserPanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="my-3" style={{ width: '300px' }}>
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <Image
          src="https://via.placeholder.com/40"
          roundedCircle
          style={{ marginRight: '10px' }}
        />
        <span style={{ flexGrow: 1 }}>John Doe</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </Card.Header>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card.Body>
            <Row>
              <Col>
                <strong>Age</strong>
                <p>19 Years</p>
              </Col>
              <Col>
                <strong>Gender</strong>
                <p>Rather not say</p>
              </Col>
              <Col>
                <strong>Country</strong>
                <p>India</p>
              </Col>
            </Row>
            <strong>Description</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante orci,
              congue in libero ut, euismod consequat felis.
            </p>
            <div className="d-flex justify-content-end">
              <Button variant="outline-danger" size="sm" className="me-2">
                <FaTrashAlt />
              </Button>
              <Button variant="outline-primary" size="sm">
                <FaEdit />
              </Button>
            </div>
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default UserPanel;
