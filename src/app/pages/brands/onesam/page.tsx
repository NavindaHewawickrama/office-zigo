import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pro1 from "../../../../../public/images/products/pro1.png";
import pro2 from "../../../../../public/images/products/pro2.png";
import pro3 from "../../../../../public/images/products/pro3.png";
import pro4 from "../../../../../public/images/products/pro4.png";

export default function OneSam() {
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
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 relative">
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
                    <div className="relative z-10 container mx-auto px-4 py-20 text-start text-white">
                        {/* Welcome text */}
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            OUR <span className="text-orange-500">BRANDS</span>
                        </h1>

                        {/* Placeholder text - replace with actual content */}
                        <p className="max-w-3xl text-lg">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 py-6">
                    <div className="container mx-auto px-4">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="p-5">
                            <ol className="flex space-x-2">
                                <li>
                                    <Link href="/" className="text-orange-600 hover:underline hover:text-orange-700">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-gray-500">/</span>
                                </li>
                                <li>
                                    <Link
                                        href="/pages/brands"
                                        className="text-orange-600 hover:underline hover:text-orange-700"
                                    >
                                        Our Brands
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-gray-500">/</span>
                                </li>
                                <li>
                                    <Link href="#" className="text-orange-600 hover:underline hover:text-orange-700">
                                        ONESAM
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                        {/* Heading */}
                        <div className="flex flex-col items-center">
                            <div className="mt-8 h-[3px] w-11/12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-md mx-auto"></div>
                        </div>

                        {/* brands */}
                        <div className="flex flex-col md:flex-row justify-between mt-10">
                            {/* Vertical line */}
                            <div className="w-0.5 bg-gradient-to-b from-orange-400 to-gray-400 mx-2 h-1vh mt-10"></div>
                            {/* ONE SAM */}
                            <div className="flex-1 text-center p-6 justify-center mt-[-50]">
                                <div className="flex justify-start mb-10">
                                    <div className="w-2xl h-48 relative">
                                        {/* Logo section unchanged */}
                                        <Image
                                            src="/images/Web site images-02.png"
                                            alt="Vision Icon"
                                            height={300}
                                            width={300}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-lg shadow-sm border-l-4 border-orange-500 p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                        nostrud Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                        veniam, quis nostrud Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                        minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                        wisi enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore magna aliquam erat
                                        volutpat. Ut wisi enim ad minim veniam, quis nostrud Lorem
                                        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                        nostrud Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                        veniam, quis nostrud
                                    </p>
                                </div>

                                <div className="bg-gray-100 rounded-lg p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                        nostrud Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                        veniam, quis nostrud Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                        minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                        wisi enim ad minim veniam, quis nostrud
                                    </p>
                                </div>
                                
                                <div className="bg-white rounded-lg shadow-sm border-r-4 border-gray-500 p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                        nostrud Lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                        veniam, quis nostrud Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                        minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                        wisi enim ad minim veniam, quis nostrud
                                    </p>
                                </div>
                                
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="p-10">
                                            <h1 className="text-gray-600 font-bold text-4xl uppercase relative">
                                                <span className="text-orange-500">PRO</span>DUCTS
                                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-400 to-gray-400 rounded"></div>
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-12">
                                        {[pro1, pro2, pro3, pro4, pro3, pro2].map(
                                            (product, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-400 group"
                                                >
                                                    <div className="relative w-full h-64 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                                                        <Image
                                                            src={product}
                                                            alt={`product ${index + 1}`}
                                                            layout="fill"
                                                            className="object-contain p-6"
                                                        />
                                                    </div>
                                                    <div className="p-4 text-center bg-gradient-to-r from-gray-50 to-orange-50">
                                                        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                                                            Product {index + 1}
                                                        </h3>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-0.5 bg-gradient-to-b from-gray-400 to-orange-400 mx-2 h-1vh mt-10"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}