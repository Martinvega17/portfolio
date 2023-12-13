"use client"
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha";
import { Toaster, toast } from "sonner";


const EmailSection = () => {
    const [loading, setLoading] = useState(false);
    const [isCaptchaValid, setCaptchaValid] = useState(false); // Estado para el captcha

    const onChange = (value) => {
        if (value) {
            setCaptchaValid(true); // Marca el captcha como válido
        } else {
            setCaptchaValid(false); // Marca el captcha como no válido
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            subject: String(event.target.subject.value),
            message: String(event.target.message.value),
        };

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Message sent successfully");
            setLoading(false);

            // reset the form
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.subject.value = "";
            event.target.message.value = "";
        }
        if (!response.ok) {
            console.log("Error sending message");
            setLoading(false);
        }
    }

    function verifyEmpty(e) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "" || !isCaptchaValid) {
            e.preventDefault();
            toast.error("Por favor llena todos los campos y verifica el captcha");
        } else {
            toast.success("Mensaje enviado con éxito");

        }
    }

        return (
            <section
                id="contact"
                className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
            >
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        {" "}
                        I&apos;m currently looking for new opportunities, my inbox is always
                        open. Whether you have a question or just want to say hi, I&apos;ll
                        try my best to get back to you!
                    </p>
                    <div className="socials flex flex-row gap-2">
                        <Link href="github.com">
                            <Image
                                src='/icons/github-icon.svg'
                                width={50}
                                height={50}
                                alt="Github Icon" />
                        </Link>
                        <Link href="linkedin.com">
                            <Image
                                width={50}
                                height={50}
                                src='/icons/linkedin-icon.svg'
                                alt="Linkedin Icon" />
                        </Link>
                    </div>
                </div>
                <div>

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your name
                            </label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <div className="col-span-2">
                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="">
                            <Toaster richColors />
                            <button
                                type="submit"
                                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                                onClick={verifyEmpty}
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        );
    };
    export default EmailSection