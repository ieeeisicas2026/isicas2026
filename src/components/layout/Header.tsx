import React, { useState } from 'react';
import Logo from '../../assets/icons/logo.svg?raw';
import MenuIcon from '../../assets/icons/menu.svg?raw';
import XIcon from '../../assets/icons/x.svg?raw';
import classNames from 'classnames';

const Header: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 z-50 drop-shadow-xl">
            <div className="relative z-10 container">
                <nav className="relative flex items-center justify-between py-6 md:py-8">
                    <a href="/" className="flex" aria-label="Home page">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: Logo,
                            }}
                            className={classNames('w-[140px]', {
                                'max-md:grayscale max-md:brightness-0 max-md:invert':
                                    showMobileMenu,
                            })}
                        />
                    </a>
                    <div className="flex items-center gap-5 md:gap-8">
                        <div
                            className={`header--nav gap-6 text-xl ${showMobileMenu ? '' : 'max-md:hidden'} max-md:text-white max-md:absolute max-md:left-0 max-md:-bottom-6 max-md:translate-y-full max-md:w-full md:text-appGray-700 md:text-base`}
                        >
                            <ul className="flex flex-col gap-x-4 md:flex-row">
                                <li className="flex items-center gap-4">
                                    <a
                                        href="#about"
                                        className="flex leading-none py-2 transition-colors duration-300 md:hover:text-appText"
                                        onClick={() =>
                                            setShowMobileMenu((prevState) => !prevState)
                                        }
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 md:before:w-1 md:before:h-1 md:before:mt-1 md:before:rounded-full md:before:bg-appGray-700">
                                    <a
                                        href="#registration"
                                        className="flex leading-none py-2 transition-colors duration-300 md:hover:text-appText"
                                        onClick={() =>
                                            setShowMobileMenu((prevState) => !prevState)
                                        }
                                    >
                                        Registration
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 md:before:w-1 md:before:h-1 md:before:mt-1 md:before:rounded-full md:before:bg-appGray-700">
                                    <a
                                        href="#speakers"
                                        className="flex leading-none py-2 transition-colors duration-300 md:hover:text-appText"
                                        onClick={() =>
                                            setShowMobileMenu((prevState) => !prevState)
                                        }
                                    >
                                        Speakers
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 md:before:w-1 md:before:h-1 md:before:mt-1 md:before:rounded-full md:before:bg-appGray-700">
                                    <a
                                        href="#agenda"
                                        className="flex leading-none py-2 transition-colors duration-300 md:hover:text-appText"
                                        onClick={() =>
                                            setShowMobileMenu((prevState) => !prevState)
                                        }
                                    >
                                        Agenda
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button
                            className="flex md:hidden"
                            aria-label="Toggle mobile menu"
                            onClick={() =>
                                setShowMobileMenu((prevState) => !prevState)
                            }
                        >
                            {showMobileMenu ? (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: XIcon,
                                    }}
                                    className={classNames('w-6 h-6', {
                                        'max-md:grayscale max-md:brightness-0 max-md:invert':
                                            showMobileMenu,
                                    })}
                                />
                            ) : (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: MenuIcon,
                                    }}
                                    className="w-6 h-6"
                                />
                            )}
                        </button>
                    </div>
                </nav>
            </div>
            {showMobileMenu && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-appText md:hidden" />
            )}
        </header>
    );
};

export default Header;
