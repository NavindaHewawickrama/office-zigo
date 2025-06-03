import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pro1 from "../../../../../public/images/products/OMS/OMS Products-1.png";
import pro2 from "../../../../../public/images/products/OMS/OMS Products-2.png";
import pro3 from "../../../../../public/images/products/OMS/OMS Products-3.png";
import pro4 from "../../../../../public/images/products/OMS/OMS Products-4.png";
import pro5 from "../../../../../public/images/products/OMS/OMS Products-5.png";
import pro6 from "../../../../../public/images/products/OMS/OMS Products-6.png";
import pro7 from "../../../../../public/images/products/OMS/OMS Products-7.png";
import pro8 from "../../../../../public/images/products/OMS/OMS Products-8.png";
import pro9 from "../../../../../public/images/products/OMS/OMS Products-9.png";
import pro10 from "../../../../../public/images/products/OMS/OMS Products-10.png";
import pro11 from "../../../../../public/images/products/OMS/OMS Products-11.png";
import pro12 from "../../../../../public/images/products/OMS/OMS Products-12.png";

export default function OMS() {
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
                    OMS
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
              {/* OMS */}
              <div className="flex-1 text-center justify-center mt-[-50]">
                <div className="flex justify-start mb-10">
                  <div className="w-2xl h-48  relative">
                    <Image
                      src="/images/Web site images-01.png"
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
                    <div className="py-10">
                      <h1 className="text-gray-700 font-bold text-4xl uppercase tracking-wide">
                        Products
                      </h1>
                    </div>
                  </div>
                  {/* Option 1: Clean Minimal Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 pb-12">
                    {[
                      pro1,
                      pro2,
                      pro3,
                      pro4,
                      pro5,
                      pro6,
                      pro7,
                      pro8,
                      pro9,
                      pro10,
                      pro11,
                      pro12,
                    ].map((product, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="relative w-full aspect-square bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-200">
                          <Image
                            src={product}
                            alt={`OMS Product ${index + 1}`}
                            fill
                            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="mt-3 text-center">
                          <p className="text-sm text-gray-600 font-medium">
                            Product {String(index + 1).padStart(2, "0")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>{" "}
                </div>{" "}
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
