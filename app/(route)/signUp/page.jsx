"use client";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignUp = () => {
  const router = useRouter();
  async function createUser(formData) {
    const userName = formData.get("name");
    const pin = formData.get("password");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ userName, pin }),
      }
    );
    const data = await response.json();
    if (data.success) {
      toast.success(data.message);
      router.push("/login");
    } else {
      toast.error(data.message);
    }

    // console.log(data, ":::data")
  }
  return (
    <main className="w-full h-[90vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          {/* <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" /> */}
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Sign Up
            </h3>
          </div>
        </div>
        <form action={createUser} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="text"
              required
              name="name"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-500 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-500 shadow-sm rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-pink-500 rounded-md border ring-offset-2 ring-pink-400 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Remember me</span>
            </div>
            <a
              href="javascript:void(0)"
              className="text-center text-pink-500 hover:text-pink-400"
            >
              Forgot password?
            </a>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-pink-500 hover:bg-pink-400 active:bg-pink-600 rounded-lg duration-150">
            Sign Up
          </button>
        </form>

        <p className="text-center">
          Don't have an account?{" "}
          <a
            href="/login"
            className="font-medium text-pink-500 hover:text-pink-400"
          >
            Login
          </a>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
