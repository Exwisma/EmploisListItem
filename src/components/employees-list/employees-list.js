import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
 
    const element =  data.map(data => {
        return (
            <EmployeesListItem name={data.name} salary={data.salary} increase={data.increase}/> 
        )
    })

    return (
        <ul className="app-list list-group">
           {element}
        </ul>
    )
}

export default EmployeesList;