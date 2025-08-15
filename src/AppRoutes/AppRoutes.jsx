import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import SignIn from "../Pages/SignIn";
import Register from "../AuthenTicate/Register";



function AppRoutes({greet,tasks,markInProgress,markCompleted}){
    return (
        <Routes>
            <Route path="/" element={<Home greet={greet} tasks={tasks} markInProgress={markInProgress} markCompleted={markCompleted}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="register" element={<Register />} />
        </Routes>
    );
}
export default AppRoutes;