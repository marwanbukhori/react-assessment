import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 relative z-[1] overflow-auto">
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
