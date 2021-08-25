import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ courses }) => {


  return (
    <div>
      {courses?.map((el, i) => {
        console.log('daja incoming',el)
        return (
          <div>
            <Header text={el.name} />
             <Content parts={el.parts} /> 
            <Total parts={el.parts} /> 
          </div>
        );
      })}
    </div>
  );
};

export default Course;
