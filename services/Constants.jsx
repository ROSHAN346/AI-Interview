import { BriefcaseBusiness, BriefcaseBusinessIcon, Calendar, Code2Icon, LayoutDashboard, List, Puzzle, Settings, User2Icon, WalletCards } from "lucide-react"
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

export const InterviewType = [
    {
        title: 'Technical', 
        icon : Code2Icon
    },
    {
        title: 'Behavioral', 
        icon : User2Icon
    },
    {
        title: 'Experience', 
        icon : BriefcaseBusinessIcon
    },
    {
        title: 'Problem Solving', 
        icon : Puzzle
    },
    {
        title: 'LeaderShip', 
        icon : BriefcaseBusinessIcon
    },
]

export const INTERVIEW_PROMPT = `You are an expert technical intervier.

Based on the inputs , generate  a well-structured list of high-quality interview questions:
Job Title:{{jobPosition}}
Job Description : {{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}
Your task : 
Analyze the job description to identify key responsibities , required skills, and expected experience.
Generate a list of interview questions to match the interview duration
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of real-life {{type}} interview.

Return the result as a JSON object in the following format:

{
  "questions": [
    {
      "question": "string",
      "type": "string"
    },
    ...
  ]
}
The goal is to create a structured , relevant , and time-optimized interview plan for a {{jobPosition}} role.
`