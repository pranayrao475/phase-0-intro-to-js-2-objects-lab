let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}
newEmployee =  updateEmployeeWithKeyAndValue (employee, "streetAddress", "11 Broadway");


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}
employee = destructivelyUpdateEmployeeWithKeyAndValue (employee, "streetAddress", "12 Broadyway")

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee2 = {...employee}
    newEmployee2[key] = undefined;
    return newEmployee2
}

newEmployee2 = deleteFromEmployeeByKey (employee, "name")

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    employee[key] = undefined
    return employee
}

destructivelyDeleteFromEmployeeByKey (employee, "name")

console.log(employee);