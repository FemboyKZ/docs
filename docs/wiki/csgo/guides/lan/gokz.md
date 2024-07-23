---
title: CS:GO Lan Server GOKZ Plugin
description: FKZ CS:GO GOKZ Installation
prev: 
  text: 'Back'
  link: '/wiki/csgo/guides/lan'
next: 
  text: 'Next'
  link: '/wiki/csgo/guides/lan/useful-plugins'
---

## 1. Installing Metamod: Source

1. Open [Metamod: Source's Website](https://www.sourcemm.net/downloads.php/?branch=stable), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have a `ZIP`(Windows) or `tar.gz`(Linux) file, extract it and move the whole `addons` folder into the `\csgo\` folder of the server.

The `\csgo\` folder can be found in:

`\steamcmd\steamapps\common\Counter-Strike Global Offensive Beta - Dedicated Server\`

If you have followed this guide exactly as explained.

## 2. Installing SourceMod

1. Open [SourceMod's Website](https://sourcemod.net/downloads.php?branch=stable), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have a `ZIP`(Windows) or `tar.gz`(Linux) file, extract it and move the whole `addons` and `cfg` folders into the `\csgo\` folder of the server.

## 3. Installing MovementAPI

1. Open [MovementAPI's Github Page](https://github.com/danzayau/MovementAPI/releases) and download the latest `release`.

2. Extract the `ZIP` then drag the `addons` folder into the `\csgo\` folder.

## 3. Installing GOKZ

(Skip this step if you are making a KZTimer server)

1. Open [GOKZ's Github Page](https://github.com/KZGlobalTeam/gokz/releases) and download the latest `full release` (GOKZ-latest.zip, NOT -upgrade).

2. Extract the `ZIP` then drag all the folders (addons, cfg, maps, materials, sound) into the `\csgo\` folder.

3. Next navigate to `\csgo\addons\sourcemod\configs\` and open up `databases.cfg`.

4. Copy the following lines of text and paste them into the file, **before tha last `}` bracket**

```txt
"gokz"
{
  "driver"    "sqlite"  
  "database"  "gokz-sqlite"
}
```

See:<vImageViewer src="/images/databases-gokz.png" alt="Example image" :inline="true"/> 

Save the file.

## Installing NoLobbyReservation

After a change to CS:GO csgo_legacy in February 2024, you need to use a plugin to get past the lobby creation system the game uses.

1. Open [The Github Page](https://github.com/5Dotsu/NoLobbyReservation/releases) and download the attached `ZIP` file.

2. Extract it and place the `addons` folder into the `\csgo\` folder.
