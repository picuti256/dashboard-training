'use client';
import { usePathname } from 'next/navigation';
import {
	MdNotifications,
	MdOutlineChat,
	MdPublic,
	MdSearch,
} from 'react-icons/md';

export default function Navbar() {
	const pathname = usePathname();
	return (
		<div className="flex justify-between items-center p-5 rounded-xl bg-primary-soft">
			<div className="text-textSoft-color font-bold capitalize">
				{pathname.split('/').pop()}
			</div>
			<div className="flex items-center gap-5">
				<div className="flex items-center gap-2.5 bg-[#2e374a] ">
					<MdSearch />
					<input
						type="text"
						placeholder="Search..."
						className=""
					/>
				</div>
				<div className="">
					<MdOutlineChat size={20} />
					<MdNotifications size={20} />
					<MdPublic size={20} />
				</div>
			</div>
		</div>
	);
}
