---
title: CS2 Lan Server Addons Guide
description: FKZ CS2 Lan Server Addons Guide
prev:
  text: "Back"
  link: "/wiki/cs2/guides/lan"
next:
  text: "KZ Plugins"
  link: "/wiki/cs2/guides/lan/kz"
---

## Summary

This guide will show you how to set up Metamod Addons on a CS2 LAN server. Follow each of the steps from top to bottom, DO NOT skip any steps unless told to.

::: info
Metamod: Source is an enviroment for running plugins on CS2. It is required for most, if not all plugins.
:::

## Installing **Metamod: Source**

1. Open [Metamod: Source (Dev 2.0x) Downloads](https://www.sourcemm.net/downloads.php/?branch=master), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have downloaded a `ZIP`(Windows) or `tar.gz`(Linux) file, extract it and move the whole `addons` folder into the `\csgo\` folder of the server.
   The `\csgo\` folder can be found in: `\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\` if you have followed this guide exactly as explained.

3. Next open the `gameinfo.gi` file in a text editor (notepad... etc), the file can be found in the same `\csgo\` folder.

4. Ignore the warning about editing the file, and add

```txt
Game    csgo/addons/metamod
```

to the top of the section with similar inputs and save the file.

<div style="text-align: center;">
  <img src="/images/gameinfo.png" alt="gameinfo.gi example" style="max-width: 700px; display: block; margin: 0 auto 20px;">
</div>
