# React Portfolio
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 

## User Story

AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

## Description React + JavaScript + Vite 
My task is to create a portfolio using my new React skills, which will help set me apart from other developers whose portfolios don’t use the latest technologies. The README includes sections for Description, Installation, Usage, License, Contributing, Tests, and Questions.

## Table of Contents

-Description     
-Installation      
-Usage        
-License      
-Contributing       
-Tests         
-Questions

## Installation
To install and run this application locally, please follow these steps:

Clone the repository via SSH:

`git clone git@github.com:elele20005/React-Portfolio.git`
       
   Navigate to the Project Directory


 command: cd React-Portfolio
 
Install Dependencies    
run `npm create vite`.     
second list of options sellect `JavaScript`       
sellect `React`, `TypeScript`.       
command: cd `React-Portfolio` and run ` npm install`           
Run `npm dev/npm run dev` and navigate to the prompted URL to see your app.

**Further customization**   

*Navigate to your `package.json` and modify the scripts object so that it looks like this example*     
`"scripts": {`      
` "dev": "vite",`      
` "start": "vite",`      
`"build": "vite build",`      
` "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",`       
`  "preview": "vite preview"`      
` },`

 *Navigate to the `vite.config.js` file and edit the export object so that it looks like this example*:     
 `export default defineConfig({`        
 `plugins: [react()],`      
 `server: {`       
 `port: 3000,`       
 `open: true`       
 ` }`       
 `})`


## Usage
`Vite` is use to build your portfolio, which will include the following:


A single `Header` component that appears on multiple pages


A single `Navigation` component within the header that will use Link components from `react-router-dom` to conditionally render the different sections of your portfolio


A single `Project` component that will be used multiple times in the Portfolio section


A single `Footer` component that appears on multiple pages

To start the application, run:

command: `npm run dev`

## License
This project is licensed under the MIT License and Apache 2.0

## Contribution
Contributions are welcome! Please feel free to submit pull requests.

## Tests
To test the application, run the React + Vite and verify that outputs match expected results based on various inputs


## Additional Requirements
This Challenge combines many of the skills covered so far. In addition to the user story and acceptance criteria, we've provided some guidelines to help get started. Your application should use Vite for building your Portfolio. The application will be invoked by using the following command:

command: `npm run build` 

**This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules**

## For more questions, please reach out to:
 
- GitHub: https://github.com/elele20005
- Email: ralphconsultant1@gmail.com
