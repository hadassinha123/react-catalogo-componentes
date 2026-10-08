function CardCurso({
  nome,
  duracao,
  modalidade,
  nivel,
  vagas
}) {
  return (
    <article className="card-curso">
      <div className="card-topo">
        <span className="card-categoria">CURSO</span>
        <span className="card-icone">✦</span>
      </div>

      <h2>{nome}</h2>

      <div className="informacoes-curso">
        <div className="informacao">
          <span className="rotulo">Duração</span>
          <strong>{duracao}</strong>
        </div>

        <div className="informacao">
          <span className="rotulo">Modalidade</span>
          <strong>{modalidade}</strong>
        </div>

        <div className="informacao">
          <span className="rotulo">Nível</span>
          <strong>{nivel}</strong>
        </div>
      </div>

      <div className="vagas">
        {vagas > 0
          ? `Vagas disponíveis: ${vagas}`
          : "Turma completa"}
      </div>
    </article>
  );
}

export default CardCurso;