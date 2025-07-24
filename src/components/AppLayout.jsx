import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
  const location = useLocation();
  const pageLocation = location.pathname.split("/")[1];

  return (
    <div
      className={`flex flex-col min-h-screen relative bg-no-repeat bg-center bg-cover ${
        pageLocation === "home"
          ? "bg-[url('/images/home/background-home-desktop.jpg')] sm:bg-[url('/images/home/background-home-mobile.jpg')] lg:bg-[url('/images/home/background-home-tablet.jpg')]"
          : pageLocation === "destination"
          ? "bg-[url('/images/destination/background-destination-mobile.jpg')] sm:bg-[url('/images/destination/background-destination-tablet.jpg')] lg:bg-[url('/images/destination/background-destination-desktop.jpg')]"
          : pageLocation === "crew"
          ? "bg-[url('/images/crew/background-crew-mobile.jpg')] sm:bg-[url('/images/crew/background-crew-tablet.jpg')] lg:bg-[url('/images/crew/background-crew-desktop.jpg')]"
          : "bg-[url('/images/technology/background-technology-mobile.jpg')] sm:bg-[url('/images/technology/background-technology-tablet.jpg')] lg:bg-[url('/images/technology/background-technology-desktop.jpg')]"
      }`}
    >
      <NavBar />
      <main className="flex flex-col items-center justify-center flex-grow max-w-screen mx-auto my-8 sm:my-12 lg:my-16">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
