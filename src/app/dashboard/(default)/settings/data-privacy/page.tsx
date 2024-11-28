"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SettingSectionProps {
	title: string;
	items: {
		name: string;
		description?: string;
		hasToggle?: boolean;
		defaultChecked?: boolean;
		onClick?: () => void;
	}[];
}

const SettingSection: React.FC<SettingSectionProps> = ({ title, items }) => {
	return (
		<div className="bg-white rounded-[13px]">
			<div className="p-5">
				<div className="mb-4">
					<h2 className="text-[20px] text-black font-medium font-['Rubik']">
						{title}
					</h2>
				</div>
				<div>
					{items.map((item, index) => (
						<div
							key={index}
							className="flex items-center justify-between py-3 cursor-pointer"
							onClick={item.onClick}
						>
							<div className="flex-1">
								<span className="text-[16px] text-black font-normal font-['Rubik']">
									{item.name}
								</span>
								{item.description && (
									<p className="text-sm text-gray-500 font-['Rubik'] mt-0.5">
										{item.description}
									</p>
								)}
							</div>
							{item.hasToggle ? (
								<div className="pr-2.5">
									<Switch
										defaultChecked={item.defaultChecked}
									/>
								</div>
							) : (
								<div className="flex items-center">
									<ChevronRight
										className="text-[#343A40] opacity-60 mr-2"
										size={20}
									/>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const DataPrivacyPage = () => {
	return (
		<ScrollArea className="h-full max-w-[800px]">
			<div className="bg-[#F5F6F8]">
				<div className="max-w-[789px]">
					<div className="space-y-[17px]">
						<SettingSection
							title="How uses your data"
							items={[
								{
									name: "Manage your data and activity",
									onClick: () =>
										console.log("Clicked manage data"),
								},
								{
									name: "Get a copy of your data",
									onClick: () =>
										console.log("Clicked get data copy"),
								},
								{
									name: "Search history",
									onClick: () =>
										console.log("Clicked search history"),
								},
								{
									name: "Personal demographic information",
									onClick: () =>
										console.log("Clicked demographic info"),
								},
								{
									name: "Social, economic, and workplace research",
									onClick: () =>
										console.log("Clicked research"),
								},
								{
									name: "Data for Generative AI improvement",
									onClick: () =>
										console.log("Clicked AI data"),
								},
							]}
						/>

						<SettingSection
							title="Who can reach you"
							items={[
								{
									name: "Invitations to connect",
									onClick: () =>
										console.log("Clicked invitations"),
								},
								{
									name: "Invitations from your network",
									onClick: () =>
										console.log(
											"Clicked network invitations"
										),
								},
								{
									name: "Messages",
									onClick: () =>
										console.log("Clicked messages"),
								},
								{
									name: "Research invites",
									onClick: () =>
										console.log("Clicked research invites"),
								},
							]}
						/>

						<SettingSection
							title="Messaging experience"
							items={[
								{
									name: "Focused inbox",
									onClick: () =>
										console.log("Clicked focused inbox"),
								},
								{
									name: "Read receipts and typing indicators",
									onClick: () =>
										console.log("Clicked read receipts"),
								},
								{
									name: "Messaging suggestions",
									onClick: () =>
										console.log("Clicked suggestions"),
								},
								{
									name: "Message nudges",
									onClick: () =>
										console.log("Clicked nudges"),
								},
								{
									name: "Automated detection of harmful content",
									onClick: () =>
										console.log("Clicked harmful content"),
								},
							]}
						/>

						<SettingSection
							title="Job seeking preferences"
							items={[
								{
									name: "Share your profile when you click Apply for a job",
									description: "Job application settings",
									hasToggle: true,
									defaultChecked: false,
								},
								{
									name: "Signal your interest to recruiters at companies you've created job alerts for",
									hasToggle: true,
									defaultChecked: true,
								},
								{
									name: "Shared job applicant accounts",
									onClick: () =>
										console.log("Clicked shared accounts"),
								},
							]}
						/>

						<SettingSection
							title="Other applications"
							items={[
								{
									name: "Microsoft Word",
									description: "Permitted services",
									hasToggle: true,
									defaultChecked: false,
								},
							]}
						/>
					</div>
				</div>
			</div>
		</ScrollArea>
	);
};

export default DataPrivacyPage;
