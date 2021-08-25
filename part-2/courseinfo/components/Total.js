const Total = ({ parts }) => {
  const total = parts?.reduce((s, p) => s + p.exercises, 0);
  return (
    <div>
      <strong>total of {total} exercises</strong>
    </div>
  );
};

export default Total;
