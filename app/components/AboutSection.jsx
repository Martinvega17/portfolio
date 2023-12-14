"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import IconsSocial from './IconsSocial';
import { content } from '@/tailwind.config';

const TAB_DATA = [

    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Newly graduated in computer engineering with a specialisation in cyber-Security, December 2023</li>
                <li>Bachelor Technician in Computer Science, 2018</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>NSE2 Network Security Associate (Fortinet), December 2022</li>
                <li>NSE1 Network Security Associate (Fortinet), October 2022</li>
            </ul>
        )
    },
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="">
                <ul className='list-disc pl-2'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                    <li>Elementary JavaScript</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>React</li>
                </ul>
                <IconsSocial
                    iconNames={['html', 'css', 'tailwindcss', 'javascript', 'php', 'laravel']}
                />


            </div>
        )
    },
    {
        title: "Network Skills",
        id: "netskills",
        content: (
            <ul className='list-disc pl-2'>
                <li>SO Windows/Linux</li>
                <li>Windows Server</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section id='about' className='text-white'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about-image.png"
                    width={500}
                    height={500}
                    alt="about image"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">

                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("netskills")}
                            active={tab === "netskills"}
                        >
                            {" "}
                            Network Skills{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection