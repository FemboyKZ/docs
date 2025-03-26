---
title: KZ Commands
description: Info on commands specifc to the KZ plugins
prev:
  text: "Back"
  link: "/wiki/cs2/commands"
next:
  text: "Base Commands"
  link: "/wiki/cs2/commands/help"
---

# cs2kz-metamod commands

[Plugin](https://github.com/KZGlobalTeam/cs2kz-metamod/)

::: tip
Usage of commands:

In chat with `!` or `/` in front of command. Example: "!cp"

In console with the `kz_` prefix. Example: "kz_cp"

You can bind keys to all the commands. Example: "bind key kz_cp"
:::

## Checkpoint commands

|       Command        |            Usage (Chat)             |  Usage (Console)   | Info                                                     |
| :------------------: | :---------------------------------: | :----------------: | :------------------------------------------------------- |
|  **kz_checkpoint**   |    `!checkpoint` / `/checkpoint`    |  `kz_checkpoint`   | Set a checkpoint on ground or on a ladder.               |
|      **kz_cp**       |            `!cp` / `/cp`            |      `kz_cp`       | Set a checkpoint on ground or on a ladder.               |
|   **kz_teleport**    |      `!teleport` / `/teleport`      |   `kz_teleport`    | Teleport to the current checkpoint.                      |
|      **kz_tp**       |            `!tp` / `/tp`            |      `kz_tp`       | Teleport to the current checkpoint.                      |
|     **kz_undo**      |          `!undo` / `/undo`          |     `kz_undo`      | Undo teleport.                                           |
|    **kz_prevcp**     |        `!prevcp` / `/prevcp`        |    `kz_prevcp`     | Teleport to the last checkpoint.                         |
|      **kz_pcp**      |           `!pcp` / `/pcp`           |      `kz_pcp`      | Teleport to the last checkpoint.                         |
|    **kz_nextcp**     |        `!nextcp` / `/nextcp`        |    `kz_nextcp`     | Teleport to the next checkpoint.                         |
|      **kz_ncp**      |           `!ncp` / `/ncp`           |      `kz_ncp`      | Teleport to the next checkpoint.                         |
|  **kz_setstartpos**  |   `!setstartpos` / `/setstartpos`   |  `kz_setstartpos`  | Set your custom start position to your current position. |
|      **kz_ssp**      |           `!ssp` / `/ssp`           |      `kz_ssp`      | Set your custom start position to your current position. |
| **kz_clearstartpos** | `!clearstartpos` / `/clearstartpos` | `kz_clearstartpos` | Clear your custom start position.                        |
|      **kz_csp**      |           `!csp` / `/csp`           |      `kz_csp`      | Clear your custom start position.                        |

## Timer commands

|    Command     |      Usage (Chat)       | Usage (Console) | Info                |
| :------------: | :---------------------: | :-------------: | :------------------ |
| **kz_restart** | `!restart` / `/restart` |  `kz_restart`   | Restart.            |
|    **kz_r**    |       `!r` / `/r`       |     `kz_r`      | Restart.            |
|  **kz_pause**  |  `!pasuse` / `/pause`   |   `kz_pause`    | Toggle timer pause. |
|  **kz_stop**   |    `!stop` / `/stop`    |    `kz_stop`    | Stop timer.         |

## Statistics commands

|       Command       |           Usage (Chat)            |  Usage (Console)  | Info                                               |
| :-----------------: | :-------------------------------: | :---------------: | :------------------------------------------------- |
|      **kz_wr**      |           `!wr` / `/wr`           |      `kz_wr`      | Retrieve server and world records.                 |
|      **kz_sr**      |           `!sr` / `/sr`           |      `kz_sr`      | Retrieve server records.                           |
|    **kz_maptop**    |       `!maptop` / `/maptop`       |    `kz_maptop`    | Retrieve top course times of a map.                |
|  **kz_coursetop**   |    `!coursetop` / `/coursetop`    |  `kz_coursetop`   | Retrieve top course times of a map.                |
|     **kz_ctop**     |         `!ctop` / `/ctop`         |     `kz_ctop`     | Retrieve top course times of a map.                |
|   **kz_gmaptop**    |      `!gmaptop` / `/gmaptop`      |   `kz_gmaptop`    | Retrieve global top course times of a map.         |
|  **kz_gcoursetop**  |   `!gcoursetop` / `/gcoursetop`   |  `kz_gcoursetop`  | Retrieve global top course times of a map.         |
|    **kz_gctop**     |        `!gctop` / `/gctop`        |    `kz_gctop`     | Retrieve global top course times of a map.         |
|   **kz_smaptop**    |      `!smaptop` / `/smaptop`      |   `kz_smaptop`    | Retrieve server top course times of a map.         |
|  **kz_scoursetop**  |   `!scoursetop` / `/scoursetop`   |  `kz_scoursetop`  | Retrieve server top course times of a map.         |
|    **kz_sctop**     |        `!sctop` / `/sctop`        |    `kz_sctop`     | Retrieve server top course times of a map.         |
|      **kz_pb**      |           `!pb` / `/pb`           |      `kz_pb`      | Retrieve personal best statistics.                 |
|     **kz_gpb**      |          `!gpb` / `/gpb`          |     `kz_gpb`      | Retrieve global personal best statistics.          |
|     **kz_spb**      |          `!spb` / `/spb`          |     `kz_spb`      | Retrieve server personal best statistics.          |
| **kz_comparelevel** | `!comparelevel` / `/comparelevel` | `kz_comparelevel` | Set the maximum preferred level of run comparison. |

## Preference commands

|      Command      |         Usage (Chat)          | Usage (Console) | Info                            |
| :---------------: | :---------------------------: | :-------------: | :------------------------------ |
|    **kz_hide**    |       `!hide` / `/hide`       |    `kz_hide`    | Hide other players.             |
|  **kz_hidelegs**  |   `!hidelegs` / `/hidelegs`   |  `kz_hidelegs`  | Hide your legs in first person. |
| **kz_hideweapon** | `!hideweapon` / `/hideweapon` | `kz_hideweapon` | Hide weapon viewmodel.          |
|   **kz_panel**    |      `!panel` / `/panel`      |   `kz_panel`    | Toggle centre panel display.    |
|  **kz_language**  |   `!language` / `/language`   |  `kz_language`  | Switch current language.        |
|    **kz_tips**    |       `!tips` / `/tips`       |    `kz_tips`    | Toggle tips.                    |

## Jumpstat commands

|      Command       |          Usage (Chat)           | Usage (Console)  | Info                                                  |
| :----------------: | :-----------------------------: | :--------------: | :---------------------------------------------------- |
|     **kz_lj**      |          `!lj` / `/lj`          |     `kz_lj`      | Teleport to the jumpstat area.                        |
|   **kz_ljarea**    |      `!ljarea` / `/ljarea`      |   `kz_ljarea`    | Teleport to the jumpstat area.                        |
|   **kz_jsarea**    |      `!jsarea` / `/jsarea`      |   `kz_jsarea`    | Teleport to the jumpstat area.                        |
| **kz_togglestats** | `!togglestats` / `/togglestats` | `kz_togglestats` | Toggle jumpstat reporting.                            |
|  **kz_togglejs**   |    `!togglejs` / `/togglejs`    |  `kz_togglejs`   | Toggle jumpstat reporting.                            |
|  **kz_jsalways**   |    `!jsalways` / `/jsalways`    |  `kz_jsalways`   | Toggle always-on jumpstats.                           |
| **kz_jsbroadcast** | `!jsbroadcast` / `/jsbroadcast` | `kz_jsbroadcast` | Change jumpstats minimum threshold for broadcasting.  |
|   **kz_jssound**   |     `!jssound` / `/jssound`     |   `kz_jssound`   | Change jumpstats minimum threshold for sound effects. |

## Mode and Style commands

|      Command       |          Usage (Chat)           | Usage (Console)  | Info                                |
| :----------------: | :-----------------------------: | :--------------: | :---------------------------------- |
|    **kz_mode**     |        `!mode` / `/mode`        |    `kz_mode`     | List or change mode.                |
|    **kz_style**    |       `!style` / `/style`       |    `kz_style`    | List, add, remove or toggle style.  |
| **kz_togglestyle** | `!togglestyle` / `/togglestyle` | `kz_togglestyle` | List or toggle style.               |
|  **kz_addstyle**   |    `!addstyle` / `/addstyle`    |  `kz_addstyle`   | List or add style.                  |
| **kz_removestyle** | `!removestyle` / `/removestyle` | `kz_removestyle` | List active styles or remove style. |
| **kz_clearstyles** | `!clearstyles` / `/clearstyles` | `kz_clearstyles` | Clear all styles.                   |
|     **kz_vnl**     |         `!vnl` / `/vnl`         |     `kz_vnl`     | Switch to Vanilla mode.             |
|     **kz_ckz**     |         `!ckz` / `/ckz`         |     `kz_ckz`     | Switch to Classic mode.             |

## Misc commands

|    Command    |     Usage (Chat)      | Usage (Console) | Info                                                               |
| :-----------: | :-------------------: | :-------------: | :----------------------------------------------------------------- |
| **kz_noclip** | `!noclip` / `/noclip` |   `kz_noclip`   | Toggle noclip.                                                     |
|   **kz_nc**   |     `!nc` / `/nc`     |     `kz_nc`     | Toggle noclip.                                                     |
|  **noclip**   |           -           |    `noclip`     | Toggle noclip.                                                     |
|  **kz_end**   |    `!end` / `/end`    |    `kz_end`     | Teleport to the end.                                               |
| **kz_course** | `!course` / `/course` |   `kz_course`   | Display the current course and the list of all courses in the map. |
|  **kz_goto**  |   `!goto` / `/goto`   |    `kz_goto`    | Go to a player.                                                    |
|  **kz_help**  |   `!help` / `/help`   |    `kz_help`    | Show this help message.                                            |

## Status commands

|      Command       |          Usage (Chat)           | Usage (Console)  | Info                                                        |
| :----------------: | :-----------------------------: | :--------------: | :---------------------------------------------------------- |
| **kz_globalcheck** | `!globalcheck` / `/globalcheck` | `kz_globalcheck` | Display the status of the GlobalAPI.                        |
|     **kz_gc**      |          `!gc` / `/gc`          |     `kz_gc`      | Display the status of the GlobalAPI.                        |
| **kz_playercheck** | `!playercheck` / `/playercheck` | `kz_playercheck` | Check the status of the specified player (default to self). |
|     **kz_pc**      |          `!pc` / `/pc`          |     `kz_pc`      | Check the status of the specified player (default to self). |
