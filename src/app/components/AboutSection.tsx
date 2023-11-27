"use client"
import React, { useTransition, useState } from 'react'
import Image from "next/image"
import AboutImage from "../../../public/images/about-image.png"
import TabButton from './TabButton'



const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Python</li>
        <li>NumPy and Pandas</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>React.js</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>OpenWeaver Basics of html/css</li>
      </ul>
    )
  }

]


const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    });
  }
  return (
    <section className="text-white" id="about"><div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src={AboutImage}
        alt="about-image"
        height={500}
        width={500} />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base md:text-lg">Hello! I am a passionate and dedicated web application developer with a keen interest in leveraging cutting-edge technologies to enhance brand and company performance. My expertise lies in crafting efficient and high-performing websites, and I specialize in utilizing technologies like Next.js to achieve optimal results. With a commitment to staying at the forefront of industry trends, I am constantly expanding my skill set. Currently, I am a student at PIAIC, where I am enrolled in the AI Web3.0 Metaverse Blockchain Technology 1-year program. This educational journey is not only shaping my skills as a web developer but is also paving the way for me to become a generative AI developer. I believe in the power of innovation and continuous learning to create impactful and forward-thinking web solutions. Join me on this exciting journey, and let's elevate your digital presence together!</p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}>
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}>
            {" "}
            Certifications{" "}
          </TabButton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
      </div>
    </div>
    </section>
  )
}

export default AboutSection