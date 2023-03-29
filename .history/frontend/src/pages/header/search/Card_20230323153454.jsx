import React, { useEffect } from "react";

function Card({ person }) {
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 d-flex justify-content-between"
      style={{ width: "400px", height: "100px" }}
    >
      <div className="d-flex">
        <img
          className="br-100 h3 w3 dib"
          alt={person.name}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s"
        />
        {file.map((items) => {
          if (items.prodId == item.id && x == 0) {
            x++;

            return (
              <>
                <Link
                  className={`navbar-brand ${style.linkStyle}`}
                  to="/toy"
                  state={{ from: item.id }}
                >
                  <div
                    key={item.id}
                    className={`${style.box} container`}
                    style={{
                      backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                    }}
                  ></div>
                </Link>
                <AddBasket
                  id={item.id}
                  name={item.name}
                  color={item.color}
                  item={item.item}
                  goal1={item.goal1}
                  goal2={item.goal2}
                  goal3={item.goal3}
                  goal4={item.goal4}
                  goal5={item.goal5}
                  goal6={item.goal6}
                  goal7={item.goal7}
                  agemin={item.agemin}
                  agemax={item.agemax}
                  price={item.price}
                  description={item.description}
                  prodId={items.prodId}
                  image={items.image}
                  file={file}
                />
              </>
            );
          }
        })}
        <div>
          <h2>{person.name}</h2>
          <p>{person.description}</p>
        </div>
      </div>
      <div>{person.price}$</div>
    </div>
  );
}

export default Card;
