import React, { useState } from 'react';
import Image from 'next/image';

// Define the District type
interface District {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

const UaeMap = () => {
    const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // District coordinates and names (approximate positions based on typical Sri Lanka map)
    const districts: District[] = [
        { name: 'Umm-AL-Quwain', x: 75, y: 35, width: 4, height: 2 },
        { name: 'Ajman', x: 72, y: 38, width: 3, height: 2 },
        { name: 'Sharajh', x: 75, y: 40, width: 7, height: 12 },
        { name: 'Dubai', x: 66, y: 45, width: 10, height: 12 },
        { name: 'Al-Ain', x: 63, y: 58, width: 15, height: 12 },

        { name: 'Abu Dhabi', x: 52, y: 52, width: 12, height: 8 },
        { name: 'Abu Dhabi', x: 45, y: 60, width: 10, height: 8 },

        { name: 'Abu Dhabi', x: 58, y: 68, width: 10, height: 8 },
        { name: 'Abu Dhabi', x: 58, y: 58, width: 5, height: 8 },
        { name: 'Abu Dhabi', x: 52, y: 68, width: 5, height: 8 },


        { name: 'Abu Dhabi', x: 38, y: 72, width: 10, height: 8 },
        { name: 'Abu Dhabi', x: 48, y: 72, width: 15, height: 5 },

        { name: 'Abu Dhabi', x: 40, y: 80, width: 15, height: 8 },
    ];

    const handleMouseEnter = (district: District, event: React.MouseEvent<SVGRectElement>) => {
        setHoveredDistrict(district);
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event: React.MouseEvent<SVGRectElement>) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setHoveredDistrict(null);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "60%" }}>
                {/* Base Map Image */}
                <Image
                    src="/images/uaemapNew.png"
                    alt="Sri Lanka Distribution Network Map"
                    className="absolute inset-0 w-full h-full object-contain"
                    width={800}
                    height={800}
                />

                {/* Interactive SVG Overlay */}
                <svg
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {districts.map((district, index) => (
                        <rect
                            key={index}
                            x={`${district.x}%`}
                            y={`${district.y}%`}
                            width={`${district.width}%`}
                            height={`${district.height}%`}
                            fill="transparent"
                            stroke="transparent"
                            strokeWidth="0.5"
                            // className="hover:fill-red-50 hover:stroke-red-600 transition-all duration-200 cursor-pointer"
                            className='transition-all duration-200 cursor-pointer'
                            onMouseEnter={(e) => handleMouseEnter(district, e)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </svg>
            </div>

            {/* Tooltip */}
            {hoveredDistrict && (
                <div
                    className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y - 10,
                    }}
                >
                    <div
                        className="relative animate-bounce-in"
                        style={{
                            animation: "bounceIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                        }}
                    >
                        {/* Glowing background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-md opacity-75 animate-pulse" />

                        {/* Main tooltip */}
                        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden">
                            {/* Animated shine effect */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                style={{
                                    animation: "shine 2s ease-in-out infinite",
                                    transform: "translateX(-100%)",
                                }}
                            />
                            <div className="relative z-10">
                                <div
                                    className="text-lg font-bold mb-1"
                                    style={{
                                        animation: "typewriter 0.8s steps(20) 0.2s both",
                                    }}
                                >
                                    {hoveredDistrict.name}
                                </div>
                                <div className="text-sm opacity-90">📍 District Region</div>
                            </div>

                            <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-70 animate-ping" />
                            <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" />
                        </div>
                        {/* Longer arrow */}
                        <div className="flex justify-center">
                            <div
                                className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[25px] border-transparent border-t-blue-600 relative"
                                style={{
                                    filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))",
                                    animation: "arrowBounce 1s ease-in-out infinite alternate",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default UaeMap;