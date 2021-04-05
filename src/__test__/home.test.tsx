import ReactDom from "react-dom"
import Home from "../pages/home"

test("renders without crashing" , () => {
    const div = document.createElement("div")
    ReactDom.render(<Home />, div)
})