export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Reeco",
  description: "Frontend Assignment",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Orders",
      href: "/",
    },
    {
      title: "Analytics",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
