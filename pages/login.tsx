import * as React from "react";
import { authApi } from "@/api/index";
import { useAuth } from "@/hooks/index";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const router = useRouter();

  console.log({ profile });

  async function handleLoginClick() {
    try {
      await login();
      console.log("redirect to dashboard");
      router.push("/about");
    } catch (error) {
      console.log("failed to login", error);
    }
  }

  // async function handleGetProfileClick() {
  //   try {
  //     await logout();
  //     console.log("redirect to Logi n page");
  //   } catch (error) {
  //     console.log("failed to get profile", error);
  //   }
  // }

  async function handleLogoutClick() {
    try {
      await logout();
      console.log("redirect to Login page");
    } catch (error) {
      console.log("failed to logout", error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push("/about")}>Go to about</button>
    </div>
  );
}
