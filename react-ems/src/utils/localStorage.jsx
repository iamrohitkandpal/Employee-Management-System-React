const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Backend API Integration",
        taskDescription: "Connect frontend components with the new backend API.",
        taskDate: "2024-10-15",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Data Migration",
        taskDescription: "Plan and execute data migration for version upgrade.",
        taskDate: "2024-10-17",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Fix bugs reported in the staging environment.",
        taskDate: "2024-10-10",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Presentation",
        taskDescription: "Showcase the new feature enhancements to the client.",
        taskDate: "2024-10-09",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Automated Testing",
        taskDescription: "Set up automated tests for key modules.",
        taskDate: "2024-10-08",
        category: "QA"
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize database queries to enhance performance.",
        taskDate: "2024-10-11",
        category: "Database"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Mockup Designs",
        taskDescription: "Design new mockups for upcoming features.",
        taskDate: "2024-10-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation Update",
        taskDescription: "Update technical documentation for the new release.",
        taskDate: "2024-10-09",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "User Survey Analysis",
        taskDescription: "Analyze feedback from recent user survey.",
        taskDate: "2024-10-07",
        category: "Research"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Review",
        taskDescription: "Analyze performance metrics of the recent deployment.",
        taskDate: "2024-10-13",
        category: "Analysis"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Feature Enhancement Planning",
        taskDescription: "Brainstorm and document ideas for the new product feature.",
        taskDate: "2024-10-14",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Product Testing",
        taskDescription: "Conduct final testing for version 2.1 release.",
        taskDate: "2024-10-09",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Security Check",
        taskDescription: "Verify security patches have been applied to all servers.",
        taskDate: "2024-10-06",
        category: "Security"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Documentation",
        taskDescription: "Document API endpoints for the developer portal.",
        taskDate: "2024-10-11",
        category: "Documentation"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Environment Setup",
        taskDescription: "Prepare the environment for the next release.",
        taskDate: "2024-10-13",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Sprint Planning",
        taskDescription: "Organize tasks for the upcoming sprint.",
        taskDate: "2024-10-09",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription: "Attempted to migrate database to new structure but failed.",
        taskDate: "2024-10-08",
        category: "Database"
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "UX Testing",
        taskDescription: "Test the UX for accessibility and user-friendliness.",
        taskDate: "2024-10-15",
        category: "QA"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prototype Wireframing",
        taskDescription: "Create wireframes for new product prototype.",
        taskDate: "2024-10-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy to Production",
        taskDescription: "Deploy the latest version of the app to production.",
        taskDate: "2024-10-10",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Gather Feedback",
        taskDescription: "Collect feedback from users post-launch.",
        taskDate: "2024-10-12",
        category: "Support"
      }
    ]
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "firstName": "John",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}