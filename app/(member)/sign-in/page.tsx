'use client'
import { useState } from "react"
import Swal from "sweetalert2";

export default function Signin() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSignin = (e: React.FormEvent) => {
        e.preventDefault();
        Swal.fire({
            title: 'Sign In Success',
            text: `${username} Sign In Success`,
            icon: 'success'
        })
    }

    return(
        <form onSubmit={handleSignin}>
        <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold">Sign In</div>
        <div>Username</div>
        <input onChange={(e) => setUsername(e.target.value)} value={username} className="border-2"/>
        <div>Password</div>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="border-2"/>
        <button type="submit" className="btn">
            <i className="fa fa-check mr-2"></i>
            SIGN IN
        </button>
        </div>
        </form>
    )
}