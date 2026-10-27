import Link from 'next/link';
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
	return (
		<Link
			href={item.path}
			className=""
		>
			{item.icon}
			{item.title}
		</Link>
	);
}
