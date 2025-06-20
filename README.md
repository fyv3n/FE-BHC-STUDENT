# FE-BHC-STUDENT

A modern Angular-based student dashboard for Bataan Heroes College.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Data Source](#data-source)
6. [Component Details](#component-details)
    - [Class Dashboard](#class-dashboard)
    - [Course Dashboard](#course-dashboard)
    - [Class Schedule](#class-schedule)
    - [Faculty Evaluation](#faculty-evaluation)
    - [To-Do List](#to-do-list)
    - [Login](#login)
7. [Technologies Used](#technologies-used)
8. [License](#license)

---

## Overview
A student dashboard web app for BHC, featuring class management, activity tracking, and faculty evaluation, built with Angular and modern UI principles.

## Features
- Responsive sidebar navigation
- Activities grouped by subject
- Faculty evaluation forms
- Activity details and submission
- Modern UI with custom icons

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm start
   ```
3. **Open in browser:**
   Visit `http://localhost:4200`

## Project Structure
```
angular.json
package.json
src/
  index.html
  main.ts
  styles.css
  app/
    ...components...
  assets/
    ...icons, images, etc...
```

## Data Source
All data is provided by mock data components for demonstration purposes, but the structure is ready for integration with real backend APIs.

- **Class Dashboard:** Class data from `MockdataComponent`.
- **Course Dashboard:** Class info, activities, resources, students, and teacher from `MockdataComponent`.
- **Class Schedule:** Schedule from `classList` in mock data.
- **Faculty Evaluation:** Faculty from `facultyList` in mock data; evaluation form is static.
- **To-Do List:** Activities from mock data, grouped by subject.
- **Login:** No backend authentication; navigation only.

## Component Details

### Class Dashboard
Provides an overview of all enrolled subjects as cards. Features search, quick navigation, and a responsive grid. Example subjects: CS Thesis Writing (LAB), Math 101, Physics 201, English Literature, History 101.

### Course Dashboard
A subject-specific hub with three tabs:
- **Class Feed:** Announcements, posts, and discussions.
- **Activities/Resources:** List of activities and resources for the subject.
- **Student List:** Professor and enrolled students.

### Class Schedule
Weekly timetable view. Each day shows scheduled classes with subject, time, and room. If no class, a message is shown.

### Faculty Evaluation
Students select a faculty member to evaluate, then fill out a form with ratings and open feedback. All questions are required. Data is static for demo.

### To-Do List
Activities grouped by subject, showing title, due date, score, status, and navigation to details. All activities are under "CS Thesis Writing (LAB)" for showcase.

### Login
Two-panel layout with college branding and a login form. Password visibility toggle. No real authentication; login navigates to dashboard.

## Technologies Used
- Angular
- TypeScript
- SCSS/CSS

## License
MIT

#

# FEBHCSTUDENT

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
