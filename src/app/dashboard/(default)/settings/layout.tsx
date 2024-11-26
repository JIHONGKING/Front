'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from "next/image";

import Bell_light from "@/assets/Bell_light.svg";
import Eye_light from "@/assets/Eye_light.svg";
import secure from "@/assets/secure.svg";
import chield_light from "@/assets/chield_light.svg";
import user_circle from "@/assets/User_cicrle_light.svg";
import user_alt_light from "@/assets/user_alt_light.svg";

const menuItems = [
  { id: 'account', icon: user_alt_light, text: 'Account preferences', path: '/dashboard/settings/account-preferences' },
  { id: 'security', icon: secure, text: 'Sign & security', path: '/dashboard/settings/sign-security' },
  { id: 'visibility', icon: Eye_light, text: 'Visibility', path: '/dashboard/settings/visibility' },
  { id: 'privacy', icon: chield_light, text: 'Data privacy', path: '/dashboard/settings/data-privacy' },
  { id: 'notifications', icon: Bell_light, text: 'Notifications', path: '/dashboard/settings/notifications' },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/dashboard/settings') {
      router.push('/dashboard/settings/account-preferences');
    }
  }, [pathname, router]);

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex w-full min-h-screen bg-[#F5F6F8]">
      {/* Left Sidebar */}
      <div className="w-[300px] bg-white p-5 rounded-lg">
        <div className="flex items-center gap-3 mb-8">
          <Image
            src={user_circle}
            width={28}
            height={28}
            alt="Settings"
            className="w-7 h-7"
          />
          <span className="text-2xl font-medium">Settings</span>
        </div>
        
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer 
                ${pathname === item.path || hoveredItem === item.id
                  ? 'bg-[#345AB8] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item.path)}
            >
              <Image
                src={item.icon}
                width={24}
                height={24}
                alt={item.text}
                className={`w-6 h-6 ${pathname === item.path || hoveredItem === item.id ? 'filter invert' : ''}`}
              />
              <span className="text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-6 mr-6">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}