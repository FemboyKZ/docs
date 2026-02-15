---
title: CS:GO Lan Server KZTimer Plugin
description: FKZ CS:GO KZTimer Installation
prev:
  text: "Back"
  link: "/wiki/csgo/guides/lan"
next: false
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

## 4. Installing KZTimer

(Skip this step if you are making a GOKZ server)

1. Open [KZTimer's bitbucket Page](https://bitbucket.org/kztimerglobalteam/kztimerglobal/downloads/) and download the latest `full release` (\_Full.zip, NOT upgrade).

2. Extract the `ZIP` then drag all the folders (addons, cfg, maps, materials, models, sound) into the `\csgo\` folder.

3. Next navigate to `\csgo\addons\sourcemod\configs\` and open up `databases.cfg`.

4. Copy the following lines of text and paste them into the file, **before tha last `}` bracket**

```txt
"kztimer"
{
    "driver"    "sqlite"
    "database"  "kztimer-sqlite"
}
```

<div style="text-align: center;">
  <img src="/images/databases-kztimer.png" alt="databases.cfg example" style="max-width: 700px; display: block; margin: 0 auto 20px;">
</div>

Save the file.
