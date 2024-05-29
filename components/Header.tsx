"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const routes = [
    {
      name: "Accueil",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  const pathname = usePathname();

  return (
    <header>
      <nav className="mx-auto py-6 flex items-center justify-between">
        <ul className="flex items-center gap-4 text-sm">
          {routes.map((route) => {
            return (
              <li key={route.name}>
                <Link
                  href={route.path}
                  className={`hover:text-black/70 transition-colors px-3 py-2 rounded-lg ${
                    pathname === route.path
                      ? "bg-gray-200 text-black/70 font-semibold"
                      : ""
                  }`}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
