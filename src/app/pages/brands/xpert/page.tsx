import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pro1 from "../../../../../public/images/products/pro1.png";
import pro2 from "../../../../../public/images/products/pro2.png";
import pro3 from "../../../../../public/images/products/pro3.png";
import pro4 from "../../../../../public/images/products/pro4.png";

export default function XPert() {
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
                <div className="bg-blue-900 relative ">
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
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">OUR BRANDS</h1>

                        {/* Placeholder text - replace with actual content */}
                        <p className="max-w-3xl text-lg">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        </p>
                    </div>
                </div>

                <div className="bg-white py-6">
                    <div className="container mx-auto px-4">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="p-5">
                            <ol className="flex space-x-2">
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
                                <li>
                                    <span className="text-blue-500">/</span>
                                </li>
                                <li>
                                    <Link href="#" className="text-blue-500 hover:underline">
                                        X-Pert
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                        {/* Heading */}
                        <div className="flex flex-col items-center">
                            <div className="mt-8 h-[3px] w-11/12 bg-blue-200 rounded-md mx-auto"></div>
                        </div>

                        {/* brands */}
                        <div className="flex flex-col md:flex-row justify-between mt-10">
                            {/* Vertical line */}
                            <div className="w-0.5 bg-gray-200 mx-2 h-1vh mt-10"></div>
                            {/* X-PERT */}
                            <div className="flex-1 text-center p-6 justify-center mt-[-50]">
                                <div className="flex justify-start mb-15">
                                    <div className="w-2xl h-48  relative">
                                        <Image
                                            src="/images/Web site images-03.png"
                                            alt="Vision Icon"
                                            height={300}
                                            width={300}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-600 p-4 max-w-auto text-justify">
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

                                <p className="text-gray-600 p-4 max-w-auto text-justify">
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
                                <p className="text-gray-600 p-4 max-w-auto text-justify">
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
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="p-20">
                                            <h1 className="text-gray-500 font-bold text-4xl uppercase">
                                                Products
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-12">
                                        {[pro1, pro2, pro3, pro4, pro3, pro2].map(
                                            (product, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-200 shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                                                >
                                                    <div className="relative w-full h-64">
                                                        <Image
                                                            src={product}
                                                            alt={`product ${index + 1}`}
                                                            layout="fill"
                                                            className="object-contain p-6"
                                                        />
                                                    </div>
                                                    <div className="p-4 text-center">
                                                        <h3 className="text-lg font-semibold text-gray-700">
                                                            Product {index + 1}
                                                        </h3>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-0.5 bg-gray-200 mx-2 h-1vh mt-10"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
