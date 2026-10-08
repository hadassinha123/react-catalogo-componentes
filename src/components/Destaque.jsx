function Destaque({ titulo, texto }) {
  return (
    <article className="destaque">
      <div className="destaque-icone">✦</div>

      <div>
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </article>
  );
}

export default Destaque;