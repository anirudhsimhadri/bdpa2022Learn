const employees = [
  {
    name: 'Doug',
    age: 27,
    title: 'Engineer',
  },
  {
    name: 'Kate',
    age: 41,
    title: 'Engineer',
  },
  {
    name: 'Jacob',
    age: 19,
    title: 'Designer',
  },
  {
    name: 'Brittany',
    age: 26,
    title: 'Product Manager',
  },
]

/**
// reduce (this example -> average)
const averageAge = employees.reduce((acc, employee) => {
  return acc+employee.age
}, 0) / employees.length


const titleDistribution = employees.reduce((acc, employee) => {
  const title = employee.title
  const prevNumWithTitle = acc[title] ?? 0
  
  
  return {
    ...acc,
    [title]: prevNumWithTitle + 1
  }
}, {})
**/

/**
const initialArray = [ 1, 2, 3, 4 ]

const newArray = [ ...initialArray, 5, 6, 7 ]

console.log(newArrayArray)
**/

//const initialObj = {
//  name: 'Mike',
//  age: 27
//}
//const newObj = {
//  name: 'Mike',
//  title: 'Engineer',
//  age:29
//}
  
// const employeeAges = employees.reduce((acc, employee) => [ ...acc, employee.age ], [])

// console.log(averageAge)

const myFunction = () => {
  

  return () => console.log('Hello')
}

console.log(myFunction()())


// every
// const all18 = employees.every(employee => employee.age >= 18)
// console.log(all18)


// sort
// const employeesByAge = employees.sort((a, b) => {
  // return b.age - a.age
// })
// console.log(employeesByAge)



