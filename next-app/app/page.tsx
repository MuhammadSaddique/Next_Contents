import Image from "next/image";
import Header from "@/components/Header";
import { ReactNode } from "react"; // Import ReactNode type
import SecondPage from "@/components/SecondPage";

interface HeaderProps {
  // Define the props for the Header component
}

export default function Home() {
  return (
    <div>
      <Header />
      <SecondPage/>
    </div>
  );
}
