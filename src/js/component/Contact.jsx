import React from "react";

const Contact = ({ contact, handleDelete, index }) => {
    return (
        <div
            className="border border-danger my-contact"
            onClick={() => handleDelete(index)}
        >
            <p>Lastname: {contact.lastname}</p>
            <p>E-mail: {contact.email}</p>
        </div>
    )
}

export default Contact