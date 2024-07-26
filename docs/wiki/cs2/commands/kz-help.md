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

## Mode / Style

`mode` - Change your current mode, or display all available modes.

`ckz` - Change your current mode to Classic mode.

`ckzb` - Change your current mode to Classic-Bind mode. (FKZ ONLY)

`vnl` - Change your current mode to Vanilla mode.

`vnl128` - Change your current mode to Vanilla Fake-128t mode. (FKZ ONLY)

`style` - Change your current style. - `Normal(NRM)` / `Autobhop(ABH)`

## Timer

`stop` - Stop the timer.

`pause` - Toggle timer pause.

`restart` / `r` - Restart course(timer).

## Jumpstats

`jsbroadcast` - Change jumpstats minimum broadcast tier.

`jssound` - Change jumpstats sound effect minimum play tier.

::: info
`jsbroadcast` and `jssound` values go from `0` to `6` :

- `0` - `none`
- `1` - `meh`
- `2` - `impressive`
- `3` - `perfect`
- `4` - `godlike`
- `5` - `ownage`
- `6` - `wrecker`
:::

`togglestats` / `togglejs` - Toggle jumpstats print type.

`jsalways` - Toggle printing jumpstats for ALL jumps, including invalids.

## Misc

`tips` - Toggle printing tips.

`spec` - Spectate another player/bot.

`noclip` / `nc` / `noclip` - Toggle noclip.

`jointeam` - Join a team

`help` - Prints usage and list of commands.
