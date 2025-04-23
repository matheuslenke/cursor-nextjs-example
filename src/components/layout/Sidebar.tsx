import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  // Placeholder navigation items
  const navItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/orders', label: 'Orders' },
    { href: '/dashboard/menu', label: 'Menu' },
    { href: '/dashboard/reservations', label: 'Reservations' },
    { href: '/dashboard/settings', label: 'Settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform sm:translate-x-0">
      <div className="flex h-full flex-col overflow-y-auto px-3 py-4">
        {/* Optional: Logo or Title */}
        <div className="mb-4 p-2">
          <span className="text-xl font-semibold">Restaurant POS</span>
        </div>

        <ul className="space-y-2 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center rounded-lg p-2 text-foreground hover:bg-muted"
                aria-label={item.label}
                tabIndex={0}
              >
                {/* Optional: Add icons here */}
                <span className="ms-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional: Add footer content like user profile, logout button */}
        {/* <div className="mt-auto"> ... </div> */}
      </div>
    </aside>
  );
};

export default Sidebar; 