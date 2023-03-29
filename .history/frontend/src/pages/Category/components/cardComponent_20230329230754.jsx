


function CardComponent() {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
    >
      <div className="d-flex align-items-center">
        {file.map((items) => {
          if (items.prodId == person.id && x == 0) {
            x++;
            return (
              <div key={items.id}>
                <Link
                  className={`navbar-brand ${style.linkStyle}`}
                  to={`/toy/${person.id}`}
                  state={{ from: person.id }}
                >
                  <div
                    className={`${style.box} container`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                      bgPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </Link>
              </div>
            );
          }
        })}
      </div>

      <Link
        className={`navbar-brand ${style.linkStyle}`}
        to={`/toy/${person.id}`}
        state={{ from: person.id }}
      >
        <h2 className={style.boxH2}>{person.name}</h2>
        <p className={style.boxP}>
          {person.price}
          {t("taradram")}
        </p>
      </Link>
    </div>
  );
}

export default CardComponent;
