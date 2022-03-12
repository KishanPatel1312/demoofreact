
import React from 'react';
import ReactDOM from 'react-dom';
import pt from 'props-type';

class Employee extends React.Component {
  render(){
  return <div>
    <h1>Hello Employee</h1>
    <h1>Employee Name : {this.props.name}</h1>
    <h1>Employee ID : {this.props.empid}</h1>
  </div>
}
}

Employee.propTypes = {
  name:pt.string.isRequired,
  empid:pt.number.isRequired,
}

ReactDOM.render(<Employee name="kishan" empid={2324}/>,document.getElementById("root"));


