"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface SettingSectionProps {
	title: string;
	items: {
		name: string;
		description?: string;
		content?: React.ReactNode;
		disabled?: boolean;
		onClick?: () => void;
	}[];
}

const SettingSection: React.FC<SettingSectionProps> = ({ title, items }) => {
	const [openItem, setOpenItem] = useState<string | null>(null);

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
						<div key={index}>
							<div
								className={`flex items-center justify-between py-3 cursor-pointer ${
									item.disabled ? "opacity-20" : ""
								}`}
								onClick={() =>
									!item.disabled &&
									setOpenItem(
										openItem === item.name
											? null
											: item.name
									)
								}
							>
								<div className="flex-1">
									<span className="text-[16px] text-black font-normal font-['Rubik']">
										{item.name}
									</span>
								</div>
								<div className="flex items-center">
									<ChevronRight
										className="text-[#343A40] opacity-60 mr-2"
										size={20}
									/>
								</div>
							</div>
							{openItem === item.name && item.content && (
								<div className="p-4 bg-gray-50 mt-2 rounded-md">
									<div className="font-['Rubik']">
										{item.content}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const AccountPreferencesPage = () => {
	return (
		<div className="w-full bg-[#F5F6F8]">
			<div className="max-w-[789px]">
				<div className="space-y-[17px]">
					<SettingSection
						title="Profile information"
						items={[
							{
								name: "Name, location, and industry",
								content: (
									<div>
										<p className="mb-4 text-sm">
											Edit your basic information
										</p>
										<div className="space-y-4">
											<div>
												<label className="block text-sm font-medium mb-1">
													Name
												</label>
												<input
													type="text"
													className="w-full p-2.5 border border-gray-200 rounded-md text-sm"
													placeholder="Enter your name"
												/>
											</div>
											<div>
												<label className="block text-sm font-medium mb-1">
													Location
												</label>
												<input
													type="text"
													className="w-full p-2.5 border border-gray-200 rounded-md text-sm"
													placeholder="Enter your location"
												/>
											</div>
											<div>
												<label className="block text-sm font-medium mb-1">
													Industry
												</label>
												<select className="w-full p-2.5 border border-gray-200 rounded-md text-sm appearance-none bg-white">
													<option>
														Select your industry
													</option>
													<option>Technology</option>
													<option>Healthcare</option>
													<option>Finance</option>
													<option>Education</option>
												</select>
											</div>
										</div>
									</div>
								),
							},
							{
								name: "Personal demographic information",
								content: (
									<div>
										<p className="mb-4 text-sm">
											This information helps us provide
											better job recommendations
										</p>
										<div className="space-y-4">
											<div>
												<label className="block text-sm font-medium mb-1">
													Gender
												</label>
												<select className="w-full p-2.5 border border-gray-200 rounded-md text-sm appearance-none bg-white">
													<option>
														Prefer not to say
													</option>
													<option>Male</option>
													<option>Female</option>
													<option>Other</option>
												</select>
											</div>
											<div>
												<label className="block text-sm font-medium mb-1">
													Birth date
												</label>
												<input
													type="date"
													className="w-full p-2.5 border border-gray-200 rounded-md text-sm"
												/>
											</div>
										</div>
									</div>
								),
							},
							{
								name: "Verifications",
								content: (
									<div>
										<p className="mb-4 text-sm">
											Verify your account to access all
											features
										</p>
										<div className="space-x-4">
											<button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
												Verify email
											</button>
											<button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
												Verify phone number
											</button>
										</div>
									</div>
								),
							},
						]}
					/>

					<SettingSection
						title="Display"
						items={[
							{
								name: "Dark mode",
								disabled: true,
								content: (
									<p className="text-sm">
										Dark mode is currently not available.
									</p>
								),
							},
						]}
					/>

					<SettingSection
						title="General preferences"
						items={[
							{
								name: "Language",
								content: (
									<div>
										<p className="mb-4 text-sm">
											Select your preferred language
										</p>
										<select className="w-full p-2.5 border border-gray-200 rounded-md text-sm appearance-none bg-white">
											<option>English</option>
											<option>한국어</option>
											<option>日本語</option>
											<option>中文</option>
										</select>
									</div>
								),
							},
							{
								name: "Showing profile photos",
								content: (
									<div>
										<p className="mb-4 text-sm">
											Choose how profile photos are
											displayed
										</p>
										<div className="space-y-3">
											<label className="flex items-center">
												<input
													type="radio"
													name="photos"
													className="mr-2"
												/>
												<span className="text-sm">
													Show all profile photos
												</span>
											</label>
											<label className="flex items-center">
												<input
													type="radio"
													name="photos"
													className="mr-2"
												/>
												<span className="text-sm">
													Hide all profile photos
												</span>
											</label>
										</div>
									</div>
								),
							},
						]}
					/>

					<SettingSection
						title="Account management"
						items={[
							{
								name: "Close account",
								content: (
									<div>
										<p className="text-red-600 font-medium mb-4 text-sm">
											Warning: This action cannot be
											undone.
										</p>
										<p className="mb-4 text-sm">
											Closing your account will
											permanently delete all your data.
										</p>
										<button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
											Close Account
										</button>
									</div>
								),
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default AccountPreferencesPage;
