function add(a, b) {
  // intentional bug: off-by-one
  return a + b + 1;
}

function Sum({ a, b }) {
  return (
    <p>
      {a} + {b} = {add(a, b)}
    </p>
  );
}

export default Sum;
