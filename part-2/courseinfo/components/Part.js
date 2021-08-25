const Part = ({ parts }) => {
  return (
    <div>
      {parts?.map((el, i) => {
        return (
          <li>
            {el.name} {el.exercises}
          </li>
        );
      })}
    </div>
  );
};

export default Part;
