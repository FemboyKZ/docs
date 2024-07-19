---
title: CS:GO KZ Lan Server Setup Guide
description: FKZ CS:GO Lan Server Guide 
prev: 
  text: 'Back'
  link: '/guides'
next: false
---

## Summary

This guide will show you how to set up a CS:GO LAN server and how to install GOKZ / KZTimer plugins on it. Follow each of the steps from top to bottom, DO NOT skip any steps unless told to.
::: info
Note that this guide will NOT show you how to set up a Public, non-LAN server! This guide also does not work with CS2, only CS:GO.
:::
::: info
LAN Servers cannot be Globally whitelisted, and you won’t be able to set Global records on this type of a server.
:::

## All the needed links

For the Server:

- [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD)
- [Metamod: Source](https://www.sourcemm.net/downloads.php/?branch=stable)
- [SourceMod](https://sourcemod.net/downloads.php?branch=stable)
- [MovementAPI](https://github.com/danzayau/MovementAPI/releases)
- [GOKZ](https://github.com/KZGlobalTeam/gokz/releases) - (Don’t use, if using KZTimer plugin)
- [KZTimer](https://bitbucket.org/kztimerglobalteam/kztimerglobal/downloads/) - (Don’t use, if using GOKZ plugin)
- [NoLobbyReservation](https://github.com/5Dotsu/NoLobbyReservation/releases) - Needed for csgo_legacy

Misc:

- [SteamID Finder](https://steamid.io/)
- [Steam GSLT Tokens](https://steamcommunity.com/dev/managegameservers)
- [Global KZ Maps BSP Files](https://maps.global-api.com/bsps/) - (Outdated)
- [FKZ Mirror For Global KZ Maps](https://maps.femboy.kz/)
- [Global KZ Maps Workshop Collections](https://steamcommunity.com/sharedfiles/filedetails/?id=2354897488)

## 1. Installing SteamCMD

1. Start by going to [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD)

2. Click on `[1]`, and download the `ZIP` file.

3. Extract the contents of the `ZIP` into the folder which the server will reside in. 

::: danger
Note that the folder which will be used for the server has to be on a drive with at least `30GB~` of free space!
:::

## 2. Installing the Server

1. Locate `SteamCMD.exe` and run it. It will install all the required Steam components.

2. Once it's done, type in `login anonymous` and press enter.

3. Next type in `app_update 740 validate` and press enter. This will start the install of the server and may take a while depending on your internet and drive speeds.

::: warning
Do not close the terminal until it outputs: `Success! App '740' fully installed.`!
:::

## 3. Installing Metamod: Source

1. Open [Metamod: Source's Website](https://www.sourcemm.net/downloads.php/?branch=stable), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have a `ZIP`(Windows) or `tar.gz`(Linux) file, extract it and move the whole `addons` folder into the `\csgo\` folder of the server.

The `\csgo\` folder can be found in:

`\steamcmd\steamapps\common\Counter-Strike Global Offensive Beta - Dedicated Server\`

If you have followed this guide exactly as explained.

## 4. Installing SourceMod

1. Open [SourceMod's Website](https://sourcemod.net/downloads.php?branch=stable), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have a `ZIP`(Windows) or `tar.gz`(Linux) file, extract it and move the whole `addons` and `cfg` folders into the `\csgo\` folder of the server.

## 5. Installing MovementAPI

1. Open [MovementAPI's Github Page](https://github.com/danzayau/MovementAPI/releases) and download the latest `release`.

2. Extract the `ZIP` then drag the `addons` folder into the `\csgo\` folder.

## 6.a. Installing GOKZ

(Skip this step if you are making a KZTimer server)

1. Open [GOKZ's Github Page](https://github.com/KZGlobalTeam/gokz/releases) and download the latest `full release` (GOKZ-latest.zip, NOT -upgrade).

2. Extract the `ZIP` then drag all the folders (addons, cfg, maps, materials, sound) into the `\csgo\` folder.

3. Next navigate to `\csgo\addons\sourcemod\configs\` and open up `databases.cfg`.

4. Copy the following lines of text and paste them into the file, before tha last `}` bracket

```json
"gokz"
{
"driver"    "sqlite"  
"database"  "gokz-sqlite"
}
```

See: [`Example`](https://femboy.kz/images/databases-gokz.png)

Save the file.

## 6.b. Installing KZTimer

(Skip this step if you are making a GOKZ server)

1. Open [KZTimer's bitbucket Page](https://bitbucket.org/kztimerglobalteam/kztimerglobal/downloads/) and download the latest `full release` (_Full.zip, NOT _upgrade).

2. Extract the `ZIP` then drag all the folders (addons, cfg, maps, materials, models, sound) into the `\csgo\` folder.

3. Next navigate to `\csgo\addons\sourcemod\configs\` and open up `databases.cfg`.

4. Copy the following lines of text and paste them into the file, before tha last `}` bracket

```json
"kztimer"
{
"driver"    "sqlite"  
"database"  "kztimer-sqlite"
}
```

See: [`Example`](https://femboy.kz/images/databases-kztimer.png)

Save the file.

## 7. Installing NoLobbyReservation

After a change to CS:GO csgo_legacy in February 2024, you need to use a plugin to get past the lobby creation system the game uses.

1. Open [The Github Page](https://github.com/5Dotsu/NoLobbyReservation/releases) and download the attached `ZIP` file.

2. Extract it and place the `addons` folder into the `\csgo\` folder.

## 8. Running the Server

1. Navigate outside the `SteamCMD` folder, and create a new text file called `start.bat`.

2. Open to edit the file and add this text into it:

```ansi
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive Beta - Dedicated Server\"
scrds -game csgo -tickrate 128 -console -usercon  +map de_dust2
```

3. (Optional) Navigate to [Steam GSLT Tokens](https://steamcommunity.com/dev/managegameservers) (log in with steam if you aren't already) and create a new game server account. Set the ID as `730` (not 740) and click create

Next copy the token and add it along with `+sv_setsteamaccount` to the `start.bat` file like this:

```ansi
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive Beta - Dedicated Server\"
scrds -game csgo -tickrate 128 -console -usercon  +map de_dust2 +sv_setsteamaccount XXX
```

(Replace XXX with your token.)
<br>
Save the file.

4. Now if you run the file by double-clicking on it, it should run a terminal.
<br>
If you get a prompt to give CS:GO access through your firewall, press yes.

## 6. Connecting to the Server

::: warning
You have to run your own game before running the server!
<br>otherwise it will not let you launch your game.
:::

You can connect to the server by either:

1. Open the ingame `Community Server Browser` and go to the `LAN` tab, then press connect on the server.

2. Open the ingame console, and type in `connect localhost`.

## 7. Updating the Server

::: info
Since CS:GO is no longer being updated, this should not be needed.
:::

::: info
The warning about your server being outdated is something that can't be fixed without upgrading to cs2, so you can ignore it.
:::

1. Open up `SteamCMD.exe`.

2. Type in `login anonymous` and hit enter.

3. Type in `app_update 740`, hit enter and wait for the terminal to reply with `success!`.

If it doesn't succeed, type `app_update 740 validate` instead.

## 8.a. Adding KZ Maps - Workshop Method

::: warning
To use Workshop you need to set a GSLT token for the server.
:::

1. Open [Global KZ Maps Workshop Collections](https://steamcommunity.com/sharedfiles/filedetails/?id=2354897488) and look for a map or Collection of maps

2. Open your server and run either `host_workshop_map` or `host_workshop_collection` command along with the `ID` of the map/collection in the server's console.

## 8.b. Adding KZ Maps - File (FastDL) Method

::: warning
with this method you need to manually add the maps to your own game's folder as well as the server's.
:::

1. Open [Global KZ BSP Files Website](https://maps.global-api.com/) and download any single `bsps` or `packages`.
If you downloaded packages, extract the ZIP files.

2. Place the `.bsp` files into `\csgo\maps\` for the server AND your own game.

## 9. Adding Admins

As the owner you probably want to give yourself full admin privileges on the server.

1. Open up [SteamID.io](https://steamid.io/) to find your SteamID.

2. Open the `admins_simple.ini` file found in `\csgo\addons\sourcemod\configs\`.

3. Place your `SteamID` along with quotation marks on both sides of it, add second additional quotations after it and set your preferred `Admin Flags` in it.

Example:

```ansi
"STEAM_1:1:12121121" "z"
```

See more about the flags [here](https://wiki.alliedmods.net/Adding_Admins_(SourceMod)).

Save the file.
