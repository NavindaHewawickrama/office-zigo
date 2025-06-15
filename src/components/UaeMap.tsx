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

        { name: 'Colombo', x: 38, y: 68, width: 8, height: 5 },

        { name: 'Abu Dhabi', x: 38, y: 72, width: 10, height: 8 },
        { name: 'Abu Dhabi', x: 48, y: 72, width: 15, height: 5 },

        { name: 'Abu Dhabi', x: 40, y: 80, width: 15, height: 8 },
        { name: 'Hambantota', x: 55, y: 78, width: 15, height: 8 },
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
                    className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full
               bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600
               text-white px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border border-white/10
               transition-all duration-300 ease-out animate-fade-slide"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y - 105,
                    }}
                >
                    <div className="text-sm font-semibold">{hoveredDistrict.name}</div>

                    {/* Longer arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-[6px] border-r-[6px] border-t-[100px] border-transparent 
                    border-t-blue-600"></div>
                </div>
            )}

        </div>
    );
};

export default UaeMap;