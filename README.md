                                                                       📝 To-Do List Manager



Project Overview

The To-Do List Manager is a full-featured task management application that allows users to add, edit, delete, and mark tasks as complete. Each task includes a priority level (High, Medium, Low), a deadline date, and is stored in Local Storage, ensuring that tasks persist even after a page reload. The project is built with HTML, CSS, and JavaScript, focusing on DOM manipulation, localStorage handling, and providing a smooth UI/UX experience.

✨ Feature List


✅ Core Features:


   Add Task

   Input field for Task Title.

   Dropdown for selecting Task Priority (High, Medium, Low).

   Date Picker for setting the Deadline.

  "Add Task" Button to insert the task into the list.

Display Tasks

  Tasks are displayed as cards or a list.

  Each task shows:

  Title

  Priority (color-coded):

  High = Red

  Medium = Orange

  Low = Green

  Deadline (with due date)

  Status: Pending or Completed

  Mark as Completed

  Checkbox or Toggle to mark a task as Completed.

  Completed tasks are styled with strikethrough or faded effect.

  Edit Task

  Update Task Title, Priority, and Deadline.

  Delete Task

  Remove tasks permanently with a Delete button.

  Local Storage Integration

  All tasks are saved in localStorage.

  Tasks remain available after browser reload.

🌟 Advanced Features (Optional):
   
   ✔️ Filter Tasks

       Filter tasks by Status (All, Pending, Completed) or Priority.

✔️ Highlight Overdue Tasks

       Tasks past their deadline are highlighted in red.

✔️ Countdown for Deadlines

       Tasks nearing deadline display a "Due in X days" notice.

✔️ Dark/Light Theme Toggle

       Users can switch between Dark Mode and Light Mode.

✔️ Sorting Functionality

      Sort tasks by Deadline Date or Priority Level for better organization.


💻 How to Run Locally

     Clone or Download the Repository:

     bash

     Copy

     Edit

     git clone https://github.com/yourusername/todo-list-manager.git

     cd todo-list-manager
     
Open index.html in Your Web Browser:

Simply double-click index.html file, or

Open index.html with your preferred browser via right-click "Open With".

✅ No additional dependencies or installations required.

✅ Works entirely offline (thanks to Local Storage).

📦 Tech Stack

HTML: Structure and elements

CSS: Styling, responsive layout, color-coding, and themes

JavaScript: Core logic, task CRUD operations, localStorage management, deadline handling, filtering, sorting

🎨 UI/UX Guidelines Followed

Responsive Design: Works perfectly on desktop, tablet, and mobile screens.

Priority Color Coding:

High Priority: 🔴 Red

Medium Priority: 🟠 Orange

Low Priority: 🟢 Green

Overdue Highlighting: Tasks past deadline are automatically shown in red.

Completed Tasks: Shown with strikethrough or opacity.

Dark/Light Mode toggle for user comfort.

🔥 Advanced Features Added

✔️ Dark/Light Theme Toggle

✔️ Task Filtering (Status and Priority)

✔️ Overdue Task Highlighting

✔️ Deadline Countdown Display

✔️ Task Sorting by Priority/Deadline
