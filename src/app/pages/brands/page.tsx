"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function Brands() {
    const router = useRouter();

    const handleXpertClick = () => {
        router.push("/pages/brands/xpert");
    };

    const handleOmsClick = () => {
        router.push("/pages/brands/oms");
    };

    const handleOnesamClick = () => {
        router.push("/pages/brands/onesam");
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>Zigo Technology (Pvt) Ltd.</title>
                <meta
                    name="description"
                    content="Your trusted partner in mobile phone accessories."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-blue-900 relative">
                    {/* Background circuit pattern */}
                    <div className="absolute inset-0 z-0 opacity-30">
                        <Image
                            src="/images/production_monitoring.jpg"
                            alt="Circuit Board Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 text-start text-white">
                        {/* Welcome text */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-4 md:mt-8">
                            OUR BRANDS
                        </h1>

                        {/* Placeholder text */}
                        <p className="max-w-3xl text-base md:text-lg">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        </p>
                    </div>
                </div>

                <div className="bg-white py-6">
                    <div className="container mx-auto px-4 mb-12 md:mb-20">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="p-3 md:p-5">
                            <ol className="flex space-x-2 text-sm md:text-base">
                                <li>
                                    <Link href="/" className="text-blue-500 hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-blue-500">/</span>
                                </li>
                                <li>
                                    <Link
                                        href="/pages/brands"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Our Brands
                                    </Link>
                                </li>
                            </ol>
                        </nav>

                        {/* Heading */}
                        <div className="flex flex-col items-center">
                            <div className="container mx-auto px-4 sm:px-8 md:px-16">
                                <div className="h-[3px] w-full bg-blue-200 rounded-md mt-4"></div>
                            </div>{" "}
                            <div className="py-12 md:py-20">
                                <h1 className="text-gray-400 font-bold text-2xl md:text-3xl lg:text-4xl text-center">
                                    OUR BRANDS
                                </h1>
                            </div>
                            <div className="container mx-auto px-4 sm:px-8 md:px-16">
                                <div className="h-[3px] w-full bg-blue-200 rounded-md mt-4"></div>
                            </div>{" "}
                        </div>

                        {/* Brands Section */}
                        <div className="mt-8 md:mt-10">
                            {/* Desktop Layout - 3 columns with dividers */}
                            <div className="hidden lg:flex justify-between">
                                {/* Vertical line */}
                                <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>

                                {/* OMS */}
                                <div className="flex-1 text-center">
                                    <div className="flex justify-center">
                                        <div className="w-48 h-52 relative">
                                            <Image
                                                src="/images/Web site images-01.png"
                                                alt="OMS Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-400 text-xl font-medium mb-4">
                                        OMS
                                    </h3>
                                    <p className="text-gray-600 px-4 text-sm">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                        quis nostrud
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 mt-4 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleOmsClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>

                                {/* ONESAM */}
                                <div className="flex-1 text-center">
                                    <div className="flex justify-center">
                                        <div className="w-48 h-52 relative">
                                            <Image
                                                src="/images/Web site images-02.png"
                                                alt="ONESAM Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-xl font-medium mb-4">
                                        ONESAM
                                    </h3>
                                    <p className="text-gray-600 px-4 text-sm">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                        quis nostrud
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 mt-4 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleOnesamClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>

                                {/* X-PERT */}
                                <div className="flex-1 text-center">
                                    <div className="flex justify-center">
                                        <div className="w-48 h-52 relative">
                                            <Image
                                                src="/images/Web site images-03.png"
                                                alt="X-PERT Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-xl font-medium mb-4">
                                        X-PERT
                                    </h3>
                                    <p className="text-gray-600 px-4 text-sm">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                        quis nostrud
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 mt-4 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleXpertClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>
                            </div>

                            {/* Tablet Layout - Grid without vertical dividers */}
                            <div className="hidden md:grid lg:hidden grid-cols-1 xl:grid-cols-3 gap-8 px-4">
                                {/* OMS */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-40 h-40 relative">
                                            <Image
                                                src="/images/Web site images-01.png"
                                                alt="OMS Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-400 text-xl font-medium mb-4">
                                        OMS
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                        quis nostrud
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleOmsClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                {/* ONESAM */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-40 h-40 relative">
                                            <Image
                                                src="/images/Web site images-02.png"
                                                alt="ONESAM Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-xl font-medium mb-4">
                                        ONESAM
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                        quis nostrud
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleOnesamClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                {/* X-PERT */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-40 h-40 relative">
                                            <Image
                                                src="/images/Web site images-03.png"
                                                alt="X-PERT Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-xl font-medium mb-4">
                                        X-PERT
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                        quis nostrud
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleXpertClick}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Layout - Stacked cards */}
                            <div className="md:hidden space-y-8 px-2">
                                {/* OMS */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-32 h-32 relative">
                                            <Image
                                                src="/images/Web site images-01.png"
                                                alt="OMS Brand"
                                                height={200}
                                                width={200}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-400 text-lg font-medium mb-3">
                                        OMS
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 transition-all duration-300"
                                        onClick={handleOmsClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                {/* Horizontal divider for mobile */}
                                <div className="border-t border-gray-200 my-6"></div>

                                {/* ONESAM */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-32 h-32 relative">
                                            <Image
                                                src="/images/Web site images-02.png"
                                                alt="ONESAM Brand"
                                                height={200}
                                                width={200}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-lg font-medium mb-3">
                                        ONESAM
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 transition-all duration-300"
                                        onClick={handleOnesamClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                {/* Horizontal divider for mobile */}
                                <div className="border-t border-gray-200 my-6"></div>

                                {/* X-PERT */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-32 h-32 relative">
                                            <Image
                                                src="/images/Web site images-03.png"
                                                alt="X-PERT Brand"
                                                height={200}
                                                width={200}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-lg font-medium mb-3">
                                        X-PERT
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 transition-all duration-300"
                                        onClick={handleXpertClick}
                                    >
                                        Read More
                                    </button>
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
