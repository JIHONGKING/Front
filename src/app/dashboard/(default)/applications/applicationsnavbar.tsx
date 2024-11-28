"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import applications from "./data";

export default function ApplicationsNavbar() {
	const pathname = usePathname();
	const numSubmitted = applications.filter(
		(x) => x.status == "submitted"
	).length;
	const numDraft = applications.filter((x) => x.status == "draft").length;
	const numArchive = applications.filter((x) => x.status == "archive").length;
	const navbuttons = [
		{
			label: "Submitted",
			link: "/dashboard/applications",
			num: numSubmitted,
		},
		{
			label: "Draft",
			link: "/dashboard/applications/draft",
			num: numDraft,
		},
		{
			label: "Archive",
			link: "/dashboard/applications/archive",
			num: numArchive,
		},
	];
	return (
		<div className="h-[40px] px-[30px] space-x-[50px] flex flex-row border-b-2">
			{navbuttons.map((navbutton, i) => (
				<Link
					href={navbutton.link}
					className={`w-[110px] flex flex-row items-center justify-center border-primary ${
						pathname == navbutton.link ? "border-b-2" : null
					}`}
				>
					{navbutton.label} ({navbutton.num})
				</Link>
			))}
		</div>
	);
}
