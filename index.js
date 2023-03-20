let employee = {
    name: "Sara",
    streetAddress: "Gaziantep, Turkey",
  };
  

 function updateEmployeeWithKeyAndValue(employee, key, value){
    const changedEmployee = { ...employee };
    changedEmployee[key] = value;
  return changedEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
   return employee;

  }
  function deleteFromEmployeeByKey(employee, key){

    let changedEmployee = { ...employee };
    delete changedEmployee[key];
    return changedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee;
  }