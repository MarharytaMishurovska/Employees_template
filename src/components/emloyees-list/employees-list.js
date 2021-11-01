import EmployeesListItem from "../emloyees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Harry P." salary={800}/>
            <EmployeesListItem name="Anabel S." salary={3000}/>
            <EmployeesListItem name="George N." salary={550}/>
        </ul>
    )
}

export default EmployeesList;