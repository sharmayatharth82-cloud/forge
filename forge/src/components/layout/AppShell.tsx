import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

export default function AppShell({ children }: Props) {
  return (
    <main className="flex h-screen bg-[#09090B] text-white">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Header />

        <div className="flex-1 overflow-y-auto px-12 py-10">
          {children}
        </div>
      </section>
    </main>
  );
}
