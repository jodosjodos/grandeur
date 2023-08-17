import React, { useState, useEffect } from 'react';

const CursorCircle = () => {
        const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

        const updateCursorPosition = (e: any) => {
                const x = e.clientX || e.touches[0].clientX;
                const y = e.clientY || e.touches[0].clientY;
                setCursorPosition({ x, y });
        };

        useEffect(() => {
                document.addEventListener('mousemove', updateCursorPosition);
                document.addEventListener('touchmove', updateCursorPosition);

                return () => {
                        document.removeEventListener('mousemove', updateCursorPosition);
                        document.removeEventListener('touchmove', updateCursorPosition);
                };
        }, []);

        useEffect(() => {
                const handleScroll = () => {
                        setCursorPosition((prevPosition) => ({
                                x: prevPosition.x + window.scrollX,
                                y: prevPosition.y + window.scrollY,
                        }));
                };

                window.addEventListener('scroll', handleScroll);

                return () => {
                        window.removeEventListener('scroll', handleScroll);
                };
        }, []);

        return (
                <div
                        className="absolute w-10 h-10 bg-orange-500 rounded-full pointer-events-none"
                        style={{
                                left: cursorPosition.x - 5 + 'px',
                                top: cursorPosition.y - 5 + 'px',
                        }}
                ></div>
        );
};

export default CursorCircle;
