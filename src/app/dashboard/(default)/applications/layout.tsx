import ApplicationsNavbar from "./applicationsnavbar";
export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-primary-background h-full max-h-full px-[30px] py-[20px] flex flex-col space-y-[20px]">
			<h1 className="text-2xl font-normal">Applications</h1>
			<ApplicationsNavbar />
			{children}
		</div>
	);
}
