import React from  "react"
import ReactDOM from "react-dom"
// component file
import TodoContainer from "./components/TodoContainer"
import "./app.css"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <TodoContainer />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  )