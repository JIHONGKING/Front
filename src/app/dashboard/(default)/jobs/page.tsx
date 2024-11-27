"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { jobPostings } from "./data";
import LocationIcon from "@/assets/locarrow";
import CompanyIcon from "@/assets/joblocicon";
import LevelIcon from "@/assets/levelicon";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function Jobs() {
	return (
		<div className="h-full max-h-full flex flex-row grow gap-6">
			<div className="min-w-[400px] h-full flex flex-col space-y-4">
				<JobForm
					submitFunc={() => console.log("submit")}
					results={jobPostings.length}
				/>
			</div>
			<ScrollArea className="w-full h-full">
				{jobPostings.map((post, idx) => (
					<div
						className="w-full min-h-60 bg-primary-background mb-4 p-4 space-y-4"
						key={idx}
					>
						<h1 className="text-2xl font-medium text-black">
							{post.job_title}
						</h1>
						<div className="flex flex-row space-x-4">
							<div className="flex flex-row space-x-2">
								<CompanyIcon />
								<p className="text-primary-foreground">
									{post.company_name}
								</p>
							</div>
							<div className="flex flex-row space-x-2">
								<LocationIcon />
								<p className="text-primary-foreground">
									{post.location}
								</p>
							</div>
							<div className="flex flex-row space-x-2">
								<LevelIcon />
								<p className="text-primary-foreground">
									Senior
								</p>
							</div>
						</div>
						<div className="flex flex-col space-y-1">
							<h1 className="font-bold">Responsibilities</h1>
							<ul className="pl-4">
								{post.responsibilities.map((res, idx) => (
									<li key={idx} className="list-disc">
										{res}
									</li>
								))}
							</ul>
						</div>
						<button className="w-[236px] h-[44px] border border-primary hover:bg-secondary-background rounded-sm">
							<p className="text-primary">Learn More</p>
						</button>
					</div>
				))}
			</ScrollArea>
		</div>
	);
}

function JobForm({
	submitFunc,
	results,
}: {
	submitFunc: Function;
	results: number;
}) {
	return (
		<form
			className="bg-primary-background w-full h-full p-2 flex flex-col space-y-8"
			onSubmit={() => submitFunc()}
		>
			<div className="flex flex-row justify-between items-center">
				<div className="inline-flex">
					<p className="text-success font-bold text-base">
						{results.toString()}&nbsp;
					</p>
					<p className="text-base font-normal">jobs matched</p>
				</div>
				<Button
					variant="link"
					className="text-base font-light text-primary-lighter"
				>
					Clear filters
				</Button>
			</div>
			<Input
				type="text"
				className="bg-transparent border border-black"
				placeholder="Search for a job"
			></Input>
			<Accordion type="multiple" className="w-full">
				<AccordionItem value="item1">
					<AccordionTrigger>Locations</AccordionTrigger>
					<AccordionContent>
						<Input
							placeholder="Choose a location"
							className="border bg-secondary-background-light"
						></Input>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item2">
					<AccordionTrigger>Experience</AccordionTrigger>
					<AccordionContent className="grid grid-cols-2">
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="entry" />
							<label
								htmlFor="entry"
								className="text-sm font-light text-primary-foreground"
							>
								Entry-level
							</label>
						</div>
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="mid" />
							<label
								htmlFor="mid"
								className="text-sm font-light text-primary-foreground"
							>
								Mid-level
							</label>
						</div>
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="senior" />
							<label
								htmlFor="senior"
								className="text-sm font-light text-primary-foreground"
							>
								Senior-level
							</label>
						</div>
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="associate" />
							<label
								htmlFor="associate"
								className="text-sm font-light text-primary-foreground"
							>
								Associate
							</label>
						</div>
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="executive" />
							<label
								htmlFor="executive"
								className="text-sm font-light text-primary-foreground"
							>
								Executive
							</label>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item3">
					<AccordionTrigger>
						Skills and Qualifications
					</AccordionTrigger>
					<AccordionContent>
						<Input
							placeholder="Search for field and skills"
							className="border bg-secondary-background-light"
						></Input>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item4">
					<AccordionTrigger>Degree</AccordionTrigger>
					<AccordionContent>
						<RadioGroup>
							<div className="flex flex-row items-center space-x-2">
								<RadioGroupItem
									value="high-school"
									className="border-primary-foreground"
								/>
								<Label>High school</Label>
							</div>
							<div className="flex flex-row items-center space-x-2">
								<RadioGroupItem
									value="bachelor"
									className="border-primary-foreground"
								/>
								<Label>Bachelor's Degree</Label>
							</div>
							<div className="flex flex-row items-center space-x-2">
								<RadioGroupItem
									value="master"
									className="border-primary-foreground"
								/>
								<Label>Master's Degree</Label>
							</div>
							<div className="flex flex-row items-center space-x-2">
								<RadioGroupItem
									value="phd"
									className="border-primary-foreground"
								/>
								<Label>Ph.D.</Label>
							</div>
						</RadioGroup>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item5">
					<AccordionTrigger>Job Types</AccordionTrigger>
					<AccordionContent className="grid grid-cols-2">
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="part-time" />
							<label
								htmlFor="part-time"
								className="text-sm font-light text-primary-foreground"
							>
								Part-time
							</label>
						</div>
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="full-time" />
							<label
								htmlFor="full-time"
								className="text-sm font-light text-primary-foreground"
							>
								Full-time
							</label>
						</div>
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="intern" />
							<label
								htmlFor="inter"
								className="text-sm font-light text-primary-foreground"
							>
								Intern
							</label>
						</div>
						<div className="space-x-2 inline-flex items-center">
							<Checkbox id="temporary" />
							<label
								htmlFor="temporary"
								className="text-sm font-light text-primary-foreground"
							>
								Temporary
							</label>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item6">
					<AccordionTrigger>Sort by</AccordionTrigger>
					<AccordionContent>
						<RadioGroup>
							<div className="flex flex-row items-center space-x-2">
								<RadioGroupItem
									value="salary"
									className="border-primary-foreground"
								/>
								<Label>Salary</Label>
							</div>
							<div className="flex flex-row items-center space-x-2">
								<RadioGroupItem
									value="experience"
									className="border-primary-foreground"
								/>
								<Label>Experience</Label>
							</div>
							<div className="flex flex-row items-center space-x-2">
								<RadioGroupItem
									value="distance"
									className="border-primary-foreground"
								/>
								<Label>Distance</Label>
							</div>
						</RadioGroup>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</form>
	);
}
