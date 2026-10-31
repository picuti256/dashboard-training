'use client';
import {
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	createHorizontalChart,
} from 'recharts';

interface VisitData {
	name: string;
	visit: number;
	click: number;
}

const visits: VisitData[] = [
	{ name: 'Mon', visit: 2200, click: 2800 },
	{ name: 'Tue', visit: 3100, click: 3450 },
	{ name: 'Wed', visit: 2500, click: 2900 },
	{ name: 'Thu', visit: 2790, click: 3213 },
	{ name: 'Fri', visit: 3400, click: 3900 },
	{ name: 'Sat', visit: 4100, click: 4600 },
	{ name: 'Sun', visit: 3800, click: 4200 },
];

const Typed = createHorizontalChart<string, number>()({
	XAxis,
	YAxis,
	Tooltip,
	Line,
});

export default function Chart(): React.JSX.Element {
	return (
		<div className="bg-primary-soft p-5 rounded-xl w-full">
			<h2 className="mb-5 font-light text-textSoft-color text-2xl">
				Weekly Report
			</h2>
			<Typed.LineChart
				style={{
					width: '100%',
					height: '100%',
					maxHeight: '45vh',
					aspectRatio: 1.618,
				}}
				responsive
				data={visits}
				margin={{
					top: 5,
					right: 20,
					left: 0,
					bottom: 5,
				}}
			>
				<Typed.XAxis dataKey="name" />
				<Typed.YAxis width="auto" />
				<Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
				<Legend />
				<Typed.Line
					type="monotone"
					dataKey="visit"
					stroke="#8884d8"
					name="Visits"
				/>
				<Typed.Line
					type="monotone"
					dataKey="click"
					stroke="#82ca9d"
					name="Clicks"
				/>
			</Typed.LineChart>
		</div>
	);
}
