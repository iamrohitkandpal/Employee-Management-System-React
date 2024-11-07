const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 1",
        taskDescription: "Complete the monthly report",
        taskDate: "2024-10-29",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Task 2",
        taskDescription: "Attend team meeting",
        taskDate: "2024-10-25",
        category: "Meetings",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task 3",
        taskDescription: "Prepare project proposal",
        taskDate: "2024-11-02",
        category: "Planning",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 1",
        taskDescription: "Update client data",
        taskDate: "2024-10-28",
        category: "Data Entry",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task 2",
        taskDescription: "Organize files",
        taskDate: "2024-10-30",
        category: "Administration",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 1",
        taskDescription: "Draft email to stakeholders",
        taskDate: "2024-10-29",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Task 2",
        taskDescription: "Prepare for presentation",
        taskDate: "2024-10-26",
        category: "Preparation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Task 3",
        taskDescription: "Fix server issues",
        taskDate: "2024-10-27",
        category: "IT Support",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task 1",
        taskDescription: "Conduct performance reviews",
        taskDate: "2024-10-30",
        category: "HR",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 2",
        taskDescription: "Prepare training materials",
        taskDate: "2024-11-01",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Task 3",
        taskDescription: "Submit budget request",
        taskDate: "2024-10-28",
        category: "Finance",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Task 1",
        taskDescription: "Compile research data",
        taskDate: "2024-10-26",
        category: "Research",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 2",
        taskDescription: "Analyze survey results",
        taskDate: "2024-11-02",
        category: "Data Analysis",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Task 3",
        taskDescription: "Update project timeline",
        taskDate: "2024-10-29",
        category: "Project Management",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  
  // localStorage.getItem("admin", JSON.stringify(admin));
}