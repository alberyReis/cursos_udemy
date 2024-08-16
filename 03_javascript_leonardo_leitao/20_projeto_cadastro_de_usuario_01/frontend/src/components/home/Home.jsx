import Main from "../template/Main";

export default function Home(props) {
  return (
    <Main
      icon="home"
      title="Inicio"
      subtitle="Segundo Projeto do Capitulo de React."
    >
      <div className="display-4">Bem vindo</div>
      <hr />
      <p className="mb-0">Sistema pra exemplificar a construção de um cadastro desenvolvido em React!</p>
    </Main>
  )
}