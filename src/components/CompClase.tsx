import { Component } from "react";

interface Teacher {
  name: string;
  age: number;
  specialization: string;
}

class CompClase extends Component<Teacher> {
  // constructor(props: Teacher) {
  //   super(props)
  // }

  render() {
    return <>
      <h1>{this.props.name}</h1>
      <h2>{this.props.specialization}</h2>
      <h3>{this.props.age}</h3>
    </>
  }
}

export default CompClase