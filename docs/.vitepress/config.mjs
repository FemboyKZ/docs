import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { plugins: [SearchPlugin(options)] },
  head: [["link", { rel: "icon", href: "/fkz-notext.ico" }]],
  title: "FKZ Docs",
  titleTemplate: "FKZ Docs | :title",
  cleanUrls: true,
  description: "Docs for femboy.kz",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Main Site", link: "https://femboy.kz" },
    ],

    sidebar: [
      {
        text: "Docs",
        items: [
          {
            text: "Wiki",
            link: "/wiki",
            items: [
              { text: "What is FKZ", link: "/wiki/fkz" },
              { text: "FKZ Discord", link: "/wiki/discord" },
              { text: "FKZ Servers", link: "/wiki/servers" },
            ],
          },
          {
            text: "Commands",
            link: "/commands",
            items: [
              { text: "CS2", link: "/commands/cs2" },
              { text: "CS:GO", link: "/commands/csgo" },
              { text: "Discord", link: "/commands/discord" },
              { text: "Minecraft", link: "/commands/minecraft" },
            ],
          },
          {
            text: "External",
            link: "/guides",
            items: [
              { text: "CS2KZ Lan-Server Guide", link: "/guides/cs2kz-lan" },
              {
                text: "CS2KZ Listen-Server Guide",
                link: "guides/cs2kz-listen",
              },
              { text: "CS:GOKZ Lan-Server Guide", link: "/guides/csgokz-lan" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/FemboyKZ/docs" },
      { icon: "discord", link: "https://discord.gg/fkz" },
    ],
  },
  footer: {
    message: "Released under the GPL-3.0 License.",
    copyright: "Copyright © 2023-present FemboyKZ",
  },
});
