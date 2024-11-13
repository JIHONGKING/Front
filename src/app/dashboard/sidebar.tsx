"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashIcon from "@/assets/dashicon";
import ProfileIcon from "@/assets/profileicon";
import AIIcon from "@/assets/aiicon";
import WorkIcon from "@/assets/workicon";
import ApplicationIcon from "@/assets/applicationicon";
import SettingsIcon from "@/assets/settingsicon";
import CollapseIcon from "@/assets/collapseicon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const [openItem, setOpenItem] = useState("dashboard");
	return (
		<nav
			className={`p-[30px] w-[300px] h-[calc(100vh-60px)] bg-primary-background flex flex-col shrink-0 justify-between ${
				collapsed ? "max-w-0 px-0" : ""
			} transition-all`}
		>
			<div className="w-full space-y-8 flex flex-col items-center">
				<Link
					href="/dashboard"
					className="w-full"
					onClick={() => setOpenItem("dashboard")}
				>
					<Button
						variant={
							openItem == "dashboard" ? "dashnav" : "dashnavnop"
						}
						className="h-[44px] space-x-4 w-full"
					>
						<DashIcon
							className={
								openItem == "dashboard"
									? "stroke-primary-background"
									: "stroke-primary-foreground"
							}
						/>
						<p> My Dashboard</p>
					</Button>
				</Link>
				<Separator className="w-1/2" />
				<section className="flex flex-col space-y-2 w-full">
					<Link
						href="/dashboard/profile"
						className="w-full"
						onClick={() => setOpenItem("profile")}
					>
						<Button
							variant={
								openItem == "profile" ? "dashnav" : "dashnavnop"
							}
							className="h-[44px] space-x-4 w-full"
						>
							<ProfileIcon
								className={
									openItem == "profile"
										? "fill-primary-background"
										: "fill-primary-foreground"
								}
							/>
							<p> My Profile</p>
						</Button>
					</Link>
					<Link
						href="/dashboard/analysis"
						className="w-full"
						onClick={() => setOpenItem("analysis")}
					>
						<Button
							variant={
								openItem == "analysis"
									? "dashnav"
									: "dashnavnop"
							}
							className="h-[44px] space-x-4 w-full"
						>
							<AIIcon
								className={
									openItem == "analysis"
										? "fill-primary-background"
										: "fill-primary-foreground"
								}
							/>
							<p>Analysis</p>
						</Button>
					</Link>
					<Link
						href="/dashboard/jobs"
						className="w-full"
						onClick={() => setOpenItem("jobs")}
					>
						<Button
							variant={
								openItem == "jobs" ? "dashnav" : "dashnavnop"
							}
							className="h-[44px] space-x-4 w-full"
						>
							<WorkIcon
								className={
									openItem == "jobs"
										? "fill-primary-background"
										: "fill-primary-foreground"
								}
							/>
							<p>Job Search</p>
						</Button>
					</Link>
					<Link
						href="/dashboard/applications"
						className="w-full"
						onClick={() => setOpenItem("applications")}
					>
						<Button
							variant={
								openItem == "applications"
									? "dashnav"
									: "dashnavnop"
							}
							className="h-[44px] space-x-4 w-full"
						>
							<ApplicationIcon
								className={
									openItem == "applications"
										? "fill-primary-background"
										: "fill-primary-foreground"
								}
							/>
							<p>My Applications</p>
						</Button>
					</Link>
					<Link
						href="/dashboard/settings"
						className="w-full"
						onClick={() => setOpenItem("settings")}
					>
						<Button
							variant={
								openItem == "settings"
									? "dashnav"
									: "dashnavnop"
							}
							className="h-[44px] space-x-4 w-full"
						>
							<SettingsIcon
								className={
									openItem == "settings"
										? "fill-primary-background"
										: "fill-primary-foreground"
								}
							/>
							<p>Settings</p>
						</Button>
					</Link>
				</section>
			</div>
			<Button
				variant="dashnavnop"
				className="space-x-4"
				onClick={() => setCollapsed(true)}
			>
				<CollapseIcon className="stroke-primary-foreground" />
				<p>Collapse Sidebar</p>
			</Button>
		</nav>
	);
}
