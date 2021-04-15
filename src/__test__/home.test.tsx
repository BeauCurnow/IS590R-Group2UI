import ReactDom from "react-dom"
import Home from "../pages/home"
import { BrowserRouter as Router } from "react-router-dom"

test("renders without crashing" , () => {
    const div = document.createElement("div")
    ReactDom.render(<Router><Home /></Router>, div)
})