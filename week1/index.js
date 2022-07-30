const employees = [
    {
        id: 1234,
        name: 'Mike',
        age: 29,
        title: 'Software Engineer'
    },
    {
        id: 4321,
        name: 'Richa',
        age: 25,
        title: 'Senior Software Engineer'
    },
]

// map, reduce, filter, find, some

// const employeeNamedMike = employees.find((employee) => employee.name == "Mike")

const isThereAMike = employees.some((employee)=> employee.name == 'Mike')

// const firstNames = employees.map((employee) => employee.name)

console.log(isThereAMike)



/**
    * Map returns array
    * reduce -> powerful
    * filter returns array
    * find returns single item
    * some returns find (~)
    * reduce -> recursion
**/
