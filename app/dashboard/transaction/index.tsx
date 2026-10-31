import Image from 'next/image';

const transactionsData = [
	{
		id: 1,
		name: 'John Doe',
		status: 'Pending',
		date: '10/31/2026',
		amount: '$3.200',
		avatar: '/noavatar.png',
	},
	{
		id: 2,
		name: 'Jane Smith',
		status: 'Done',
		date: '10/31/2026',
		amount: '$1.500',
		avatar: '/noavatar.png',
	},
	{
		id: 3,
		name: 'Bob Johnson',
		status: 'Cancelled',
		date: '10/31/2026',
		amount: '$850',
		avatar: '/noavatar.png',
	},
];

export default function Transactions() {
	const getStatusStyle = (status: string) => {
		switch (status) {
			case 'Pending':
				return 'bg-[#f7cb7375]';
			case 'Done':
				return 'bg-[#afd6ee75]';
			case 'Cancelled':
				return 'bg-[#f7737375]';
			default:
				return 'bg-[#e214a432]';
		}
	};

	return (
		<div className="bg-primary-soft p-5 rounded-xl">
			<h2 className="mb-5 font-light text-textSoft-color text-2xl">
				Latest Transactions
			</h2>
			<table className="w-full tab-transaction">
				<thead>
					<tr>
						<td>Name</td>
						<td>Status</td>
						<td>Date</td>
						<td>Amount</td>
					</tr>
				</thead>
				<tbody>
					{transactionsData.map((transaction) => (
						<tr key={transaction.id}>
							<td>
								<div className="flex gap-2.5 items-center">
									<Image
										src={transaction.avatar}
										alt={`Avatar of ${transaction.name}`}
										width={40}
										height={40}
										className="object-cover rounded-full"
									/>
									{transaction.name}
								</div>
							</td>
							<td>
								<span
									className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusStyle(transaction.status)}`}
								>
									{transaction.status}
								</span>
							</td>
							<td>{transaction.date}</td>
							<td>{transaction.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
