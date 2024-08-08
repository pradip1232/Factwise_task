import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function DeleteConfirmation({ show, onHide, onDelete }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>Delete dialog box</Modal.Title>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onHide}
        />
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
