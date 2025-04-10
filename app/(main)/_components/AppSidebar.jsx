"use client"
import Image from 'next/image'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { SideBarOptions } from '@/services/Constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
  
  export function AppSidebar() {

    const path = usePathname();
    console.log(path);
    return (
      <Sidebar>
        <SidebarHeader className='flex items-center'>
            <Image src={'/logo.png'} alt="logo" width={200} height={200}
            className=''
            ></Image>
            <Button className='w-full'><Plus/> Create New  Interview </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
          <SidebarContent>
            <SidebarMenu>
                {SideBarOptions.map((option, index)=>(
                    <SidebarMenuItem key= {index} className='p-1'>

                        <SidebarMenuButton asChild className={`p-5 ${path == option.path && 'bg-blue-200' }`}>
                            <Link href={option.path} className='gap-2'>
                            <option.icon className={` ${path == option.path && 'text-primary gap-4' }`}/>
                            <span className={`text-[16px] font-medium ${path == option.path && 'text-primary  gap-4' }`} >{option.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  