'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface SettingItemProps {
  title: string;
  items: { name: string; disabled?: boolean; content?: React.ReactNode }[];
}

const SettingItem: React.FC<SettingItemProps> = ({ title, items }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg p-5 mb-5">
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      {items.map((item, index) => (
        <div key={index}>
          <div 
            className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 cursor-pointer ${item.disabled ? 'opacity-50' : ''}`}
            onClick={() => !item.disabled && setOpenItem(openItem === item.name ? null : item.name)}
          >
            <span className={`text-base ${item.disabled ? 'text-gray-300' : 'text-black'}`}>{item.name}</span>
            {openItem === item.name ? <ArrowLeft className="text-gray-400" size={20} /> : <ArrowRight className="text-gray-400" size={20} />}
          </div>
          {openItem === item.name && item.content && (
            <div className="p-4 bg-gray-50 mt-2 rounded">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AccountPreferencesPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-medium mb-6">Account preferences</h1>
      
      <SettingItem 
        title="Profile information" 
        items={[
          { 
            name: "Name, location, and industry",
            content: <p>Edit your name, location, and industry details here.</p>
          },
          { 
            name: "Personal demographic information",
            content: <p>Manage your personal demographic information.</p>
          },
          { 
            name: "Verifications",
            content: <p>View and manage your account verifications.</p>
          },
        ]} 
      />

      <SettingItem 
        title="Display" 
        items={[
          { name: "Dark mode", disabled: true, content: <p>Dark mode is currently not available.</p> },
        ]} 
      />

      <SettingItem 
        title="General preferences" 
        items={[
          { 
            name: "Language",
            content: <p>Choose your preferred language for the platform.</p>
          },
          { 
            name: "Showing profile photos",
            content: <p>Manage visibility settings for profile photos.</p>
          },
        ]} 
      />

      <SettingItem 
        title="Account management" 
        items={[
          { 
            name: "Close account",
            content: <p>Warning: Closing your account is irreversible. Please contact support if you're sure about this action.</p>
          },
        ]} 
      />
    </div>
  );
};

export default AccountPreferencesPage;