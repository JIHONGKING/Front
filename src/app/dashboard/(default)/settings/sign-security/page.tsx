"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface SettingSectionProps {
	title: string;
	items: {
		name: string;
		description?: string;
		content?: React.ReactNode;
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
								className="flex items-center justify-between py-3 cursor-pointer"
								onClick={() =>
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

const SignSecurityPage = () => {
	return (
		<div className="w-full bg-[#F5F6F8]">
			<div className="max-w-[789px]">
				<div className="space-y-[17px]">
					<SettingSection
						title="Account access"
						items={[
							{
								name: "Email addresses",
								content: (
									<div>
										<p className="mb-4">
											Primary email address
										</p>
										<div className="p-3 bg-white rounded-md border border-gray-200 mb-4">
											<p className="text-sm text-gray-600">
												example@wisc.edu
											</p>
										</div>
										<button className="text-blue-600 hover:underline text-sm">
											Add another email
										</button>
									</div>
								),
							},
							{
								name: "Phone numbers",
								content: (
									<div>
										<p className="mb-4">
											Add a phone number to help secure
											your account
										</p>
										<button className="text-blue-600 hover:underline text-sm">
											Add phone number
										</button>
									</div>
								),
							},
							{
								name: "Change password",
								content: (
									<div className="space-y-4">
										<div>
											<label className="block text-sm mb-1">
												Current password
											</label>
											<input
												type="password"
												className="w-full p-2 border rounded-md"
											/>
										</div>
										<div>
											<label className="block text-sm mb-1">
												New password
											</label>
											<input
												type="password"
												className="w-full p-2 border rounded-md"
											/>
										</div>
										<div>
											<label className="block text-sm mb-1">
												Confirm new password
											</label>
											<input
												type="password"
												className="w-full p-2 border rounded-md"
											/>
										</div>
										<button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
											Update password
										</button>
									</div>
								),
							},
							{
								name: "Devices that remember your password",
								content: (
									<div>
										<div className="bg-white p-3 rounded-md border border-gray-200 mb-3">
											<p className="font-medium">
												Current device
											</p>
											<p className="text-sm text-gray-500">
												Last accessed: Just now
											</p>
										</div>
										<button className="text-blue-600 hover:underline text-sm">
											Remove all devices
										</button>
									</div>
								),
							},
						]}
					/>

					<SettingSection
						title="Two-step verification"
						items={[
							{
								name: "Two-step verification",
								content: (
									<div>
										<p className="mb-4">
											Add an extra layer of security to
											your account
										</p>
										<button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
											Set up two-step verification
										</button>
									</div>
								),
							},
						]}
					/>

					<SettingSection
						title="Additional security"
						items={[
							{
								name: "Security question",
								content: (
									<div>
										<p className="mb-4">
											Add a security question to help
											protect your account
										</p>
										<button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
											Set security question
										</button>
									</div>
								),
							},
							{
								name: "Recovery options",
								content: (
									<div>
										<p className="mb-2">
											Add recovery info to help you get
											back into your account if you're
											locked out
										</p>
										<div className="space-x-4">
											<button className="text-blue-600 hover:underline text-sm">
												Add recovery email
											</button>
											<button className="text-blue-600 hover:underline text-sm">
												Add recovery phone
											</button>
										</div>
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

export default SignSecurityPage;
