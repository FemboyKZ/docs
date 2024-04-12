import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FKZ Docs",
  description: "Docs for femboy.kz",
  srcDir: "docs",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Main Site", link: "https://femboy.kz" },
    ],

    sidebar: [
      {
        text: "Guides",
        items: [
          {
            text: "Wiki",
            items: [
              { text: "What is FKZ", link: "/wiki/fkz" },
              { text: "FKZ Discord", link: "/wiki/discord" },
              { text: "Servers", link: "/wiki/server-info" },
            ],
          },
          {
            text: "Commands",
            items: [
              { text: "Base commands for KZ", link: "/commands/help)" },
              { text: "Admin commands", link: "/commands/admin-help" },
            ],
          },
          {
            text: "External",
            items: [
              { text: "CS:GO KZ Lan Server Guide", link: "/guides/csgokz-lan" },
              { text: "CS2 KZ Lan Server Guide", link: "/guides/cs2kz-lan" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/5Dotsu/fkz-docs" },
      { icon: "discord", link: "https://discord.gg/fkz" },
    ],
  },
});
