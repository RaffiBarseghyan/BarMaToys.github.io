import React from "react";
import CategoryCard from "./CategoryCard";
import style from "./category.module.scss";

function CategoryList({ filteredPersons }) {
  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/files`).then((res) => {
      const persons = res.data;
      setFile(persons.file);
    });
  }, []);
  const filtered = filteredPersons.map((person) => (
    <CategoryCard key={person.id} person={person} />
  ));
  return (
    <div
      className={`d-flex flex-wrap align-items-center justify-content-around container ${style.CategoryListbg}`}
    >
      {filtered}
    </div>
  );
}

export default CategoryList;
