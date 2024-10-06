'use client';

import React, { useState } from 'react';
import Bell_light from "@/assets/Bell_light.svg";
import Image from "next/image";
import Eye_light from "@/assets/Eye_light.svg";
import secure from "@/assets/secure.svg";
import chield_light from "@/assets/chield_light.svg"
import user_circle from "@/assets/User_circle_light.svg";
import user_alt_light from "@/assets/user_alt_light.svg";

export default function Settings() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { id: 'account', icon: user_alt_light, text: 'Account preferences' },
    { id: 'security', icon: secure, text: 'Sign & security' },
    { id: 'visibility', icon: Eye_light, text: 'Visibility' },
    { id: 'privacy', icon: chield_light, text: 'Data privacy' },
    { id: 'notifications', icon: Bell_light, text: 'Notifications' },
  ];

  return (
    <div className="Frame4702" style={{width: '252px', height: '100vh', padding: 10, background: 'white', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex', overflow: 'auto'}}>
      <div className="Frame4694" style={{width: '100%', padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex', flex: 1}}>
        <div className="Frame4695" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="UserCicrleLight" style={{width: 36, height: 36, position: 'relative'}}>
            <div className="Ellipse46" style={{width: 9, height: 9, left: 13.50, top: 10.50, position: 'absolute', borderRadius: 9999, border: '1px #222222 solid'}} />
            <div className="Ellipse47" style={{width: 27, height: 27, left: 4.50, top: 4.50, position: 'absolute', borderRadius: 9999, border: '1px #222222 solid'}} />
            <div className="Ellipse48" style={{width: 18, height: 5.56, left: 9, top: 22.50, position: 'absolute', border: '1px #222222 solid'}}></div>
          </div>
          <div className="Settings" style={{color: 'black', fontSize: 30, fontFamily: 'Rubik', fontWeight: '400', wordWrap: 'break-word'}}>Settings</div>
        </div>
        
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className="Frame4704" 
            style={{
              width: '100%', 
              height: '100%', 
              padding: 10, 
              background: hoveredItem === item.id ? '#345AB8' : 'white', 
              borderRadius: 12, 
              flexDirection: 'column', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', 
              gap: 10, 
              display: 'inline-flex',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="Frame4703" style={{height: 24, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
              <div className="Frame4696" style={{width: 200, alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <Image
                  src={item.icon}
                  width={24}
                  height={24}
                  alt={item.text}
                  style={{ filter: hoveredItem === item.id ? 'brightness(0) invert(1)' : 'none' }}
                />
                <div style={{color: hoveredItem === item.id ? 'white' : 'black', fontSize: 16, fontFamily: 'Rubik', fontWeight: '400', wordWrap: 'break-word'}}>
                  {item.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
}