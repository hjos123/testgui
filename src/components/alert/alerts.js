import React from 'react';

export default function Alerts(props) {

  const hideMessag = () =>{
    props.setMessege({
      text: "",
      type: ""
    });
  }

  if (props.message.text.trim() === '')
    return null;
  else{
    let classname = "alert alert-dismissible fade show mt-3 mb-3 ";
    classname += props.message.type;
    return(
      <React.Fragment>
        <div className={classname} role="alert">
          <strong>Alerta!</strong>
          <p>{props.message.text}</p>
          <button type="button" onClick={() => hideMessag()} className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
