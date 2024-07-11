---
title: CS2 KZ Lan Server Setup Guide
description: FKZ CS2 Lan Server Guide 
prev: 
  text: 'Back'
  link: '/guides'
next: false
---

## Summary

This guide will show you how to set up a CS2 LAN server, and how to install KZ plugins on it. Follow each of the steps from top to bottom, DO NOT skip any steps unless told to.
::: warning
Note that this guide will NOT show you how to set up a Public, non-LAN server! This guide also does not work with CS:GO, only CS2
:::

## All the needed links

For the Server:

- [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD)
- [Metamod: Source (Dev 2.0x)](https://www.sourcemm.net/downloads.php/?branch=master)
- [cs2kz-metamod (WIP)](https://github.com/KZGlobalTeam/cs2kz-metamod)
- [MultiAddonManager](https://github.com/Source2ZE/MultiAddonManager) - Optional 1, for kz sounds (such as jumpstats)
- [GetClientCvarValue](https://github.com/komashchenko/ClientCvarValue) - Optional 2, for kz languages support

Misc:

- [SteamID Finder](https://steamid.io/)
- [Steam GSLT Tokens](https://steamcommunity.com/dev/managegameservers)
- [KZ Maps on Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=730&searchtext=kz_)

## 1. Installing SteamCMD

1. Start by going to [SteamCMD's Download Page](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD)

2. Click on `[1]`, and download the `ZIP` file.

3. Extract the contents of the `ZIP` into the folder which the server will reside in. 

::: danger
Note that the folder which will be used for the server has to be on a drive with at least `35GB~` of free space!
:::

## 2. Installing the Server

1. Locate `SteamCMD.exe` and run it. It will install all the required Steam components.

2. Once it's done, type in `login anonymous` and press enter.

3. Next type in `app_update 730 validate` and press enter. This will start the install of the server and may take a while depending on your internet and drive speeds.

::: warning
Do not close the terminal until it outputs: `Success! App '730' fully installed.`!
:::

## 3. Installing Metamod: Source

1. Open [Metamod: Source (Dev 2.0x) Downloads](https://www.sourcemm.net/downloads.php/?branch=master), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have downloaded a `ZIP`(Windows) or `tar.gz`(Linux) file, extract it and move the whole `addons` folder into the `\csgo\` folder of the server.

The `\csgo\` folder can be found in:

`\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\`

If you have followed this guide exactly as explained.

3. Next open the `gameinfo.gi` file in a text editor (notepad... etc), the file can be found in the same `\csgo\` folder.

4. Ignore the warning about editing the file, and add

```cpp
Game    csgo/addons/metamod
```

to the top of the section with similar inputs and save the file.
<br>See: [example](https://femboy.kz/images/gameinfo.png)

## 4. Installing the KZ Plugin

1. Open [cs2kz-metamod releases](https://github.com/KZGlobalTeam/cs2kz-metamod/releases) and download the latest `(pre-)release` for you operating system.

2. Extract the `ZIP`(Windows) or `tar.gz`(Linux), then drag the `addons` and `cfg` folders into the `\csgo\` folder.

3. (Optional 1a) Open up [MultiAddonManager Releases](https://github.com/Source2ZE/MultiAddonManager/releases) and download the latest release for your operating system (Windows/Linux).

4. (Optional 1b) Extract the `ZIP`(Windows) or `tar.gz`(Linux) file, then drag the `addons` and `cfg` folders into the `\csgo\` folder.

5. (Optional 2a) Open [GetClientCvarValue's Releases](https://github.com/komashchenko/ClientCvarValue/releases) and download the latest release for your operating system (Windows/Linux).

6. (Optional 2b) Extract the `ZIP` file, then drag the `addons` and `cfg` folders into the `\csgo\` folder.

<br>
Now your server should be ready and installed!

## 5. Running the Server

1. Navigate outside the `SteamCMD` folder, and create a new text file called `start.bat`.

2. Open to edit the file and add this text into it:

```ass
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2
```

3. (Optional) Navigate to [Steam GSLT Tokens](https://steamcommunity.com/dev/managegameservers) (log in with steam if you aren't already) and create a new game server account. Set the ID as `730` and click create

Next copy the token and add it along with `+sv_setsteamaccount` to the `start.bat` file like this:

```ass
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2 +sv_setsteamaccount XXX
```

(Replace XXX with your token.)
<br><br>Save the file.

4. Now if you run the file by double-clicking on it, it should run a terminal.
<br><br>If you get a prompt to give cs2 access through your firewall, press yes.

## 6. Connecting to the Server

::: warning
You have to run your own game before running the server!
<br>otherwise it will not let you launch your game.
:::

You can connect to the server by either:

1. Open the ingame `Community Server Browser` and go to the `LAN` tab, then press connect on the server.

2. Open the ingame console, and type in `connect localhost`.

## 7. Updating the Server

1. Open up `SteamCMD.exe`.

2. Type in `login anonymous` and hit enter.

3. Type in `app_update 730`, hit enter and wait for the terminal to reply with `success!`.

If it doesn't succeed, type `app_update 730 validate` instead.

## 8. Adding KZ Maps

Maps could be added manually into the files as well, but `FastDL` does not exist in CS2, so you want to use Workshop instead.

1. Open up [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=730&searchtext=kz_) and look for a map or Collection of maps

2. Edit the `start.bat` file and add either `+host_workshop_map` or `+host_workshop_collection` command along with the `ID` of the map/collection to the 2nd row on the file like so:

```ass
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2 +host_workshop_map 3121168339
```

or

```ass
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2 +host_workshop_collection 3210526079
```

(Replace [`3210526079`](https://steamcommunity.com/sharedfiles/filedetails/?id=3121168339)/[`3210526079`](https://steamcommunity.com/sharedfiles/filedetails/?id=3210526079) with what you want.)

::: warning
Currently the CS2 Workshop doesn't require you to use a GSLT token for maps, but this could change in the future.
:::

## CounterStrikeSharp

If you wish to use CS# for extra plugins you will have to do so:

1. Open `\csgo\addons\metamod\metaplugins.ini` in a text editor.

2. Add `addons/cs2kz/bin/linuxsteamrt64/cs2kz` to the bottom of the file on a new row, and save the file.
