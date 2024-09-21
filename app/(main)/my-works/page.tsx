import React from 'react'
import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectsSection from '@/app/components/works/ProjectsSection';

export const metadata: Metadata = {
  title: "My Works | MSI Rony",
  description: "See the works of MSI Rony",
}


const Page = () => {
  const commercial_projects = projects.filter(
    (project: ProjectData) => project.type === 'commercial'
  )
  const other_projects = projects.filter(
    (project: ProjectData) => project.type === 'other'
  )
  return (
    <div
      className='my-10'
    >
      <div className="flex flex-col space-y-2">
        <div className="text-4xl font-semibold">
          <span className='text-[#C778DD]'>/</span>works
        </div>
        <div className="text-slate-300">List of my top projects</div>
      </div>
      <div 
        className="my-16 space-y-16"
      >
        <ProjectsSection 
          title='commercial-projects'
          projects={commercial_projects}
        />
        <ProjectsSection 
          title='other-projects'
          projects={other_projects}
        />
      </div>
    </div>
  )
}

export default Page