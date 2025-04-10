import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./_components/AppSidebar";
import WelcomeContainer from "./dashboard/_components/WelcomeContainer";
import Provider from "@/app/provider";

function DashboardProvider({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className=" flex flex-col items-center">
        {/* <SidebarTrigger /> */}
        {/* <WelcomeContainer></WelcomeContainer> */}
        <div className="ml-3">
          <Provider>
            <WelcomeContainer />
          </Provider>
        </div>
        {children}
      </div>
    </SidebarProvider>
  );
}

export default DashboardProvider;
