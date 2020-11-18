const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
];
//第一題
function countEmployeesNumberByFactory(factories) {
  const result = factories.map(factory => ({
    name: factory.name,
    count: factory.employees.length
  }))
  return result
}
countEmployeesNumberByFactory(factories)

// 第二題
function countFactoriesNumberByEmployee(factories) {
  const employeeArray = []
  const result = []
  factories.forEach(factory => {
    factory.employees.forEach(employee => {
      if (!employeeArray.includes(employee)) {
        employeeArray.push(employee)
        result.push({ employee: employee, count: 1 })
      } else {
        result.forEach(array => {
          if (array.employee === employee) {
            array.count += 1
          }
        })
      }
    })
  })
  return result
}
countFactoriesNumberByEmployee(factories)

// 第三題
function alphabeticalOrder(factories) {
  factories.forEach(factory => {
    factory.employees = factory.employees.sort()
  })
  return factories
}
alphabeticalOrder(factories)