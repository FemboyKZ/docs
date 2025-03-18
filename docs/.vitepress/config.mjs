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
            text: "FKZ Wiki",
            link: "/wiki/fkz",
            items: [
              { text: "What is FKZ", link: "/wiki/fkz/info" },
              { text: "FKZ Discord", link: "/wiki/fkz/discord" },
              { text: "FKZ Servers", link: "/wiki/fkz/servers" },
            ],
          },
          {
            text: "Wiki",
            link: "/wiki",
            items: [
              { text: "CS2", link: "/wiki/cs2" },
              { text: "CS:GO", link: "/wiki/csgo" },
              { text: "ClassicCounter", link: "/wiki/cscl" },
              { text: "Discord", link: "/wiki/discord" },
              { text: "Minecraft", link: "/wiki/minecraft" },
            ],
          },
          {
            text: "Guides",
            items: [
              {
                text: "CS2KZ Lan-Server Guide",
                link: "/wiki/cs2/guides/lan",
              },
              {
                text: "CS2KZ Listen-Server Guide",
                link: "/wiki/cs2/guides/listen",
              },
              {
                text: "CS:GOKZ Lan-Server Guide",
                link: "/wiki/csgo/guides/lan",
              },
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
