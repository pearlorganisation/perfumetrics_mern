"use client"

import { userHistory } from "@/store/userHistory"
import { userStore } from "@/store/userStore"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

const Login = () => {
    const { user, error, loading, login, isUserLoggedIn } = userStore();
    const { getUserHistories } = userHistory();
    const router = useRouter()
    const searchParams = useSearchParams()

    const search = searchParams.get('returnUrl')
    async function userLogin(formData) {
        const userName = formData.get('name')
        const pin = formData.get('password')
        await login({ userName, pin });



    }
    useEffect(() => {
        if (isUserLoggedIn) {
            if (search === 'pd') {
                router.back()
            }
            else {
                getUserHistories(user?._id);

                router.back()
            }
        }
    }, [isUserLoggedIn])

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
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-500 shadow-sm rounded-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-x-3">
                            <input type="checkbox" id="remember-me-checkbox" className="checkbox-item peer hidden" />
                            <label
                                htmlFor="remember-me-checkbox"
                                className="relative flex w-5 h-5 bg-white peer-checked:bg-pink-500 rounded-md border ring-offset-2 ring-pink-400 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                            >
                            </label>
                            <span>Remember me</span>
                        </div>
                        <a href="javascript:void(0)" className="text-center text-pink-500 hover:text-pink-400">Forgot password?</a>
                    </div>
                    {
                        loading ? <button
                            type="button"
                            disabled={loading}
                            className="w-full px-4 py-2 text-white font-medium bg-pink-500 hover:bg-pink-400 active:bg-pink-500 rounded-lg duration-150"
                        >
                            Loading..
                        </button> : <button
                            className="w-full px-4 py-2 text-white font-medium bg-pink-500 hover:bg-pink-400 active:bg-pink-500 rounded-lg duration-150"
                        >
                            Sign In
                        </button>
                    }

                </form>

                <p className="text-center">Don't have an account? <Link href="/signUp" className="font-medium text-pink-500 hover:text-pink-400">Sign up</Link></p>
            </div>
        </main>
    )
}
export default Login