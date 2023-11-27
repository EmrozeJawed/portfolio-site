import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
  {
    id: 1,
    title: "My Node Projects",
    description: "These Are Cli Projects Using Typescript",
    image: "/images/projects/1.png",
    tag: ["ALL", "WEB"],
    giturl: "https://github.com/EmrozeJawed/NODE.PROJECTS",
    previewurl: "https://github.com/EmrozeJawed/NODE.PROJECTS"
  }
]

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className='text-center text-4xl font-bold text-white m-4'>My Projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            giturl={project.giturl}
            previewurl={project.previewurl}
          />
        ))}
      </div>
    </section>
  )
}



export default ProjectSection