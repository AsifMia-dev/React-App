import Layout  from "../Components/Layout";
import Login from "../AuthenTicate/Login";
import Register from "../AuthenTicate/Register";

function SignIn(){
    return(
        <Layout>
            <Login />
        </Layout>
    );
}
export default SignIn;