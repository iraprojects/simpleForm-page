interface Student {
  name: string;
  enrollment: string;
  career?: string; // opcional, operador optional
  age: number;
}

const CompFuncional: React.FC<Student> = (props) =>  {
  return (
    <>
      <h1> {props.name} </h1>
      <h2>{props.enrollment}</h2>
      <h3>{props.career}</h3>
      <h4>is {props.age} years old</h4>

    </>
  )
}

export default CompFuncional 
