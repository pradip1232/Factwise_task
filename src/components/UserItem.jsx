import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown } from "react-icons/fa";
import EditableAccordions from "./EditableAccordions";
import DeleteConfirmation from "./DeleteConfirmation";

export default function UserItem({ user, onDelete }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(false);
    onDelete(user.id);
  };

  return (
    <div className="card3 mb-3">
      
      <EditableAccordions user={user} />
      
      <DeleteConfirmation
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}
