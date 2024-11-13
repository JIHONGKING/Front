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
    <div className="flex flex-1 bg-white">
      <div className="w-76 h-[calc(100vh-60px)] border-r border-gray-200 p-4 flex flex-col">
        <div className="flex items-center mb-10">
          <Image src={user_circle} width={36} height={36} alt="User" />
          <h1 className="text-2xl ml-3 font-normal">Settings</h1>
        </div>
        
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className={`flex items-center p-3 rounded-lg cursor-pointer mb-2 ${
              pathname === item.path || hoveredItem === item.id
                ? 'bg-[#345AB8] text-white'
                : 'hover:bg-gray-100'
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
              className={pathname === item.path || hoveredItem === item.id ? 'filter invert' : ''}
            />
            <span className="ml-3 text-base font-normal">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}