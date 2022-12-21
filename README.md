# Exercise IOET
## Description
Determine how often employees coincide in the office given the schedule they worked.

**Input:** A *.txt* file with tuples containing the employee's name and their schedule.
**Input .txt example:**
```
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
```

**Output:** Table with pairs of employees and how often they have coincided in the office.
**Output example:**
```
RENE-ASTRID: 2
RENE-ANDRES: 2
ASTRID-ANDRES: 3
```

## Solution Overview
The solution was implemented with ***Node.js*** and ***Typescript***.
The project has a *main* function in ***app.ts*** that runs when the program starts and executes the following steps:
1. Read and format the data from the input file.
1. Iterate over the tuples to compare all employee's schedules
    1. Find common days between employees
    1. Count how many times they have coincided
    1. Calculate the time they have coincided
1. Output the result in console
## Architecture
This project is a console application developed with ***Node.js***

## How to run
### Requirements
- Node >=16.13.0
- npm 8.0.0
### Steps to run
- **Install dependencies** `npm install`
- **Run project**
    - `npm start` to run the project using the default data file (data/input.txt)
    - `npm start -- [dataFilePath]` to run the project using a custom data file (e.g. `npm start -- C:/Users/andres/Downloads/input2.txt`)
- **Run tests** `npm test`
