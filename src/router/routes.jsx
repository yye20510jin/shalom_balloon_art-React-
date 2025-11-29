import Home from "../Home";
import AdminLogin from "../admin/AdminLogin";
import Admin from "../admin/Admin"
import Membership from "../Membership";


export const routes=[
    {path: "/", element: <Home />},
    {path:"/adminLogin", element: <AdminLogin />},
    {path:"/admin", element: <Admin/>},
    {path:"/membership", element:<Membership/>}
];