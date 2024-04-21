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

# cs2kz-metamod commands
[Plugin](https://github.com/KZGlobalTeam/cs2kz-metamod/)

::: tip
Usage of commands:

In chat without with `!` or `/` in front of command.

In console with the `kz_`, `css_` or `mm_` prefix. (Depends on command.)

You can bind keys to all the commands. Example: "bind key kz_cp"
:::
# Checkpoint System
[source](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/checkpoint/commands.cpp)

`kz_checkpoint` / `kz_cp` - Set a checkpoint on your current position.

`kz_teleport` / `kz_tp` - Teleport to (latest) checkpoint.

`kz_prevcp` / `kz_pcp` - Teleport to the previous checkpoint.

`kz_nextcp` / `kz_ncp` - Teleport to the next checkpoint.

`kz_setstartpos` / `kz_ssp` - Set your custom start position to your current position.

`kz_clearstartpos` / `kz_csp` - Clear your custom start position.

# Hud / Visuals
[source1](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/hud/kz_hud.cpp), [source2](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/kz_misc.cpp)

`kz_panel` - Toggle (speed/keys/timer)panel display.

`kz_hide` - Toggle hiding other players. 

`kz_hidelegs` - Toggle hiding legs in firstperson.

`kz_hideweapon` - Toggle hiding weapon viewmodel.

# Mode / Style
[source](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/checkpoint/commands.cpp)

`kz_mode` - Change your current mode. - `Vanilla(VNL)` / `Classic(CKZ)`

`kz_style` - Change your current style. - `Normal(NRM)` / `Autobhop(ABH)`

# Timer
[source1](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/timer/kz_timer.cpp), [source2](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/kz_misc.cpp)

`kz_stop` - Stop the timer.

`kz_pause` - Toggle timer pause.

`kz_resart` / `kz_r` - Restart course(timer).

# Jumpstats
[source](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/jumpstats/kz_jumpstats.cpp)

`kz_jsbroadcast` - Change jumpstats minimum broadcast tier. 

`kz_jssound` - Change jumpstats sound effect minimum play tier.

`kz_togglestats` / `kz_togglejs` - Toggle jumpstats print type.

`kz_jsalways` - Toggle printing jumpstats for ALL jumps, including invalids.

# Tips
[source](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/tip/kz_tip.cpp)

`kz_tips` - Toggle printing tips.

# Misc
[source1](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/spec/spec.cpp), [Source2](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/noclip/kz_noclip.cpp), [source3](https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/src/kz/kz_misc.cpp)

`kz_spec` - Spectate another player/bot.

`kz_noclip` / `kz_nc` / `noclip`(no kz_ prefix) - Toggle noclip.

`jointeam`(no kz_ prefix) - Join a team

`kz_help` - Prints usage and list of commands.