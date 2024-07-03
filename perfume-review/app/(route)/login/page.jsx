"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const Login = () => {
    const router = useRouter()
    async function userLogin(formData) {
        const userName = formData.get('name')
        const pin = formData.get('password')
        console.log(userName, 'user')
        const response = await fetch(
            `https://perfume-backend-1.onrender.com/api/v1/auth/signin`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({ userName, pin })
        }
        );
        const data = await response.json()
        if (data.status) {
            toast.success(data.message)
            const userData = {}
            localStorage.setItem('perfumeUD', JSON.stringify(userData))
            router.push('/')
        }
        else {
            toast.error(data.message)

        }

        console.log(data, ":::data")
    }
    return (
        <main className="w-full h-[90vh] flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 space-y-5">
                <div className="text-center pb-8">
                    {/* <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" /> */}
                    <div className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                    </div>
                </div>
                <form
                    action={userLogin}
                    className="space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-x-3">
                            <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
                            <label
                                htmlFor="remember-me-checkbox"
                                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                            >
                            </label>
                            <span>Remember me</span>
                        </div>
                        <a href="javascript:void(0)" className="text-center text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center">Don't have an account? <Link href="/singUp" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
            </div>
        </main>
    )
}
export default Login