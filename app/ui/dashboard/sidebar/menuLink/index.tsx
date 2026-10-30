'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface MenuItem {
	title: string;
	path: string;
	icon: ReactNode;
}

interface MenuLinkProps {
	item: MenuItem;
}

export default function MenuLink({ item }: MenuLinkProps) {
	const pathname = usePathname();

	return (
		<Link
			href={item.path}
			className={`p-5 flex items-center gap-2.5 my-2.5 rounded-lg hover:bg-[#2e374a] ${pathname === item.path && 'bg-[#2e374a]'}`}
		>
			{item.icon}
			{item.title}
		</Link>
	);
}
