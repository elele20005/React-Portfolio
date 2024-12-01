# React-Portfolio
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
## User Story
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

## Description: Vite+React
My task is to create a portfolio using my new React skills, which will help set me apart from other developers whose portfolios don’t use the latest technologies.
This application will be deployed to Netlify. My React portfolio is crafted to highlight my skills and experience. It adopts a basic design, featuring neutral tones for a sleek and professional appearance. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Clone the repository using the SSH:

git clone git@github.com:`elele20005/React-Portfolio.git`

Navigate to the desired parent folder and run `npm create vite`.

You do not need to perform a `mkdir` command to create one manually.

From the first list of options, select your framework; we'll be using `React`.

From the second list of options, select your variant; we'll be using `JavaScript`.

cd into your newly created project folder and run `npm install`.

In later activities we'll add additional NPM packages to our vite apps such as `bootstrap`, `dotenv`, and `axios`.

Run `npm dev/npm run dev` and navigate to the prompted URL to see your app.

## Usage
The React Portfolio is meant to provide a personal overview of my work, including "About Me", "Portfolio", "Contact", and "Resume" section. It can be shared with potential employers, collaborators, or as an online resume.

## License
This project is licensed under the MIT license and Apache 2.0. See the LICENSE file for details.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Contribution
This portfolio is a personal project, and contributions are not required.  Suggestions for improvements are always welcome. Feel free to reach out via email.

## Tests
No formal tests are available for this project, but users can verify functionality by opening the page in multiple browsers to ensure accurate funtionality.

## Further customization
Navigate to the `package.json` and modify the scripts object so that it looks like this example:

  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },


Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:       

`export default defineConfig({     
  plugins: [react()],       
   server: {        
    port: 3000,        
    open: true     
    }         
})
`

## Portfolio Sample

Mock Up appearance and functionality: https://git.bootcampcontent.com/University-of-Minnesota/UofM-VIRT-FSF-PT-08-2024-U-LOLC/-/raw/main/12-React/02-Challenge/Assets/20-react-homework-demo-01.gif

## Questions
For more questions, please reach out to:
- GitHub: https://github.com/elele20005
- Email: ralphconsultant1@gmail.com
