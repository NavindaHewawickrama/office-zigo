"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "react-countup";

export default function Home() {
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        // Trigger the count-up animation when the component mounts
        if (window.scrollY < 1000) {
            setStartCount(true);
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
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
                            src="/images/luxury-blue-golden-background_23-2149329427.avif"
                            alt="Circuit Board Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
                        {/* Hero section with large logo */}
                        <div className="mb-12 flex justify-center mt-20">
                            <div className="relative w-auto rounded-2xl max-w-2xl h-24 bg-white flex justify-center items-center">
                                <Image
                                    src="/images/Web site images-05.png"
                                    alt="Zigo Technology Logo"
                                    width={300}
                                    height={200}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Welcome text */}
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Welcome to Zigo Technology (Pvt) Ltd.
                        </h1>

                        <h2 className="text-xl sm:text-2xl mb-16">
                            Your trusted partner in mobile phone accessories.
                        </h2>

                        {/* Placeholder text - replace with actual content */}
                        <p className="max-w-4xl mx-auto text-lg">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        </p>
                    </div>
                </div>

                {/* Service Icons Section */}
                <div className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                            {/* Brands */}
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src="/images/brand.webp"
                                            alt="Brands Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-500 uppercase text-xl font-medium">
                                    BRANDS
                                </h3>
                            </div>

                            {/* Production */}
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src="/images/production.avif"
                                            alt="Production Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-500 uppercase text-xl font-medium">
                                    PRODUCTION
                                </h3>
                            </div>

                            {/* Contact Us */}
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-24 h-24 relative">
                                        <Image
                                            src="/images/contact.png"
                                            alt="Contact Us Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-gray-500 uppercase text-xl font-medium">
                                    CONTACT US
                                </h3>
                            </div>
                        </div>
                        <div className="container mx-auto px-4 sm:px-8 md:px-16">
                            <div className="h-[3px] w-full bg-blue-200 rounded-md mt-4"></div>
                        </div>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="bg-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-gray-500 text-4xl font-medium text-center mb-6">
                            ABOUT US
                        </h2>
                        <h3 className="text-gray-600 text-2xl font-medium text-center mb-6">
                            COMPANY OVERVIEW
                        </h3>

                        <div className="mb-12">
                            <div className="max-w-4xl mx-auto text-gray-600 space-y-4 text-left">
                                <p>
                                    Zigo Technology (Private) Limited is a premier industry leader
                                    in the manufacturing, exportation, importation, and
                                    distribution of high-quality mobile phone accessories, repair
                                    parts, and electrical equipment. As the exclusive owner of the
                                    OMS brand (OMS Mobile Phone Accessories) and the sole
                                    distributor of Onesam and Xpert, we are committed to
                                    delivering cutting-edge solutions that enhance mobile
                                    connectivity and user experience. With the establishment of
                                    our state-of-the-art manufacturing facility in Sri Lanka in
                                    2019, we have expanded our production capabilities to
                                    manufacture premium mobile accessories that meet international
                                    quality standards. Our strong export operations enable us to
                                    supply OEM and branded accessories to global markets,
                                    strengthening our presence across China (PRC), Thailand,
                                    Singapore, Bangladesh, India, and beyond.
                                </p>

                                <p>
                                    Since our inception in 2006 and formal incorporation in 2014,
                                    Zigo Technology has continuously evolved, driven by a passion
                                    for innovation, efficiency, and excellence. Our ability to
                                    manufacture and export high-quality mobile accessories has
                                    positioned us as a trusted global supplier, ensuring seamless
                                    distribution and accessibility across international markets.
                                </p>
                                <p>
                                    At Zigo Technology, our commitment to technological
                                    advancement and superior manufacturing standards remains the
                                    driving force behind our success. By maintaining a robust
                                    distribution network and a relentless focus on quality, we
                                    continue to set new benchmarks in the mobile accessories
                                    industry.
                                </p>

                                <p>
                                    Founded in 2006 and incorporated in 2014, Zigo Technology has
                                    grown rapidly over the years, expanding its services
                                    island-wide while maintaining a strong focus on customer
                                    satisfaction. Our dedication to excellence has enabled us to
                                    build strategic partnerships with international markets,
                                    including the People &apos s Republic of China (PRC),
                                    Thailand, Singapore, Bangladesh, and India.
                                </p>

                                <p>
                                    In 2019, we launched our own mobile phone accessory
                                    manufacturing plant in Sri Lanka, marking a significant
                                    milestone in our journey. With the support of our extensive
                                    distribution network, we remain committed to delivering
                                    high-quality products and ensuring fast, efficient
                                    distribution to meet the growing demands of our customers.
                                </p>
                            </div>
                        </div>

                        {/* Vision and Mission - Side by Side within container */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                {/* Vision */}
                                <div className="flex-1 text-center md:border-r md:border-gray-300 md:pr-8">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-24 h-24 relative">
                                            <Image
                                                src="/images/vision.jpg"
                                                alt="Vision Icon"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-2xl font-medium mb-4">
                                        OUR VISION
                                    </h3>
                                    <p className="text-gray-600">
                                        To become the world &apos s leading brand in mobile
                                        accessories and electronic equipment, recognized for
                                        innovation, superior quality and exceptional customer
                                        experience.
                                    </p>
                                </div>

                                {/* Mission */}
                                <div className="flex-1 text-center md:pl-8">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-24 h-24 relative">
                                            <Image
                                                src="/images/mission.jpg"
                                                alt="Mission Icon"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-2xl font-medium mb-4">
                                        OUR MISSION
                                    </h3>
                                    <p className="text-gray-600">
                                        To deliver premium mobile accessories and electronic
                                        equipment to customers worldwide, ensuring quality,
                                        innovation and customer satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto px-4 sm:px-8 md:px-16">
                            <div className="h-[3px] w-full bg-blue-200 rounded-md mt-8"></div>
                        </div>

                        {/* Core Values */}
                        <div className="mt-15">
                            <h2 className="text-gray-500 text-4xl font-medium text-center mb-6 uppercase">
                                Core Values
                            </h2>

                            {/* Grid container for 2 columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                {/* 1 */}
                                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-blue-800 text-base sm:text-lg mb-2 uppercase">
                                                Quality & Innovation
                                            </h4>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                We prioritize high quality materials and cutting-edge
                                                technology to create durable, innovative accessories
                                                that enhance user experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2 */}
                                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-green-800 text-base sm:text-lg mb-2 uppercase">
                                                Customer – Centric Approach
                                            </h4>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                Our customers are at the heart of everything we do. We
                                                strive to exceed expectations with exceptional service,
                                                reliability and value.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3 */}
                                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2 uppercase">
                                                Sustainability & Responsibility
                                            </h4>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                                                We are committed to eco friendly manufacturing reducing
                                                waste, and ensuring responsible sourcing of materials
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4 */}
                                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-red-600 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-red-800 text-base sm:text-lg mb-2 uppercase">
                                                Integrity and Transparency
                                            </h4>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                We conduct business with honesty, fairness and
                                                transparency, building trust with customers, partners
                                                and stakeholders
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 5 */}
                                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-yellow-600 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-yellow-800 text-base sm:text-lg mb-2 uppercase">
                                                Global Reach, Local Commitment
                                            </h4>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                While we operate globally, we remain dedicated to
                                                understanding and meeting the unique needs of local
                                                markets
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 6 */}
                                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-indigo-800 text-base sm:text-lg mb-2 uppercase">
                                                Continuous Improvement
                                            </h4>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                We embrace change, adapt to new trends and continuously
                                                improve our products and processes to stay ahead in the
                                                industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-teal-600 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-teal-800 text-base sm:text-lg mb-2 uppercase">
                                                Strong Partnerships
                                            </h4>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                We believe in fostering long-term relationships with
                                                suppliers, distributors and retailers to create a strong
                                                and sustainable supply chain.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto px-4 sm:px-8 md:px-16">
                            <div className="h-[3px] w-full bg-blue-200 rounded-md mt-12"></div>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="bg-gradient-to-b from-white to-blue-500 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-gray-500 text-4xl font-medium text-center mb-6">
                            OUR ACHIEVEMENTS
                        </h2>

                        <div className="flex flex-wrap justify-center gap-8">
                            {/* 15 Years Experience */}
                            <div className="p-8 text-center w-full md:w-64">
                                <h3 className="text-blue-700 text-5xl font-bold mb-2">
                                    {startCount && (
                                        <CountUp end={15} duration={6} separator="," />
                                    )}
                                </h3>
                                <p className="text-blue-700 font-semibold uppercase">YEARS</p>
                                <p className="text-blue-700 text-sm">
                                    Competence On Mobile Accessory Industry
                                </p>
                            </div>

                            {/* 3500+ Products */}
                            <div className="p-8 text-center w-full md:w-64">
                                <h3 className="text-blue-700 text-5xl font-bold mb-2">
                                    {startCount && (
                                        <CountUp end={3500} duration={4} separator="," />
                                    )}
                                </h3>
                                <p className="text-blue-700 font-semibold uppercase">PLUS</p>
                                <p className="text-blue-700 text-sm">PRODUCTS</p>
                            </div>

                            {/* Island-wide Customer Base */}
                            <div className="p-8 text-center w-full md:w-64">
                                <h3 className="text-blue-700 text-2xl font-bold mb-2">
                                    ISLAND WIDE
                                </h3>
                                <p className="text-blue-700 font-bold text-3xl uppercase">
                                    CUSTOMER
                                </p>
                                <p className="text-blue-700 font-bold text-2xl">BASE</p>
                            </div>

                            {/* Island-wide Distribution Network */}
                            <div className="p-8 text-center w-full md:w-64">
                                <h3 className="text-blue-700 text-2xl font-bold mb-2">
                                    ISLAND WIDE
                                </h3>
                                <p className="text-blue-700 font-bold text-3xl uppercase">
                                    DISTRIBUTION
                                </p>
                                <p className="text-blue-700 font-bold text-2xl">NETWORK</p>
                            </div>
                        </div>

                        <div className="text-center mt-12 py-6 text-white rounded-lg">
                            <h3 className="text-4xl font-medium">
                                LEADING MOBILE ACCESSORY MANUFACTURER IN SRI LANKA
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Milestones */}
                <div className="bg-white py-5 flex flex-col items-center">
                    <div className="container mx-auto px-4 sm:px-8 md:px-16">
                        <div className="h-[3px] w-full bg-blue-200 rounded-md mt-4"></div>
                    </div>
                    <div className="container mx-auto">
                        <h2 className="text-gray-500 text-4xl font-medium text-center mb-5 pt-12">
                            MILESTONES
                        </h2>
                        <div className="flex flex-col items-center mb-10">
                            <div className="relative h-[500px] w-lvw">
                                {/* SVG Graph Path */}
                                <svg
                                    viewBox="0 0 1200 500"
                                    className="absolute w-full h-full"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <defs>
                                        <marker
                                            id="arrowhead"
                                            markerWidth="10"
                                            markerHeight="7"
                                            refX="0"
                                            refY="3.5"
                                            orient="auto"

                                        >
                                            <polygon points="0 0, 5 3.5, 0 7" fill="#3B82F6" />
                                        </marker>
                                        <linearGradient
                                            id="curveFillGradient"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M150,450 C500,450 900,400,1150,150"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M150,450 C500,450 900,400,1150,150 L1150,500 L150,500 Z"
                                        fill="url(#curveFillGradient)"
                                        stroke="none"
                                    />
                                    {/* Milestone Bubbles */}
                                    {[
                                        {
                                            x: 150,
                                            y: 450,
                                            year: "2006",
                                            label: "FOUND THE COMPANY",
                                        },
                                        {
                                            x: 280,
                                            y: 445,
                                            year: "2014",
                                            label: "INCORPORATE THE COMPANY",
                                        },
                                        {
                                            x: 410,
                                            y: 438,
                                            year: "2014",
                                            label:
                                                "INITIATE THE STRATEGIC RELATION WITH CHINESE BUSINESS PARTNERS",
                                        },
                                        {
                                            x: 560,
                                            y: 420,
                                            year: "2014",
                                            label: "LAUNCH OMS BRAND TO THE SRILANKA MARKET",
                                        },
                                        {
                                            x: 700,
                                            y: 390,
                                            year: "2015",
                                            label: "START DEALER NETWORK OPERATION",
                                        },
                                        {
                                            x: 820,
                                            y: 355,
                                            year: "2016",
                                            label: "LAUNCH THE ONESAM BRAND",
                                        },
                                        {
                                            x: 930,
                                            y: 305,
                                            year: "2019",
                                            label: "MANUFACTURING PLANT STARTED",
                                        },
                                        {
                                            x: 1020,
                                            y: 255,
                                            year: "2020",
                                            label: "EXPLORE INDONESIAN MARKET",
                                        },
                                        {
                                            x: 1142,
                                            y: 160,
                                            year: "2022",
                                            label: "EXPLORE UAE MARKET",
                                        },
                                    ].map((milestone, i) => {
                                        // Calculate tooltip position - place above bubble with minimum distance from top
                                        const tooltipY = Math.max(milestone.y - 140, 40);
                                        const arrowEndY = milestone.y - 60;

                                        // Determine tooltip dimensions based on text length
                                        const isLongText = milestone.label.length > 35;
                                        const tooltipWidth = isLongText ? 280 : 200;
                                        const tooltipHeight = isLongText ? 60 : 40;
                                        const tooltipX = milestone.x - tooltipWidth / 2;

                                        return (
                                            <g key={i} className="group">
                                                {/* Bubble */}
                                                <circle
                                                    cx={milestone.x}
                                                    cy={milestone.y}
                                                    r="10"
                                                    className="fill-blue-200 stroke-blue-200 stroke-2 cursor-pointer group hover:fill-blue-500 hover:stroke-blue-400 hover:cursor-pointer duration-200 ease-in-out"
                                                    style={{ filter: "drop-shadow(0 0 6px #3B82F6)" }}
                                                />
                                                {/* Year */}
                                                <text
                                                    x={milestone.x}
                                                    y={milestone.y + 45}
                                                    textAnchor="middle"
                                                    className="fill-blue-700 text-sm font-semibold"
                                                >
                                                    {milestone.year}
                                                </text>
                                                {/* Tooltip Group */}
                                                <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {/* Arrow */}
                                                    <path
                                                        d={`M${milestone.x},${tooltipY + tooltipHeight} L${milestone.x
                                                            },${arrowEndY}`}
                                                        stroke="#3B82F6"
                                                        strokeWidth="2"
                                                        markerEnd="url(#arrowhead)"
                                                    />
                                                    {/* Tooltip Background */}
                                                    <rect
                                                        x={tooltipX}
                                                        y={tooltipY}
                                                        width={tooltipWidth}
                                                        height={tooltipHeight}
                                                        rx="8"
                                                        ry="8"
                                                        fill="white"
                                                        stroke="#3B82F6"
                                                        strokeWidth="1"
                                                        className="drop-shadow-md"
                                                    />
                                                    {/* Tooltip Text */}
                                                    <foreignObject
                                                        x={tooltipX + 8}
                                                        y={tooltipY + 8}
                                                        width={tooltipWidth - 16}
                                                        height={tooltipHeight - 16}
                                                    >
                                                        <div className="text-xs font-medium text-blue-600 text-center px-2 leading-tight flex items-center justify-center h-full">
                                                            {milestone.label}
                                                        </div>
                                                    </foreignObject>
                                                </g>
                                            </g>
                                        );
                                    })}
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
