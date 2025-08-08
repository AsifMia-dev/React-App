import NavItem from "./NavItem"
import Footer from "./Footer"
function Layout(){
    return(
        <>
                <div className=" container flex justify-center">
                    
                    <ul className="flex space-x-4 bg-white p-4 text-black">
                        <NavItem path="/" name="Home" />
                        <NavItem path="/services" name="Services" />
                        <NavItem path="/blog" name="Blog" />
                        <NavItem path="/login" name="Login" />
                    </ul>
                </div>
            <Footer />
        </>
        
    )
}
export default Layout;