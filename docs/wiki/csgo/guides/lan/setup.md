---
title: CS:GO Lan Server Setup Guide
description: FKZ CS:GO Lan Server Guide
prev:
  text: "Back"
  link: "/wiki/csgo/guides/lan"
next: false
---

## Summary

This guide will show you how to set up a CS:GO LAN server. Follow each of the steps from top to bottom, DO NOT skip any steps unless told to.
::: info
Note that this guide will NOT show you how to set up a Public, non-LAN server! This guide also does not work with CS2, only CS:GO.
:::
::: info
LAN Servers cannot be Globally whitelisted, and you won’t be able to set Global records on this type of a server.
:::

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

## 3. Running the Server

1. Navigate outside the `SteamCMD` folder, and create a new text file called `start.bat`.

2. Open to edit the file and add this text into it:

```txt
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive Beta - Dedicated Server\"
srcds -game csgo -tickrate 128 -console -usercon +map de_dust2
```

3. (Optional) Navigate to [Steam GSLT Tokens](https://steamcommunity.com/dev/managegameservers) (log in with steam if you aren't already) and create a new game server account. Set the ID as `730` (not 740) and click create

Next copy the token and add it along with `+sv_setsteamaccount` to the `start.bat` file like this:

```txt
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive Beta - Dedicated Server\"
srcds -game csgo -tickrate 128 -console -usercon +map de_dust2 +sv_setsteamaccount XXX
```

(Replace XXX with your token.) Save the file.

Now if you run the file by double-clicking on it, it should run a terminal. If you get a prompt to give CS:GO access through your firewall, press yes.

## 4. Connecting to the Server

::: warning
You have to run your own game before running the server!
<br>otherwise it will not let you launch your game.
:::

You can connect to the server by either:

1. Open the ingame `Community Server Browser` and go to the `LAN` tab, then press connect on the server.

::: tip
You can use `gameui_activate; gamemenucommand openserverbrowser` in your console to open the server browser.
:::

2. Open the ingame console, and type in `connect localhost`.

## 5. Updating the Server

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

## 6. Installing NoLobbyReservation

After a change to CS:GO csgo_legacy in February 2024, you need to use a plugin to get past the lobby creation system the game uses.

1. Open [The Github Page](https://github.com/vanz666/NoLobbyReservation/releases) and download the attached `ZIP` file.

2. Extract it and place the `addons` folder into the `\csgo\` folder.

## 7. Extras

### KZ Plugins

There are 2 major KZ plugins, which both use the same API for storing times, you should pick one to add to your server. Do not use both plugins at once.

- [KZTimer](/wiki/csgo/guides/lan/kztimer)
- [GOKZ](/wiki/csgo/guides/lan/gokz)

### [Useful Plugins](/wiki/csgo/guides/lan/useful-plugins)

### [Adding Admins](/wiki/csgo/guides/lan/admin)

### [Adding Maps](/wiki/csgo/guides/lan/maps)
