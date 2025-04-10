import { Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react"
export const SideBarOptions = [
    {
        name: 'Dashboard', 
        icon: LayoutDashboard, 
        path: '/dashboard'
    },
    {
        name: 'Scheduled Interview', 
        icon: Calendar, 
        path: '/schedule'
    },
    {
        name: 'All Interview', 
        icon: List, 
        path: '/all-interview'
    },
    {
        name: 'Billing', 
        icon: WalletCards, 
        path: '/billing'
    },
    {
        name: 'Settings', 
        icon: Settings, 
        path: '/settings'
    },
]