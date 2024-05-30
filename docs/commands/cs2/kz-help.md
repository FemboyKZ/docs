---
title: KZ Commands
description: Info on commands specifc to the KZ plugins
prev: 
  text: 'Back'
  link: '/commands/cs2'
next: 
  text: 'Base Commands'
  link: '/commands/cs2/help'
---

## cs2kz-metamod commands

[Plugin](https://github.com/KZGlobalTeam/cs2kz-metamod/)

::: tip
Usage of commands:

In chat without with `!` or `/` in front of command.

In console with the `kz_`, `css_` or `mm_` prefix. (Depends on command.)

You can bind keys to all the commands. Example: "bind key kz_cp"
:::

## Checkpoint System

`kz_checkpoint` / `kz_cp` - Set a checkpoint on your current position.

`kz_teleport` / `kz_tp` - Teleport to (latest) checkpoint.

`kz_undo` - Undo your previous teleport.

`kz_prevcp` / `kz_pcp` - Teleport to the previous checkpoint.

`kz_nextcp` / `kz_ncp` - Teleport to the next checkpoint.


`kz_setstartpos` / `kz_ssp` - Set your custom start position to your current position.

`kz_clearstartpos` / `kz_csp` - Clear your custom start position.

## Hud / Visuals

`kz_panel` - Toggle (speed/keys/timer)panel display.

`kz_hide` - Toggle hiding other players.

`kz_hidelegs` - Toggle hiding legs in firstperson.

`kz_hideweapon` - Toggle hiding weapon viewmodel.

## Mode / Style

`kz_mode` - Change your current mode. - `Vanilla(VNL)` / `Classic(CKZ)`

`kz_ckz` - Change your current mode to Classic mode.

`kz_vnl` - Change your current mode to Vanilla mode.

`kz_style` - Change your current style. - `Normal(NRM)` / `Autobhop(ABH)`

## Timer

`kz_stop` - Stop the timer.

`kz_pause` - Toggle timer pause.

`kz_restart` / `kz_r` - Restart course(timer).

## Jumpstats

`kz_jsbroadcast` - Change jumpstats minimum broadcast tier.

`kz_jssound` - Change jumpstats sound effect minimum play tier.

::: info
`kz_jsbroadcast` and `kz_jssound` values go from `0` to `6` :

- `0` - `none`
- `1` - `meh`
- `2` - `impressive`
- `3` - `perfect`
- `4` - `godlike`
- `5` - `ownage`
- `6` - `wrecker`
:::

`kz_togglestats` / `kz_togglejs` - Toggle jumpstats print type.

`kz_jsalways` - Toggle printing jumpstats for ALL jumps, including invalids.

## Misc

`kz_tips` - Toggle printing tips.

`kz_spec` - Spectate another player/bot.

`kz_noclip` / `kz_nc` / `noclip`(no kz_ prefix) - Toggle noclip.

`jointeam`(no kz_ prefix) - Join a team

`kz_help` - Prints usage and list of commands.
