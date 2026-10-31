import { MdSupervisedUserCircle } from 'react-icons/md';

export default function Card() {
	return (
		<div className="bg-primary-soft p-5 rounded-xl flex gap-5 cursor-pointer w-full hover:bg-[#2e374a]">
			<MdSupervisedUserCircle size={24} />
			<div className="flex flex-col gap-5">
				<span className="font-bold text-3xl">Total Users</span>
				<span className="text-2xl font-bold">10.231</span>
				<span className="font-light">
					<span className="text-lime-300">10%</span> more than previous week
				</span>
			</div>
		</div>
	);
}
