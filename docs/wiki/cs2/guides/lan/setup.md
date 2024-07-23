---
title: CS2 Lan Server Setup Guide
description: FKZ CS2 Lan Server Guide 
prev: 
  text: 'Back'
  link: '/wiki/cs2/guides/lan'
next: 
  text: 'Next'
  link: '/wiki/cs2/guides/lan/addons'
---

## Summary

This guide will show you how to set up a CS2 LAN server. Follow each of the steps from top to bottom, DO NOT skip any steps unless told to.
::: warning
Note that this guide will NOT show you how to set up a Public, non-LAN server! This guide also does not work with CS:GO, only CS2
:::
::: info
This guide is for **Windows**, see the guide for **Linux(TBA)** if you are on Linux.
:::

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

## 3. Running the Server

1. Navigate outside the `SteamCMD` folder, and create a new text file called `start.bat`.

2. Open to edit the file and add this text into it:

```ansi
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2
```

### Adding a Steam GSLT Token

1. Navigate to [Steam GSLT Tokens](https://steamcommunity.com/dev/managegameservers) (log in with steam if you aren't already) and create a new game server account. Set the ID as `730` and click create

Next copy the token and add it along with `+sv_setsteamaccount` to the `start.bat` file like this:

```ansi
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2 +sv_setsteamaccount XXX
```

(Replace XXX with your token.) Save the file.

Now if you run the file by double-clicking on it, it should run a terminal. If you get a prompt to give cs2 access through your firewall, press yes.

## 4. Connecting to the Server

::: warning
You have to run your own game before running the server!
<br>otherwise it will not let you launch your game.
:::

You can connect to the server by either:

1. Open the ingame `Community Server Browser` and go to the `LAN` tab, then press connect on the server.

2. Open the ingame console, and type in `connect localhost`.

## 5. Updating the Server

1. Open up `SteamCMD.exe`.

2. Type in `login anonymous` and hit enter.

3. Type in `app_update 730`, hit enter and wait for the terminal to reply with `success!`.

If it doesn't succeed, type `app_update 730 validate` instead. (This will overwrite `gameinfo.gi`)
