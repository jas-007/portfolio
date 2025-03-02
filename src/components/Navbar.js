import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        // Toggle body scroll
        document.body.classList.toggle('dropdown-open', !isOpen);
    };

    // Clean up when component unmounts
    useEffect(() => {
        return () => {
            document.body.classList.remove('dropdown-open');
        };
    }, []);

    return (
        <div>
            {/* Rest of the component code */}
        </div>
    );
};

export default Navbar; 