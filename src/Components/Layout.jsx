import NavItem from "./NavItem"
import Footer from "./Footer"
function Layout(){
    return(
        <>
                <div className="bg-gray-100 shadow-md">
                    <ul className="flex  bg-white p-4 text-black">
                        <div className="ml-10">
                            <li className="toUppercase font-bold text-xl">
                                <NavItem path="" name="TaskManager"/>
                            </li>
                        </div>
                        <div className="flex space-x-4 mx-auto mt-2">
                            <li>
                                <NavItem path="/" name="Home" />
                            </li>
                            <li>
                                <NavItem path="/services" name="Services" />
                            </li>
                            <li>
                            <NavItem path="/blog" name="Blog" />    
                            </li>
                        </div>
                        <li className="mr-10 bg-red-600 rounded px-4 py-2">
                            <NavItem path="/login" name="Sign In" />
                        </li>
                    </ul>
                </div>
            <Footer />
        </>
        
    )
}
export default Layout;