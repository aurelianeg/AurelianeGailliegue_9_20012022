# Billed

Billed[^1] is an application to manage bills for employees and administrators.

**Goal of this project**: Debugging, and test writing (unit, integration and E2E tests).


## Load specifications

### Features

A bill feature has been developed to allow bill treatment from employees to admin.

- Login as an employee:
    * After being logged in on Login page, the employee arrives on the list of bills which were already sent, with their status. The employee can see the proof or download the PDF for each bill.
    * If "New bill" is clicked, a new bill can be created with new informations. If "Submit" button is clicked, the bill is sent to HR admins.
    * The employee stays connected if he/she clicks on previous page.
    * The employee is sent to Login page if the "Log out" button is clicked.
- Login as an admin:
    * After being logged in on Login page, the admin arrives on the dashboard. On the left, all employee bills are grouped by their status (pending; accepted, refused). The admin can see the proof or download the PDF for each bill.
    * If a pending bill is clicked, the admin can accept or refuse the bill.
    * If a treated bill is clicked, the admin can see bill informations.
    * The admin stays connected if he/she clicks on previous page.
    * The admin is sent to Login page if the "Log out" button is clicked.


The report with previous bug reports and hunts, and with tests to do is available [here](https://www.notion.so/a7a612fc166747e78d95aa38106a55ec?v=2a8d3553379c4366b6f66490ab8f0b90).

On this front-end repository:
- Admin route had now been debugged.
- Employee route has now been tested and debugged.


## Installation and launch

### Back-end

The back-end repository is available [here](https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-back).

1. Clone the repository

```sh
git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Back.git
```

2. Install project dependencies

```sh
npm install
```

3. Launch API

```sh
npm run run:dev
```

The API is locally available on port 5678, you can go to <http://localhost:5678>.

### Front-end

1. Clone the repository

```sh
git clone https://github.com/aurelianeg/billed.git
```

2. Install dependencies

```sh
npm install
```

3. Install live-server

```sh
npm install -g live-server
```

4. Launch the project with Live Server

```sh
live-server
```

Then go to <http://127.0.0.1:8080/>. The page will reload when changes are made in the code.

### Accounts and users

Here are the default user accounts that can be used to try connections:

#### Admin

```
User : admin@test.tld 
Password : admin
```

#### Employee

```
User : employee@test.tld
Password : employee
```


## Tests

### Local tests launch with Jest

```sh
$ npm run test
```

### Unique test launch

Install `jest-cli`

```sh
npm i -g jest-cli
jest src/__tests__/your_test_file.js
```

### Test coverage

You can go to `http://127.0.0.1:8080/coverage/lcov-report/` to see test coverage.

[^1]: This is the 6th project of the "Front-end developer (JS - React)" training by OpenClassrooms.