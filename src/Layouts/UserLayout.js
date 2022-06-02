
import Nav from '../Component/Nav'
import {Outlet } from 'react-router-dom';
import { AuthProvider } from "../context/auth";




export default function UserLayout(){
    // const { login } = useAuth()

    return(
        <>
        <Nav />
        <AuthProvider>
        <Outlet />
        </AuthProvider>
        </>
    )
}