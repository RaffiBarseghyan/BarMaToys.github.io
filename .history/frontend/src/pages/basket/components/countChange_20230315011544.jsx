function CountChange(item) {
    const [count, setCount] = useState();

    console.log(item);

    const countChange = (evt) => {
        // console.log(evt.target.accessKey);
        setCount((evt.target.accessKey = evt.target.value));
      };
  return (
    <>
      <input
        type="number"
        min={1}
        max={100}
        className={`form-control ${style.cradlesBox}`}
        defaultValue={item.count}
        onWheel={(e) => e.target.blur()}
        accessKey={item.id}
        onChange={countChange}
      />
    </>
  );
}

export default CountChange;
