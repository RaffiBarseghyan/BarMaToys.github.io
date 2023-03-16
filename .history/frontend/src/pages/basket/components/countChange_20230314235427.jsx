function CountChange() {
  const Greeting = memo(function Greeting({ count, id }) {
    return basket.map((basketItem) => {
      if (id == basketItem.toyId) {
        return count;
      }
    });
  });
}

export default CountChange;
