import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import Rodape from "./components/Rodape";

const cursos = [
  {
    id: 1,
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12
  },
  {
    id: 2,
    nome: "Redes de Computadores",
    duracao: "1000 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 8
  },
  {
    id: 3,
    nome: "Manutenção de Computadores",
    duracao: "800 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 5
  },
  {
    id: 4,
    nome: "Programação Web",
    duracao: "600 horas",
    modalidade: "Híbrida",
    nivel: "Profissionalizante",
    vagas: 10
  },
  {
    id: 5,
    nome: "Banco de Dados",
    duracao: "700 horas",
    modalidade: "Presencial",
    nivel: "Profissionalizante",
    vagas: 0
  },
  {
    id: 6,
    nome: "Desenvolvimento Mobile",
    duracao: "900 horas",
    modalidade: "Híbrida",
    nivel: "Profissionalizante",
    vagas: 15
  }
];

function App() {
  return (
    <div className="pagina">
      <Cabecalho />

      <main>
        <section className="secao-cursos">
          <div className="titulo-secao">
            <span>FORMAÇÕES</span>
            <h2>Escolha seu próximo curso</h2>
            <p>
              Encontre uma formação para desenvolver suas habilidades
              na área de tecnologia.
            </p>
          </div>

          <div className="grid-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.id}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section className="secao-destaques">
          <div className="titulo-secao centralizado">
            <span>POR QUE ESTUDAR?</span>
            <h2>Aprenda de um jeito diferente</h2>
          </div>

          <div className="grid-destaques">
            <Destaque
              titulo="Aprenda fazendo"
              texto="Desenvolva projetos durante sua formação e coloque seus conhecimentos em prática."
            />

            <Destaque
              titulo="Prepare-se para o mercado"
              texto="Adquira conhecimentos e habilidades importantes para atuar na área de tecnologia."
            />

            <Destaque
              titulo="Construa seu futuro"
              texto="Transforme seus conhecimentos em novas oportunidades profissionais."
            />
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;