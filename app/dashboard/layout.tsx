import React from 'react';
import Sidebar from '../ui/dashboard/sidebar';
import Navbar from '../ui/dashboard/navbar';

export default function Layout({ children }: LayoutProps<'/dashboard'>) {
	return (
		<div className="flex">
			<div className="flex-1 bg-primary-soft p-5">
				<Sidebar />
			</div>
			<div className="flex-4 p-5">
				<Navbar />
				{children}
			</div>
		</div>
	);
}
