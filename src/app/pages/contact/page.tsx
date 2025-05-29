import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Contact Us | Zigo Technology (Pvt) Ltd.</title>
                <meta
                    name="description"
                    content="Leading manufacturer and distributor of mobile phone accessories in Sri Lanka."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-blue-900 relative">
                    <div className="absolute inset-0 z-0 h-100">
                        <Image
                            src="/images/contact_us_background.jpg"
                            alt="Manufacturing Floor Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 text-center text-white">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 mt-18">
                            CONTACT US
                        </h1>
                    </div>
                </div>

                <div className="mt-12 sm:mt-24 md:mt-48 border-t border-blue-400"></div>

                {/* Main Contact Section */}
                <div className="bg-white py-12 sm:py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-8 md:px-16">
                        {/* Company Name Header */}
                        <h2 className="text-gray-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
                            ZIGO TECHNOLOGY (PVT) LTD
                        </h2>

                        <div className="flex flex-col md:flex-row gap-20">
                            {/* Contact Information Section */}
                            <div className="w-full md:w-1/2 space-y-8">
                                {/* Company Description */}
                                <div className="bg-white">
                                    <p className="text-gray-600 leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                        quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                                        iriure dolor in
                                    </p>
                                </div>

                                {/* Address */}
                                <div className="bg-white">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                                            <svg
                                                className="w-5 h-5 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-medium text-gray-800">
                                            Address
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed ml-13">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut
                                    </p>
                                </div>

                                {/* Hotline */}
                                <div className="bg-white">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                                                <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-medium text-gray-800">
                                                Hotline
                                            </h3>
                                        </div>
                                        <p className="text-blue-600 font-medium text-base sm:text-lg transition-colors">
                                            +94 012345678
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Section */}
                            <div className="w-full md:w-[500px] h-120 border-black border-2">
                                <div className="w-full h-full relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575084097891!2d79.8730162!3d6.914682899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnNTIuOSJOIDc5wrA1MicyMi45IkU!5e0!3m2!1sen!2slk!4v1622543928096!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Island Wide Sales Officers Section */}
                        <div className="mt-16 sm:mt-20 md:mt-8">
                            <div className="bg-white">
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-medium text-gray-800">
                                        Island Wide Sales Officers
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Colombo
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Kalutara
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Gampaha
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Galle
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Kandy
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Anuradhapura
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Polonnaruwa
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Ampara/ Badulla
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg transition-colors">
                                        <span className="font-medium text-gray-700 text-base sm:text-lg">
                                            Jaffna Area
                                        </span>
                                        <p className="text-blue-600 transition-colors font-medium text-base sm:text-lg">
                                            07654566544
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}