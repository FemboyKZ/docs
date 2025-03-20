---
title: Admin Commands
description: Info on Admin commands
prev:
  text: "Back"
  link: "/wiki/cs2/commands"
next:
  text: "Base Commands"
  link: "/wiki/cs2/commands/help"
---

# Admin Commands

::: tip
Usage of commands:

In chat with `!` or `/` in front of command. Example: "!give"

In console with the `css_` prefix. Example: "css_give"

You can bind keys to all the commands. Example: "bind key css_give"
:::

::: info
Parameters in `<>` are required.

Parameters in `[]` are optional.

@css/ shows required perms to use command. See Perms in [Admin Groups](/wiki/fkz/servers/perms)
:::

[Plugin](https://github.com/rcnoob/CS2-SimplerAdmin)

## Moderation - Bans

@css/ban

`ban <#userid or name> [time in minutes/0 perm] [reason]` - Ban a player

`addban <steamid> [time in minutes/0 perm] [reason]` - Ban a player via steamid64

`banip <ip> [time in minutes/0 perm] [reason]` - Ban a player via IP address

`unban <steamid or name or ip>` - Unba a player

@css/kick

`css_kick <#userid or name> [reason]` - Kick a player

## Moderation - Modify

@css/cheats

`css_give <#userid or name> <weapon>` - Give weapon to a player

## Root

@css/rcon

`css_rcon <command>` - Run command as server

`css_addadmin <steamid> <name> <flags/groups> <immunity> [time in minutes]` - Add an admin by steamid

`css_deladmin <steamid>` - Delete an admin by steamid

`css_reloadadmins` - Reload sql admins
