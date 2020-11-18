const employeeType = [
  { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
  { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
  { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];
const employees = [
  { id: 1, name: "Alice", type: 2 },
  { id: 2, name: "Bob", type: 3 },
  { id: 3, name: "John", type: 2 },
  { id: 4, name: "Karen", type: 1 },
  { id: 5, name: "Miles", type: 3 },
  { id: 6, name: "Henry", type: 1 }
];
const tasks = [
  { id: 1, title: "task01", duration: 60 },
  { id: 2, title: "task02", duration: 120 },
  { id: 3, title: "task03", duration: 180 },
  { id: 4, title: "task04", duration: 360 },
  { id: 5, title: "task05", duration: 30 },
  { id: 6, title: "task06", duration: 220 },
  { id: 7, title: "task07", duration: 640 },
  { id: 8, title: "task08", duration: 250 },
  { id: 9, title: "task09", duration: 119 },
  { id: 10, title: "task10", duration: 560 },
  { id: 11, title: "task11", duration: 340 },
  { id: 12, title: "task12", duration: 45 },
  { id: 13, title: "task13", duration: 86 },
  { id: 14, title: "task14", duration: 480 },
  { id: 15, title: "task15", duration: 900 }
];

// 第四題
function totalHours(employees, employeeType) {
  let hours = 0
  employees.forEach(employee => {
    employeeType.forEach(type => {
      if (employee.type === type.id) {
        if (type.work_end === "00:00:00") {
          type.work_end = "24:00:00"
        }
        hours += Number(type.work_end.slice(0, 2)) - Number(type.work_begin.slice(0, 2))
      }
    })
  })
  return hours
}
totalHours(employees, employeeType)

//第五題
function howManyEmployeeByTime(time) {
  time = Number(time.replace(/:/g, ""))
  let employeeCount = 0
  employees.forEach(employee => {
    employeeType.forEach(type => {
      if (employee.type === type.id) {
        if (type.work_end === "00:00:00") {
          type.work_end = "24:00:00"
        }
        const work_begin = Number(type.work_begin.replace(/:/g, ""))
        const work_end = Number(type.work_end.replace(/:/g, ""))
        if (time > work_begin && time < work_end) {
          employeeCount += 1
        }
      }
    })
  })
  return employeeCount
}
howManyEmployeeByTime("11:11:11")

//第六題
function totalDays() {
  let totalTimes = 0
  tasks.forEach(task => {
    totalTimes += task.duration
  })
  return Math.ceil(totalTimes / 60 / totalHours(employees, employeeType))
}
totalDays()