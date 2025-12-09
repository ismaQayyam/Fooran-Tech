import CardItem from "../Components/CardItem";

const SectionBlock = ({ theme, title, cards }) => {
  return (
    <section className={`hero ${theme}`}>
      
      <div className="section-title-wrapper">
        <img
          src="/Image/dot.png"
          alt="decorative"
          className="section-background-image"
        />
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="cards-row">
        {cards.map((c, i) => (
          <CardItem key={i} heading={c.heading} text={c.text} />
        ))}
      </div>

    </section>
  );
};

export default SectionBlock;
