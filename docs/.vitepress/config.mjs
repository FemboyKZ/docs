import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/fkz-notext.ico" }]],
  title: "FKZ Docs",
  titleTemplate: "FKZ Docs | :title",
  cleanUrls: true,
  lastUpdated: true,
  description: "Docs for femboy.kz",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Main Site", link: "https://femboy.kz" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Docs",
        items: [
          {
            text: "Wiki",
            link: "/wiki",
            items: [
              { text: "FKZ", link: "/wiki/fkz" },
              { text: "CS2", link: "/wiki/cs2" },
              { text: "CS:GO", link: "/wiki/csgo" },
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
