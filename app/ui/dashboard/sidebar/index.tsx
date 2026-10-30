import {
	MdAnalytics,
	MdAttachMoney,
	MdDashboard,
	MdHelpCenter,
	MdOutlineSettings,
	MdPeople,
	MdShoppingBag,
	MdSupervisedUserCircle,
	MdWork,
} from 'react-icons/md';
import MenuLink from './menuLink';
import Image from 'next/image';

const menuItems = [
	{
		title: 'Pages',
		list: [
			{ title: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
			{
				title: 'Users',
				path: '/dashboard/users',
				icon: <MdSupervisedUserCircle />,
			},
			{ title: 'Products', path: '/dashboard/products', icon: <MdShoppingBag /> },
			{
				title: 'Transactions',
				path: '/dashboard/transactions',
				icon: <MdAttachMoney />,
			},
		],
	},
	{
		title: 'Analytics',
		list: [
			{ title: 'Revenue', path: '/dashboard/revenue', icon: <MdWork /> },
			{ title: 'Reports', path: '/dashboard/reports', icon: <MdAnalytics /> },
			{ title: 'Teams', path: '/dashboard/teams', icon: <MdPeople /> },
		],
	},
	{
		title: 'User',
		list: [
			{
				title: 'Settings',
				path: '/dashboard/settings',
				icon: <MdOutlineSettings />,
			},
			{ title: 'Help', path: '/dashboard/help', icon: <MdHelpCenter /> },
		],
	},
];

export default function Sidebar() {
	return (
		<div className="sticky top-10">
			<div className="flex items-center gap-5 mb-5">
				<Image
					src="/noavatar.png"
					alt=""
					width="50"
					height="50"
					className="rounded-4xl object-cover"
					loading="lazy"
				/>
				<div className="flex flex-col">
					<span className="font-medium">John Doe</span>
					<span className="text-xs text-textSoft-color">Administrator</span>
				</div>
			</div>
			<ul className="list-none ">
				{menuItems.map((cat) => (
					<li
						key={cat.title}
						className="text-textSoft-color font-bold text-xs my-2.5 mx-0"
					>
						<span>{cat.title}</span>
						{cat.list.map((item) => (
							<MenuLink
								key={item.path}
								item={item}
							/>
						))}
					</li>
				))}
			</ul>
		</div>
	);
}
