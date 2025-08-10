import NavItem from "./NavItem"
import Footer from "./Footer"
function Layout({children}){
    return(
        <>
                <nav className="bg-gray-100 shadow-md">
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
                                <NavItem path="/blog" name="Blog" />    
                            </li>
                            <li>
                                <NavItem path="/about" name="About" />
                            </li>
                        </div>
                        <li className="mr-10 bg-blue-500 rounded px-4 py-2 shadow hover:bg-blue-600">
                            <NavItem path="/signin" name="Sign In" />
                        </li>
                    </ul>
                </nav>
                <main>
                    {children}
                </main>

            <Footer />
        </>
        
    )
}
export default Layout;