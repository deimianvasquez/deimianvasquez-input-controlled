import React from "react";

const Message = ({ msg, style }) => {
    return (
        <div className={`col-12 col-md-7 mt-4 alert ${style}`}>
            No se permiten valores vacíos
        </div>
    )
}

export default Message