import Link from "next/link";
import applications from "./data";
export default function Applications({ status }: { status: string }) {
	const curDate = new Date();
	return (
		<div className="flex flex-row space-x-4 flex-wrap">
			{applications
				.filter((x) => x.status == status)
				.map((app, idx) => (
					<div
						key={idx}
						className="h-[170px] w-[300px] rounded-lg border-4 border-background-light p-5 flex flex-col justify-between"
					>
						<div className="space-y-2">
							<h1>
								{app.title} -{" "}
								<span className="text-primary-foreground text-opacity-50">
									{app.company}
								</span>
							</h1>
							<p className="text-sm text-primary-foreground text-opacity-50">
								Updated{" "}
								{Math.floor(
									Math.abs(
										new Date(app.updatedAt).getTime() -
											curDate.getTime()
									) /
										(1000 * 3600 * 24)
								)}{" "}
								days ago
							</p>
							<p className="text-sm font-medium bg-[#FFC6394D] max-w-fit">
								{app.status}
							</p>
						</div>
						<Link href={""} className="text-primary text-sm">
							View application
						</Link>
					</div>
				))}
		</div>
	);
}
