"use client";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Production() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Production & Distribution | Zigo Technology (Pvt) Ltd.</title>
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
          {/* Background manufacturing image */}
          <div className="absolute inset-0 z-0 h-70 sm:h-100">
            <Image
              src="/images/production_background.webp"
              alt="Manufacturing Floor Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 text-start text-white">
            {/* Header text */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 mt-3">
              PRODUCTION AND DISTRIBUTION
            </h1>

            {/* Actual content about production */}
            <p className="max-w-4xl text-sm sm:text-xl">
              Zigo Technology (Private) Limited follows a{" "}
              <span className="font-bold">direct distribution </span>
              model to supply its brands{" "}
              <span className="font-bold">OMS, Onesam, and Xpert </span>across
              Sri Lanka. Instead of using an in-house distribution team, the
              company partners with a trusted courier service, to ensure fast
              and reliable product delivery nationwide.
            </p>
          </div>
        </div>

        {/* Manufacturing Plant Section */}
        <div className="bg-white py-8 sm:py-12 mt-2 md:mt-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="container mx-auto px-4 sm:px-8 md:px-16 pt-4 pb-2"
          >
            <ol className="flex items-center space-x-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-1">/</span>
              </li>
              <li>
                <Link
                  href="/pages/production"
                  className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                >
                  Production
                </Link>
              </li>
            </ol>
          </nav>

          {/* Decorative Line */}
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            <div className="h-[3px] w-full bg-blue-200 rounded-md"></div>
          </div>

          <div className="bg-white py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-8 md:px-16">
              <div className="py-4">
                <div className="flex flex-col items-start">
                  <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row items-start sm:items-center sm:gap-6 ml-[-12]">
                    <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                      M A N U F A C T U R I N G
                    </h2>
                    <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                      P L A N T
                    </h2>
                  </div>

                  {/* Manufacturing Plant Image */}
                  <div className="w-full relative h-48 sm:h-64 md:h-96 mb-8 sm:mb-10">
                    <Image
                      src="/images/manufaturing_plant.jpg"
                      alt="Zigo Technology Manufacturing Plant"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Enhanced Manufacturing Process Content */}
                  <div className="w-full rounded-2xl p-6 sm:p-8 md:p-10">
                    <div className="mb-6">
                      <h3 className="text-blue-900 text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                        Our Manufacturing Excellence
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        The <strong>manufacturing process</strong> is a
                        systematic approach to transforming raw materials into
                        finished products through various stages of production.
                        The process typically involves several key steps to
                        ensure efficiency, quality, and consistency. Below is a
                        general outline of the{" "}
                        <strong>manufacturing process:</strong>
                      </p>
                    </div>

                    {/* Process Steps Grid - Updated to match Home page layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {/* Step 1 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            1
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-blue-800 text-base sm:text-lg mb-2 uppercase">
                              PRODUCT DESIGN & DEVELOPMENT
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Before manufacturing begins, engineers and
                              designers develop product blueprints, prototypes,
                              and specifications. This phase involves research,
                              testing, and refinement to ensure the final
                              product meets customer needs and industry
                              standards.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            2
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-green-800 text-base sm:text-lg mb-2 uppercase">
                              MATERIAL SELECTION & PROCUREMENT
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              The right materials are chosen based on
                              durability, cost, and functionality. Manufacturers
                              source raw materials from suppliers, ensuring they
                              meet quality standards and regulatory
                              requirements.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            3
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2 uppercase">
                              PRODUCTION & MANUFACTURING
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                              Depending on the industry and product, the
                              production process includes casting & molding for
                              metal, plastic, and rubber components, machining &
                              cutting for precision shaping, and assembly &
                              fabrication combining components using welding,
                              soldering, or adhesives.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-red-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            4
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-red-800 text-base sm:text-lg mb-2 uppercase">
                              QUALITY CONTROL & TESTING
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Each product undergoes quality inspections to meet
                              industry standards and customer expectations. This
                              may include functional tests, durability
                              assessments, and compliance checks.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-yellow-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            5
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-yellow-800 text-base sm:text-lg mb-2 uppercase">
                              PACKAGING & LABELING
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Once approved, products are packaged for
                              protection during transport and storage. Proper
                              labeling ensures accurate identification,
                              branding, and regulatory compliance.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 6 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            6
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-indigo-800 text-base sm:text-lg mb-2 uppercase">
                              DISTRIBUTION & LOGISTICS
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Finished goods are shipped to warehouses,
                              retailers, or customers through a well-planned
                              supply chain. Inventory management and logistics
                              play a crucial role in timely delivery.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 7 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-teal-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            7
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-teal-800 text-base sm:text-lg mb-2 uppercase">
                              AFTER-SALES SUPPORT & MAINTENANCE
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Some products, such as electronics or machinery,
                              require warranties, customer service, and
                              maintenance support. This ensures customer
                              satisfaction and product longevity.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" h-[3px] w-11/12 bg-blue-200 rounded-md mx-auto"></div>
        </div>
        {/* Distribution Network Section */}
        <div className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            <div className="py-4">
              <div className="flex flex-col items-start">
                <div className="mb-6 sm:mb-5 w-full">
                  <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                    DISTRIBUTION NETWORK
                  </h2>
                  <div className="w-24 h-1 rounded-full"></div>
                </div>

                {/* Distribution Content */}
                <div className="w-full">
                  {/* Introduction */}
                  <div className="mb-8">
                    <div className="rounded-xl p-6">
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Zigo Technology (Private) Limited operates through an
                        innovative <strong>direct distribution </strong>
                        model, delivering our premium brands{" "}
                        <strong>OMS, Onesam, and Xpert </strong>
                        efficiently across Sri Lanka. By partnering with trusted
                        courier services instead of maintaining in-house
                        distribution teams, we ensure rapid, reliable product
                        delivery to every corner of the nation.
                      </p>
                    </div>
                  </div>

                  {/* How Distribution Works */}
                  <div className="mb-6">
                    <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                      HOW THE DISTRIBUTION WORKS
                    </h3>

                    {/* Grid container for distribution steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {/* Direct Order Processing */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-green-800 text-base sm:text-lg mb-2 uppercase">
                              Direct Order Processing
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Retailers, mobile accessory shops, and corporate
                              clients place orders directly with{" "}
                              <strong>Zigo Technology.</strong> This eliminates
                              intermediaries and ensures customers receive
                              authentic products at competitive prices.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Courier-Based Delivery */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h.5a2.5 2.5 0 012.5 2.5V12a2.5 2.5 0 01-2.5 2.5H17v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5H5.5A2.5 2.5 0 013 12V9.5A2.5 2.5 0 015.5 7H8z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-blue-800 text-base sm:text-lg mb-2 uppercase">
                              Courier-Based Delivery
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Once an order is processed, the products are
                              dispatched using <strong>courier service.</strong>{" "}
                              This enables efficient and timely delivery to
                              retailers across{" "}
                              <strong>all regions of Sri Lanka, </strong>
                              including urban and rural areas.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Centralized Inventory */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2 uppercase">
                              Centralized Inventory Management
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Zigo Technology operates a{" "}
                              <strong>centralized warehouse </strong>
                              where all OMS, Onesam, and Xpert products are
                              stored and dispatched. Orders are packed and
                              shipped directly from this facility, ensuring
                              stock accuracy and quick turnaround times.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Retail and Corporate Supply */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-amber-800 text-base sm:text-lg mb-2 uppercase">
                              Retail & Corporate Supply
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              The company directly supplies{" "}
                              <strong>
                                mobile accessory shops, repair centers, and
                                corporate clients{" "}
                              </strong>
                              with bulk and individual orders. This direct model
                              strengthens business relationships and maintains
                              consistent product quality.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        <strong>By leveraging logistics network,</strong> Zigo
                        Technology ensures
                        <strong> fast, secure, and efficient </strong> product
                        distribution across Sri Lanka while maintaining complete
                        control over its supply chain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-[3px] w-11/12 bg-blue-200 rounded-md mx-auto"></div>
        </div>

        {/* Local Distribution Section */}
        <div className="py-4 sm:py-6 md:py-8 relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold text-start">
                LOCAL DISTRIBUTION
              </h2>
            </div>

            <div className="relative w-full h-64 sm:h-96 md:h-128">
              <Image
                src="/images/distribution_network.jpg"
                alt="Sri Lanka Distribution Network Map"
                fill
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-8 h-[3px] w-11/12 bg-blue-200 rounded-md mx-auto"></div>
        </div>
        {/* International Distribution Section */}
        <div className="py-4 sm:py-6 md:py-8 relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold text-start">
                INTERNATIONAL DISTRIBUTION
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Middle East Map */}
              <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-96">
                <Image
                  src="/images/international_distribution.png"
                  alt="International Distribution Network Map"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Country information */}
              <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">
                {/* UAE Section */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-medium mb-2 sm:mb-4">
                    UAE
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisi at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                </div>

                {/* Oman Section */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-medium mb-2 sm:mb-4">
                    Oman
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisi at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy
                  </p>
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