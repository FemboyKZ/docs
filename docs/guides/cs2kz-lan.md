---
title: CS2 KZ Lan Server Setup Guide
description: WIP 
prev: false
next: false
---

# Summary

This guide will show you how to set up a CS2 LAN server, and how to install KZ plugins on it. Follow each of the steps from top to bottom, DO NOT skip any steps unless told to.
::: warning
Note that this guide will NOT show you how to set up a Public, non-LAN server! This guide also does not work with CS:GO, only CS2
::: 

## All the needed links:

For the Server:
<br>[SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD)
<br>[Metamod: Source (Dev 2.0x)](https://www.sourcemm.net/downloads.php/?branch=master)
<br>[cs2kz-metamod (WIP)](https://github.com/KZGlobalTeam/cs2kz-metamod)
<br>[MultiAddonManager](https://github.com/Source2ZE/MultiAddonManager) - Optional, for kz sounds (such as jumpstats)

Misc: 
<br>[SteamID Finder](https://steamid.io/)
<br>[Steam GSLT Tokens](https://steamcommunity.com/dev/managegameservers)
<br>[KZ Maps on Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=730&searchtext=kz_)

<br>

## 1. Installing SteamCMD

1. Start by going to [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD)

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

1. Open [Metamod: Source (Dev 2.0x))](https://www.sourcemm.net/downloads.php/?branch=master), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have a `ZIP`(Windows) or `tar.gz`(Linux) file, extract it and move the whole `addons` folder into the `\csgo\` folder of the server.


The `\csgo\` folder can be found in:

`\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\`

If you have followed this guide exactly as explained.

<br>

3. Next open the `gameinfo.gi` file in a text editor (notepad... etc), the file can be found in the same `\csgo\` folder.

4. Ignore the warning about editing the file, and add 
```
Game    csgo/addons/metamod
``` 
to the top of the section with similar inputs and save the file.
<br>See: [example](../images/gameinfo.png)

## 4. Installing the KZ Plugin

1. Open [cs2kz-metamod releases](https://github.com/KZGlobalTeam/cs2kz-metamod/releases) and download the latest `(pre-)release` for you operating system.

2. Extract the `ZIP`(Windows) or `tar.gz`(Linux), then drag the `addons` and `cfg` folders into the `\csgo\` folder.

3. (Optional Step) Open up [MultiAddonManager Releases](https://github.com/Source2ZE/MultiAddonManager/releases) and download the latest release for your operating system (Windows/Linux).

4. (Optional Step 2) Extract the `ZIP`(Windows) or `tar.gz`(Linux) file, then drag the `addons` and `cfg` folders into the same `\csgo\` folder.

<br>
Now your server should be ready and installed!

## 5. Running the Server

1. Navigate outside the `SteamCMD` folder, and create a new text file called `start.bat`.

2. Open to edit the file and add this text into it:

```
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2
```

3. (Optional) Navigate to [Steam GSLT Tokens](https://steamcommunity.com/dev/managegameservers) (log in with steam if you aren't already) and create a new game server account. Set the ID as `730` and click create

Next copy the token and add it along with `+sv_setsteamaccount` to the `start.bat` file like this:
```
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

1. Opening the ingame `Community Server Browser` and going to the `LAN` tab, then pressing connect on the server.

2. Opening the ingame console, and typing in `connect localhost`.

## 7. Updating the Server

1. Open up `SteamCMD.exe`.

2. Type in `login anonymous`.

3. Type in `app_update 730`.

If it doesn't succeed, type `app_update 730 validate` instead.