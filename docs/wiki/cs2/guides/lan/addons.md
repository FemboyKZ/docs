---
title: CS2 Lan Server Addons Guide
description: FKZ CS2 Lan Server Addons Guide 
prev: 
  text: 'Back'
  link: '/wiki/cs2/guides/lan'
next: 
  text: 'Next'
  link: '/wiki/cs2/guides/lan/kz'
---

## Summary

This guide will show you how to set up Metamod Addons on a CS2 LAN server. Follow each of the steps from top to bottom, DO NOT skip any steps unless told to.

::: info
Metamod: Source is an enviroment for running plugins on CS2. It is required for most, if not all plugins.
:::

## Installing **Metamod: Source**

1. Open [Metamod: Source (Dev 2.0x) Downloads](https://www.sourcemm.net/downloads.php/?branch=master), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have downloaded a `ZIP`(Windows) or `tar.gz`(Linux) file, extract it and move the whole `addons` folder into the `\csgo\` folder of the server.

The `\csgo\` folder can be found in:

`\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\`

If you have followed this guide exactly as explained.

3. Next open the `gameinfo.gi` file in a text editor (notepad... etc), the file can be found in the same `\csgo\` folder.

4. Ignore the warning about editing the file, and add

```txt
Game    csgo/addons/metamod
```

to the top of the section with similar inputs and save the file.

See:<vImageViewer src="https://files.femboy.kz/web/images/gameinfo.png" alt="Example image" :inline="true"/> 

## Installing the KZ Plugin

1. Open [cs2kz-metamod releases](https://github.com/KZGlobalTeam/cs2kz-metamod/releases) and download the latest `(pre-)release` for you operating system.

2. Extract the `ZIP`(Windows) or `tar.gz`(Linux), then drag the `addons` and `cfg` folders into the `\csgo\` folder.

### Jumpstat/Quake sounds support (Optional)

1. Open up [MultiAddonManager Releases](https://github.com/Source2ZE/MultiAddonManager/releases) and download the latest release for your operating system (Windows/Linux).

2. Extract the `ZIP`(Windows) or `tar.gz`(Linux) file, then drag the `addons` and `cfg` folders into the `\csgo\` folder.

### Language Support (Optional)

1. Open [GetClientCvarValue's Releases](https://github.com/komashchenko/ClientCvarValue/releases) and download the latest release for your operating system (Windows/Linux).

2. Extract the `ZIP` file, then drag the `addons` and `cfg` folders into the `\csgo\` folder.
