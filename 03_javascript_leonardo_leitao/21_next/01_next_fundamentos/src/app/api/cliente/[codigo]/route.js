import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.codigo

  return NextResponse.json({
    id: id,
    nome: 'Albery',
    idade: 36,
    email: 'albery.reis.88@gmail.com',
  })
}