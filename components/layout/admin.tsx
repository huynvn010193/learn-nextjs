import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";
import Auth from "../common/auth";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    try {
      await logout();
      console.log("redirect to Login page");
      router.push("/login");
    } catch (error) {
      console.log("failed to logout", error);
    }
  }

  return (
    <Auth>
      <h1>AdminLayout</h1>
      <div>Sidebar</div>
      <p>Profile: {JSON.stringify(profile)}</p>
      <div>
        <button onClick={handleLogoutClick}>Log out</button>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </Auth>
  );
}
