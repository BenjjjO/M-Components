import FlowerMenu from "../components/animata/list/flower-menu";


// Example menu items with Lucide icons
import { Home, User, Github } from "lucide-react";

function App() {
  const menuItems = [
    { icon: Home, href: "/" },
    { icon: User, href: "/about" },
    { icon: Github, href: "https://github.com" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <FlowerMenu
        menuItems={menuItems}
        iconColor="white"
        backgroundColor="rgba(255,255,255,0.1)"
        animationDuration={400}
        togglerSize={50}
      />
    </div>
  );
}

// 👈 Don't forget this
export default App;
