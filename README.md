# Accordion Component

A React-based Accordion component that loads data dynamically and features expandable/collapsible sections. Styled with custom CSS for a responsive design.

## Features

- Dynamic data loading from `data.json`
- Expandable/collapsible items and sub-items
- Responsive design

## Project Structure

``` bash
accordion-component/
├── public/
│ ├── index.html
│ ├── data.json
├── src/
│ ├── components/
│ │ ├── Accordion.js
│ │ ├── AccordionItem.js
│ ├── App.js
│ ├── index.js
│ ├── index.css
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hasantohidul/accordion.git
    cd accordion-component
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Project

Start the development server:

```bash
npm start
# or
yarn start
```
- Open http://localhost:3000 to view in the browser.

### Building for Productin
Create a production build:
```bash
npm run build
```
## License
- This project is licensed under the MIT License