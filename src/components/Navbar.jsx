import { useState, useEffect, memo } from "react";
import { Menu, X } from "lucide-react";
import PropTypes from 'prop-types';

// Flame Text Component
const FlameText = memo(({ text }) => (
    <div className="relative group">
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 
                       to-blue-500 animate-gradient-x bg-[length:200%_200%] 
                       font-semibold text-xl tracking-tight transition-all duration-300">
            {text}
        </span>
        
        {/* Flame particles - always visible */}
        <div className="absolute -top-4 left-0 right-0 h-8">
            {[...Array(6)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute bottom-0 rounded-full w-1.5 h-1.5"
                    style={{
                        left: `${10 + i * 15}%`,
                        backgroundColor: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#a855f7' : '#3b82f6',
                        animation: `flameRise ${0.9 + Math.random() * 0.8}s infinite ease-in-out`,
                        animationDelay: `${Math.random() * 0.5}s`
                    }}
                ></div>
            ))}
        </div>
    </div>
));

FlameText.propTypes = {
    text: PropTypes.string.isRequired
};

FlameText.displayName = 'FlameText';

// Memoized components
const NavLink = memo(({ href, label, isActive, onClick }) => (
    <li>
        <a
            href={href}
            onClick={onClick}
            className={`block py-2 px-3 text-sm md:text-base transition-all duration-200 ease-in-out relative ${
                isActive 
                    ? "text-white font-medium" 
                    : "text-gray-400 hover:text-white"
            }`}
        >
            {label}
            {isActive && (
                <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[2px] w-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"></span>
            )}
        </a>
    </li>
));

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

NavLink.displayName = 'NavLink';

const MobileMenu = memo(({ isOpen, navItems, activeSection, handleLinkClick }) => (
    <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-50 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
        <div className="container mx-auto px-6 py-8 flex flex-col h-full">
            <div className="flex justify-end">
                <button className="text-gray-300 hover:text-white" aria-label="Close menu">
                    <X className="w-6 h-6" />
                </button>
            </div>
            <div className="flex items-center justify-center flex-1">
                <ul className="space-y-8 text-center">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className={`text-2xl font-medium transition-all duration-200 ${
                                    activeSection === item.href.replace("#", "") 
                                        ? "text-white" 
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
));

MobileMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    activeSection: PropTypes.string.isRequired,
    handleLinkClick: PropTypes.func.isRequired
};

MobileMenu.displayName = 'MobileMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    
    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Portfolio", label: "Portfolio" },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? "py-3 bg-transparent backdrop-blur-sm" 
                    : "py-5 bg-transparent"
            }`}>
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo with Flame Effect */}
                    <a href="#Home" className="relative">
                        <FlameText text="MrArmaș" />
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8 items-center">
                            {navItems.map((item) => (
                                <NavLink 
                                    key={item.label} 
                                    href={item.href} 
                                    label={item.label} 
                                    isActive={activeSection === item.href.replace("#", "")}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                />
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="block md:hidden text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu 
                isOpen={isOpen} 
                navItems={navItems} 
                activeSection={activeSection}
                handleLinkClick={scrollToSection}
            />
        </>
    );
};

Navbar.displayName = 'Navbar';

export default memo(Navbar);