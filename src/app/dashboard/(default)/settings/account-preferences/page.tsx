'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SettingSectionProps {
  title: string;
  items: {
    name: string;
    description?: string;
    disabled?: boolean;
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
              className={`flex items-center justify-between py-3 cursor-pointer ${
                item.disabled ? 'opacity-20' : ''
              }`}
              onClick={!item.disabled ? item.onClick : undefined}
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

const AccountPreferencesPage = () => {
  return (
    <div className="w-full bg-[#F5F6F8] min-h-screen">
      <div className="max-w-[789px]">
        <div className="space-y-[17px]">
          <SettingSection 
            title="Profile information" 
            items={[
              { 
                name: "Name, location, and industry",
                onClick: () => console.log("Clicked name location")
              },
              { 
                name: "Personal demographic information",
                onClick: () => console.log("Clicked demographic")
              },
              {
                name: "Verifications",
                onClick: () => console.log("Clicked verifications")
              },
            ]} 
          />

          <SettingSection 
            title="Display" 
            items={[
              { 
                name: "Dark mode",
                disabled: true,
              },
            ]} 
          />

          <SettingSection 
            title="General preferences" 
            items={[
              { 
                name: "Language",
                onClick: () => console.log("Clicked language")
              },
              { 
                name: "Showing profile photos",
                onClick: () => console.log("Clicked profile photos")
              },
            ]} 
          />

          <SettingSection 
            title="Account management" 
            items={[
              { 
                name: "Close account",
                onClick: () => console.log("Clicked close account")
              },
            ]} 
          />
        </div>
      </div>
    </div>
  );
};

export default AccountPreferencesPage;