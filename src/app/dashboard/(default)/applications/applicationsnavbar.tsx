"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ApplicationsNavbar() {
	const pathname = usePathname();
	const navbuttons = [
		{ label: "Submitted", link: "/dashboard/applications" },
		{ label: "Draft", link: "/dashboard/applications/draft" },
		{ label: "Archive", link: "/dashboard/applications/archive" },
	];
	return (
		<div className="h-[40px] px-[30px] space-x-[50px] flex flex-row">
			{navbuttons.map((navbutton, i) => (
				<Link
					href={navbutton.link}
					className={`w-[110px] flex flex-row items-center justify-center ${
						pathname == navbutton.link ? "border-b" : null
					}`}
				>
					{navbutton.label}{" "}
				</Link>
			))}
		</div>
	);
}
