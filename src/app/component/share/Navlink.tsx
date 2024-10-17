"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the prop types for NavLink
interface NavLinkProps {
    children: React.ReactNode;
    href: string;
    activeClassName: string;
    nonActiveClassName: string;
    className?: string; // Optional prop
}

const Navlink: React.FC<NavLinkProps> = ({
    children,
    href,
    activeClassName,
    nonActiveClassName,
    className = '',
    ...rest
}) => {
    const pathname = usePathname();
    const isActive = pathname === href; // Check if current path matches href
    const newClassName = `${isActive ? activeClassName : nonActiveClassName} ${className}`;

    return (
        <Link href={href} className={newClassName} {...rest}>
            {children}
        </Link>
    );
};

export default Navlink;
