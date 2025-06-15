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

const SriLankaMap = () => {
    const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // District coordinates and names (approximate positions based on typical Sri Lanka map)
    const districts: District[] = [
        { name: 'Jaffna', x: 40, y: 25, width: 6, height: 6 },
        { name: 'Jaffna', x: 45, y: 16, width: 10, height: 6 },
        { name: 'Jaffna', x: 35, y: 8, width: 12, height: 8 },
        { name: 'Jaffna', x: 55, y: 22, width: 7, height: 6 },

        { name: 'Anuradhapura', x: 50, y: 25, width: 4, height: 22 },
        { name: 'Anuradhapura', x: 45, y: 30, width: 4, height: 14 },
        { name: 'Anuradhapura', x: 55, y: 30, width: 4, height: 8 },
        { name: 'Anuradhapura', x: 42, y: 36, width: 2, height: 6 },

        { name: 'Polonnaruwa', x: 60, y: 28, width: 3, height: 25 },
        { name: 'Polonnaruwa', x: 64, y: 32, width: 3, height: 20 },
        { name: 'Polonnaruwa', x: 56, y: 40, width: 3, height: 12 },

        { name: 'Chilaw', x: 35, y: 40, width: 6, height: 12 },

        { name: 'Kurunagala', x: 40, y: 50, width: 10, height: 8 },
        { name: 'Kurunagala', x: 43, y: 43, width: 5, height: 5 },

        { name: 'Gampaha', x: 35, y: 58, width: 10, height: 8 },

        { name: 'Batticaloa', x: 68, y: 45, width: 10, height: 12 },
        { name: 'Ampara', x: 63, y: 58, width: 15, height: 12 },
        { name: 'Ampara', x: 63, y: 50, width: 5, height: 5 },
        { name: 'Ampara', x: 72, y: 70, width: 5, height: 5 },

        { name: 'Kandy', x: 52, y: 52, width: 8, height: 8 },
        { name: 'Kandy', x: 45, y: 60, width: 10, height: 8 },

        { name: 'Badulla', x: 58, y: 68, width: 10, height: 8 },
        { name: 'Badulla', x: 58, y: 58, width: 5, height: 8 },
        { name: 'Badulla', x: 52, y: 68, width: 5, height: 8 },

        { name: 'Colombo', x: 38, y: 68, width: 8, height: 5 },

        { name: 'Kalutara', x: 38, y: 72, width: 10, height: 8 },
        { name: 'Kalutara', x: 48, y: 72, width: 5, height: 5 },

        { name: 'Matara', x: 40, y: 80, width: 15, height: 8 },
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
                    src="/images/srilanka.png"
                    alt="Sri Lanka Distribution Network Map"
                    className="absolute inset-0 w-full h-full object-contain p-4"
                    width={500}
                    height={500}
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
                            className=" transition-all duration-200 cursor-pointer"
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

export default SriLankaMap;