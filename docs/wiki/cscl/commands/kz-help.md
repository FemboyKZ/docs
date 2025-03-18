---
title: KZ Commands
description: Info on KZ commands
prev:
  text: "Back"
  link: "/wiki/cscl/commands"
next:
  text: "Base Commands"
  link: "/wiki/cscl/commands/help"
---

# KZ Commands

::: tip
Usage of commands:

In chat with `!` or `/` in front of the command. Example: "!menu"

In console with the `sm_` prefix. Example: "sm_menu"

You can bind keys to all the commands. Example: "bind key sm_menu"
:::

## Checkpoint System

`menu` / `cpmenu` - Opens the checkpoint menu

`adv` - Opens an advanced menu (adds next, prev and undo as numbered commands)

`checkpoint` - Save your current position

`gocheck` - Teleports you to the latest checkpoint

`next` - Teleports you to the next checkpoint

`prev` / `stuck` / `unstuck` - Teleports you to the previous checkpoint

`undo` - Undoes your last teleport, teleporting you back to your originating point

## Timer

`pause` - Toggles pause (Pauses the timer and freezes the player)

`r` / `start` - Teleport back to the start

`stop` - Stops your timer

## Player/Map Statistics

`profile` / `rank` Allows you to view player profiles via a menu.

`top` / `topclimbers` - Displays a menu for viewing top rankings (top 100 Players, top 50 overall, top 20 Pro/TP and top 20 for all jumpstats)

`maptop [map name]` - displays local map records (top 50 overall and top 20 Pro/TP) either for the current map or a given map

`avg` - Prints average completion time for the current map in the chat

`wr` - Prints records for the current map in the chat

`globaltop` - Displays a menu showing the global records for the current map

`mapinfo` - Prints information about the current map in chat

`latest` - Shows latest map records

`bhopcheck (Usage: @all, @me, <playername>)` - Checks bhop stats for a given player, printing them the both chat and console (except for bhopcheck @all, which prints only to console)

## HUD / Visuals

`speed/showkeys` - Toggles a centre panel showing player speed / keypresses

`hide` - Toggles hiding of other players

`hidechat` - Hides your ingame chatbox and voice icons

`hideweapon` - Hides your weapon model

`stopsound` - Stops map music

`flashlight` - Toggles the flashlight

`usp` - Spawns a USP-S for the player

## Challenges

`challenge` - Allows you to start a race against another player via a menu

`accept` - Allows you to accept a challenge request

`surrender` / `abort` - Surrenders your current challenge

`compare` - Compare your challenge results

## Jumpstats

`sync` - Toggles the printing of player strafe sync to chat

`beam` - Toggles a beam show jump trajectory

`measure` - Allows you to measure the height/distance between 2 points

`ljblock` - Registers an LJ block (usage: Stand on one LJ block and aim your crosshair at the opposite block to register it)

`ranks` - Prints the available player ranks in chat

## Misc

`options` - Opens the options menu

`showsettings` - Prints a list of the KZTimer server settings to the console

`help` / `helpmenu` - Opens a help menu which displays all KZTimer commands

`help2` - Explanation of the KZTimer ranking system

`goto [playername]` - Allows you to teleport to any player via a menu, or to a specific player identified by their name

`spec [player]` / `spectate [player]` / `watch [player]` - Allows you to spectate a player via a menu, switching you to spectators.

`specs` - Prints a list of all spectators in chat

`route` - Toggles glowing dots which show the route of the fastest replay bot
