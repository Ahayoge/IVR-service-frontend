import React from "react";

const VariantWord = props => {
  return (
    <div className="variant__wrap flex">
      <p className="variant__word">{props.text}</p>
      <button className="variant__delete" onClick={() => props.delete(props.id)}>X</button>
    </div>
  );
};

export default VariantWord;
