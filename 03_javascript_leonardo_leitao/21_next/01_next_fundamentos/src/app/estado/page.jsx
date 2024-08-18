"use client"

import Layout from "@/components/Layoult";
import { useState } from "react";

export default function Estado() {
  const [numero, setNumero] = useState(0)

  function incrementar() {
    setNumero(numero + 1)
  }

  return (
    <Layout titulo='Componente com estado'>
      <div style={{ fontSize: '25px' }}>{numero}</div>
      <button onClick={incrementar} style={{ color: 'black', padding: '10px', marginTop: '10px', fontSize: '20px' }}>Incrementar</button>
    </Layout>
  )
}