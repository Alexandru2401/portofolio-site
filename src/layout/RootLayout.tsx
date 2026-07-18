import Navbar from "@/layout/Navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <Navbar />
     <main
  className="min-h-svh bg-[#0D0B12]"
  style={{
    backgroundImage: `
      linear-gradient(to right, #2F293A 1px, transparent 1px),
      linear-gradient(to bottom, #2F293A 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
>
  <Outlet />
</main>
    </>
  );
}
