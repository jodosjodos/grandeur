import React, { useEffect, useState } from 'react'

interface Props {
        styles: string,
        children: React.ReactNode
}

const StyledText: React.FC<Props> = ({ styles, children }) => {
        const [width, setWidth] = useState('50vw');

        useEffect(() => {
                const handleScroll = () => {
                        const scrollPosition = window.scrollY;
                        const windowHeight = window.innerHeight;
                        setWidth(`${50 + (scrollPosition * 50) / windowHeight}vw`);
                };

                window.addEventListener('scroll', handleScroll);

                handleScroll();
                console.log(width)

                return () => {
                        window.removeEventListener('scroll', handleScroll);
                };
        });
        return (
                <div className={`${styles} relative`}>
                        <p >{children}</p>
                        <div className={`absolute h-full bg-red-900 opacity-100 top-0 right-0  w-[${width}]`} ></div>
                </div>
        )
}

export default StyledText