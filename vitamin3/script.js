/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("open");

    if (sidebarIsOpen) {
      // Close the sidebar
      sidebar.classList.remove("open")
      sidebarButton.textContent = "›"
      
    } else {
      // Open the sidebar
      sidebar.classList.add("open")
      sidebarButton.textContent = "‹"
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  if (taskName != null) {
    addTodoButton.addEventListener("click", (event) => {
      const taskText = taskName.value.trim();
    
    if (taskText) {
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
      todoListUl.append(newTask);
      taskName.value = null;
    }
    });
  }
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    if (firstName && lastName) {
      message.textContent = `Hello ${firstName} ${lastName}!`
    }
    else if (firstName) {
      message.textContent = `Hello ${firstName}!`;
    }
    else if (lastName) {
      message.textContent = `Hello ${lastName}!`
    }
    else {
      message.textContent = "Type your name to see a message!"
    }
  };
  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);
};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
