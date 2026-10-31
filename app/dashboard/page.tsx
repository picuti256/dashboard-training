import Card from './card';
import Chart from './chart';
import RighBar from './righBar';
import Transactions from './transaction';

export default function Dashboard() {
	return (
		<div className="flex gap-5 mt-5">
			<div className="flex-3 flex flex-col gap-5">
				<div className="flex justify-between gap-5">
					<Card />
					<Card />
					<Card />
				</div>
				<Transactions />
				<Chart />
			</div>
			<div className="flex-1">
				<RighBar />
			</div>
		</div>
	);
}
