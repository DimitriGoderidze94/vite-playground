import React, { useState } from 'react';

interface TooltipProps {
    content: string | React.ReactNode;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                className="cursor-pointer"
            >
                {children}
            </div>

            {isVisible && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;