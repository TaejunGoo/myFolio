export interface siteMapType {
  href: string;
  label: string;
};

export const sitemap: siteMapType[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Menu1" },
  { href: "/this-portfolio", label: "Menu2" },
  { href: "/projects", label: "Menu3" },
];
