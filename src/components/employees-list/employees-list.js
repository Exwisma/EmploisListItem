import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, delate}) => {
 
    const element =  data.map(data => {
        return (
            <EmployeesListItem  
             name={data.name}
             salary={data.salary}
             increase={data.increase} 
             key={data.id}  
             onDelete={() => delate(data.id)} /> 
        )
    })

    return (
        <ul className="app-list list-group">
           {element}
        </ul>
    )
}

export default EmployeesList;