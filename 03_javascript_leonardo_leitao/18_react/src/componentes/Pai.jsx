import React from "react";
import { childrenWithProps } from "../utils/utils.js";

export default function Pai(props) {
  return (
    <div>
      <h1>
        {props.nome} {props.sobrenome}
      </h1>
      <h2>Filhos</h2>
      <ul>{childrenWithProps(props)}</ul>
    </div>
  );
}
