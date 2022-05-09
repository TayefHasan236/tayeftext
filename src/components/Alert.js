import  React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div class={`alert alert-${props.alert.typ}`}role="alert">
        <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert;