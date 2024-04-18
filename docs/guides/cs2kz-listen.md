---
title: CS2 KZ Listen Server
description: FKZ CS2 Listen Server Guide 
prev: false
next: false
---

# Summary

This guide will show you how to install and run plugins on a listen CS2 server for `mapping` purposes. 

Follow each of the steps from top to bottom, DO NOT skip any steps unless told to.
::: info
This guide does not work with CS:GO, only CS2
::: 

## All the needed links:

Plugins:
<br>[Metamod: Source (Dev 2.0x)](https://www.sourcemm.net/downloads.php/?branch=master)
<br>[cs2kz-metamod (WIP)](https://github.com/KZGlobalTeam/cs2kz-metamod)
<br>[KZ Maps on Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=730&searchtext=kz_)


## 1. Installing Metamod: Source

1. Open [Metamod: Source (Dev 2.0x) Downloads](https://www.sourcemm.net/downloads.php/?branch=master), and click to download the latest Build for your operating system (Windows/Linux).

2. You should have downloaded a `ZIP` file, extract it and move the whole `addons` folder into the `\csgo\` folder of your game.

The `\csgo\` folder can be found in: 
```
\steamapps\common\Counter-Strike Global Offensive\game\
```

::: tip
If you don't know where your game is installed:

Steam Library -> CS2 -> Properties -> Installed Files -> Browse..
:::


## 2. Installing the KZ Plugin

1. Open [cs2kz-metamod releases](https://github.com/KZGlobalTeam/cs2kz-metamod/releases) and download the latest `(pre-)release` for your operating system.

2. Extract the `ZIP`(Windows) or `tar.gz`(Linux), then drag the `addons` and `cfg` folders into the `\csgo\` folder.


## 3. Editing gameinfo files. 

1. Open the `gameinfo.gi` file found in 
```
\steamapps\common\Counter-Strike Global Offensive\game\csgo\
```
 in a text editor (notepad... etc).

2. Ignore the warning about editing the file, and add 
```
Game    csgo/addons/metamod
``` 
to the top of the section with similar inputs and save the file.

See: [example](https://femboy.kz/images/gameinfo.png)

3. Navigate to `\steamapps\common\Counter-Strike Global Offensive\game\csgo_core\`, and open the `gameinfo.gi` file.

Find and `delete` this whole part from the file:
```
CustomNavBuild
{
    ModuleName "server.dll"
    Interface  "customnavsystem001"
}
```
Save the file

::: tip
You may want to create copies of the original and modified files in separate folders for switching them back and forth more easily.
:::


## 4. Adding Launch Options

1. Open your `Steam Librarty` and right-click on Counter-Strike 2, click on `Properties` (Should be the option on the bottom).

2. In the `Launch Options` section there is a text field, add 
```
-insecure +install_dlc_workshoptools_cvar 1
``` 
to the field.

Close the `Properties`


## 5. Adding Required files for Mapping

1. Open `steamapps\common\Counter-Strike Global Offensive\content\csgo\` and create new folder called `addons`, enter it and create another folder called `metamod`.

2. Go back to `\steamapps\common\Counter-Strike Global Offensive\game\csgo\`, find and copy the `readonly_tools_asset_info.bin` file.

3. Paste the file into the 

`\steamapps\common\Counter-Strike Global Offensive\content\csgo\addons\metamod\`

 folder you created.


## Reversing CS2 back to playable:

Undo ALL the actions from steps `3.` and `4.`

::: tip
If you want to be safe:

Open CS2 `Properties` -> `Installed Files` -> `Verify integrity of local files`.
:::