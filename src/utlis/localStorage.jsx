
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create wireframe for the new homepage layout",
        date: "2025-06-24",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve alignment issues in mobile view",
        date: "2025-06-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Prepare Report",
        description: "Generate weekly performance report",
        date: "2025-06-22",
        category: "Management"
      }
    ]
  },
  {
    id: 2,
    firstName: "Meera",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Backup",
        description: "Take full backup of project database",
        date: "2025-06-24",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Meeting",
        description: "Discuss requirements with the client",
        date: "2025-06-21",
        category: "Communication"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement Login API",
        description: "Create secure login endpoint",
        date: "2025-06-24",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review pull request #27",
        date: "2025-06-23",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy App",
        description: "Deployment failed on staging environment",
        date: "2025-06-20",
        category: "DevOps"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Add tests for authentication module",
        date: "2025-06-25",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Docs",
        description: "Revise technical documentation",
        date: "2025-06-23",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Security Audit",
        description: "Perform security check on backend",
        date: "2025-06-20",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Feature Demo",
        description: "Client rejected proposed feature design",
        date: "2025-06-22",
        category: "Presentation"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
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
        title: "UX Survey",
        description: "Collect user feedback on new feature",
        date: "2025-06-24",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API Integration",
        description: "Integrate Stripe API",
        date: "2025-06-21",
        category: "Integration"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Test Android Build",
        description: "App crashes on login screen",
        date: "2025-06-22",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social Media Post",
        description: "Design banner for product launch",
        date: "2025-06-25",
        category: "Marketing"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const  setLocalStorage =()=>{
    localStorage.setItem('employees' , JSON.stringify(employees))
    localStorage.setItem('admin' , JSON.stringify(admin))
}
export const  getLocalStorage =()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))

   return{employees , admin}
}