---
title: KZ Commands
description: Info on commands specifc to the KZ plugins
prev: 
  text: 'Back'
  link: '/wiki/cs2/commands'
next: 
  text: 'Base Commands'
  link: '/wiki/cs2/commands/help'
---

# cs2kz-metamod commands

[Plugin](https://github.com/KZGlobalTeam/cs2kz-metamod/)

::: tip
Usage of commands:

In chat with `!` or `/` in front of command. Example: "!cp"

In console with the `kz_` prefix. Example: "kz_cp"

You can bind keys to all the commands. Example: "bind key kz_cp"
:::

## Checkpoint System

`checkpoint` / `cp` - Set a checkpoint on your current position.

`teleport` / `tp` - Teleport to (latest) checkpoint.

`undo` - Undo your previous teleport.

`prevcp` / `pcp` - Teleport to the previous checkpoint.

`nextcp` / `ncp` - Teleport to the next checkpoint.

`setstartpos` / `ssp` - Set your custom start position to your current position.

`clearstartpos` / `csp` - Clear your custom start position.

## HUD / Visuals

`panel` - Toggle (speed/keys/timer)panel display.

`hide` - Toggle hiding other players.

`hidelegs` - Toggle hiding legs in firstperson.

`hideweapon` - Toggle hiding weapon viewmodel.

## Mode

::: info
Only Vanilla and ClassicKZ are offiical modes, all other mdoes are experimental FKZ specific modes.
:::

`mode` - Change your current mode, or display all available modes.

`ckz` - Change your current mode to Classic mode.

`ckzb` - Change your current mode to Classic-Bind mode. (FKZ ONLY)

`vnl` - Change your current mode to Vanilla mode.

`vnl128` - Change your current mode to Vanilla Fake-128t mode. (FKZ ONLY)

## Style

::: info
Currently existing styles:
`autobhop` / `abh` - Autobhop.
:::

`style <style>/+<style>/-<style>` - Change, add, remove or list styles.

`addstyle <style>` - Add a style.

`removestyle <style>` - Remove a style.

`togglestyle` - Toggle style.

`clearstyles` - Clear all styles.

`printallstyles` - Print all styles.

`printactivestyles` - Print active styles.

## Timer

`stop` - Stop the timer.

`pause` - Toggle timer pause.

`restart` / `r` - Restart course(timer).

## Jumpstats

`jsbroadcast` - Change jumpstats minimum broadcast tier.

`jssound <0-6/none/meh/impressive/perfect/godlike/ownage/wrecker>` - Change jumpstats sound effect minimum play tier.

`togglestats` / `togglejs` - Toggle jumpstats print type.

`jsalways` - Toggle printing jumpstats for ALL jumps, including invalids.

## Misc

`tips` - Toggle printing tips.

`spec <player>` - Spectate another player/bot.

`goto <playername>` - Teleport to another player/bot.

`noclip` / `nc` / `noclip` - Toggle noclip.

`help` - Prints usage and list of commands.
