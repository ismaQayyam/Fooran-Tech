const CardItem = ({ heading, text }) => {
  return (
    <article className="card">
      <h3>{heading}</h3>
      <p>{text}</p>
    </article>
  );
};

export default CardItem;
