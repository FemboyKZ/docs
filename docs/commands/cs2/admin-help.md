---
title: Admin Commands
description: Info on Admin commands
prev: 
  text: 'Back'
  link: '/commands/cs2'
next: 
  text: 'Base Commands'
  link: '/commands/cs2/help'
---

## Admin Commands

::: tip
Usage of commands:

In chat without with `!` or `/` in front of command.

In console with the `kz_`, `css_` or `mm_` prefix. (Depends on command.)

You can bind keys to all the commands. Example: "bind key kz_cp"
:::

::: info
Parameters in `<>` are required.

Parameters in `[]` are optional.

@css/ shows required perms to use command. See Perms in [Admin Groups](/wiki/servers/cs2/staff)
:::

## Info

@css/generic

`css_admin` - Display all admin commands

`css_who <#userid or name>`  - Display informations about player

`css_players` - Display player list

@css/kick

`css_hide` - Hide admin on scoreboard and commands action

## Map

@css/changemap

`css_map <mapname>` - Change map

`css_wsmap <name or id>` - Change workshop map

## Moderation - Bans

@css/ban

`css_ban <#userid or name> [time in minutes/0 perm] [reason]` - Ban player

`css_addban <steamid> [time in minutes/0 perm] [reason]` - Ban player via steamid64

`css_banip <ip> [time in minutes/0 perm] [reason]` - Ban player via IP address

`css_unban <steamid or name or ip>` - Unban player

@css/kick

`css_kick <#userid or name> [reason]` - Kick player

## Moderation - Chat / VoiceChat

@css/chat

`css_gag <#userid or name> [time in minutes/0 perm] [reason]` - Gag player

`css_addgag <steamid> [time in minutes/0 perm] [reason]` - Gag player via steamid64

`css_ungag <steamid or name>` - Ungag player

`css_mute <#userid or name> [time in minutes/0 perm] [reason]` - Mute player

`css_addmute <steamid> [time in minutes/0 perm] [reason]` - Mute player via steamid64

`css_unmute <steamid or name>` - Unmute player

`css_silence <#userid or name> [time in minutes/0 perm] [reason]` - Silence player

`css_addsilence <steamid> [time in minutes/0 perm] [reason]` - Silence player via steamid64

`css_unsilence <steamid or name>` - Unsilence player

## Moderation - Modify

@css/kick

`css_rename <#userid or name> <new name>` - Rename player

`css_team <#userid or name> [<ct/tt/spec/swap>] [-k]` - Change player team (swap - swap player team, -k - kill player)

@css/cheats

`css_respawn <#userid or name>` - Respawn player

`css_god <#userid or name>` - Toggle godmode for player

`css_noclip <#userid or name>` - Toggle noclip for player

`css_give <#userid or name> <weapon>` - Give weapon to player

@css/slay

`css_strip <#userid or name>` - Takes all of the player weapons

`css_hp <#userid or name> [health]` - Set player health

`css_speed <#userid or name> [speed]` - Set player speed

`css_slay <#userid or name>` - Kill player

`css_slap <#userid or name> [damage]` - Slap player

`css_freeze <#userid or name> [duration]` - Freeze player

`css_unfreeze <#userid or name>` - Unfreeze player

## Chat

@css/generic

`css_vote <"Question?"> ["Answer1"] ["Answer2"] ...` - Create vote

@css/chat

`css_asay <message>` - Say message to all admins

`css_say <message>` - Say message as admin in chat

`css_psay <#userid or name> <message>` - Sends private message to player

`css_csay <message>` - Say message as admin in center

`css_hsay <message>` - Say message as admin in hud

## Root

 @css/cvar

`css_cvar <cvar> <value>` - Change cvar value

@css/rcon

`css_rcon <command>` - Run command as server

`css_addadmin <steamid> <name> <flags/groups> <immunity>` - Add admin by steamid

`css_deladmin <steamid>` - Delete admin by steamid

`css_reladmin` - Reload sql admins
