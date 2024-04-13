import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
              { text: "Servers", link: "/wiki/servers" },
            ],
          },
          {
            text: "Commands",
            link: "/commands",
          },
          {
            text: "External",
            link: "/guides",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/5Dotsu/fkz-docs" },
      { icon: "discord", link: "https://discord.gg/fkz" },
    ],
  },
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2023-present FemboyKZ",
  },
});
