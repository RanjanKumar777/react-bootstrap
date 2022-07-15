import React from 'react';

function InputBox(props) {

    let { label, type, id } = props;

  return (
    <>
        <input
            type={type}
            className="form-control form-control-user"
            id={id}
            placeholder={label}
            {...props}
        />
    </>
  )
}

export default InputBox