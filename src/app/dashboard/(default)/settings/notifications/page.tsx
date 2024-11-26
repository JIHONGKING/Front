'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SettingSectionProps {
  title: string;
  items: {
    name: string;
    onClick?: () => void;
  }[];
}

const SettingSection: React.FC<SettingSectionProps> = ({ title, items }) => {
  return (
    <div className="bg-white rounded-[13px]">
      <div className="p-5">
        <div className="mb-4">
          <h2 className="text-[20px] text-black font-medium font-['Rubik']">{title}</h2>
        </div>
        <div>
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50"
              onClick={item.onClick}
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
          ))}
        </div>
      </div>
    </div>
  );
};

const NotificationsPage = () => {
  return (
    <div className="w-full bg-[#F5F6F8] min-h-screen">
      <div className="max-w-[789px]">
        <div className="space-y-[17px]">
          <SettingSection 
            title="Notifications you receive" 
            items={[
              { 
                name: "Searching for a job",
                onClick: () => console.log("Clicked searching for a job")
              },
              {
                name: "Hiring someone",
                onClick: () => console.log("Clicked hiring someone")
              },
              {
                name: "Connecting with others",
                onClick: () => console.log("Clicked connecting with others")
              },
              {
                name: "Network catch-up updates",
                onClick: () => console.log("Clicked network updates")
              },
              {
                name: "Posting and commenting",
                onClick: () => console.log("Clicked posting and commenting")
              },
              {
                name: "Messaging",
                onClick: () => console.log("Clicked messaging")
              },
              {
                name: "Groups",
                onClick: () => console.log("Clicked groups")
              },
              {
                name: "Pages",
                onClick: () => console.log("Clicked pages")
              },
              {
                name: "Attending events",
                onClick: () => console.log("Clicked attending events")
              },
              {
                name: "News and reports",
                onClick: () => console.log("Clicked news and reports")
              },
              {
                name: "Updating your profile",
                onClick: () => console.log("Clicked updating profile")
              },
              {
                name: "Verifications",
                onClick: () => console.log("Clicked verifications")
              },
              {
                name: "Games",
                onClick: () => console.log("Clicked games")
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;