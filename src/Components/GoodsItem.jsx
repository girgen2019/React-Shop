/** @format */

function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;
  console.log(id);
  console.log(name);
  return (
    <>
      <div className="card" id={id}>
        <div className="card-image">
          <img src={full_background} alt={name} />
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className="btn">купить</button>
          <span className="right" style={{ fontSize: '1.8rem' }}>
            {price} руб.
          </span>
        </div>
      </div>
    </>
  );
}
export { GoodsItem };
