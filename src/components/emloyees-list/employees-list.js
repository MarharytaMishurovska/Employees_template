import EmployeesListItem from "../emloyees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            // <EmployeesListItem name={item.name} salary={item.salary} /> два варіанти запису
            <EmployeesListItem {...item}/> // spread operator
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;