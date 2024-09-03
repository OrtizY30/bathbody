const Card = ({ handledModal, perfume, handledProduct }) => {
  const { name, ml, tipo, img } = perfume;

  
  return (
    <>
      <div
        className="card"
        onClick={() => {
          handledModal();
          handledProduct(perfume);
        }}
      >
        <div>
          {img ? (
            <img src={`img/${img}.jpg`} alt="" width={300} height={300} />
          ) : (
            <img src="img/beach.jpg" alt="" width={300} />
          )}
        </div>

        <div className="name">
          <p>{name}</p>
          <span>{tipo}</span>
          <p className="ml">{ml}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
