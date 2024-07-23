---
title: CS2 Lan Server Maps
description: FKZ CS2 Lan Maps
prev: 
  text: 'Back'
  link: '/wiki/cs2/guides/lan'
next: 
  text: 'Next'
  link: '/wiki/cs2/guides/lan/kz'
---

## Adding KZ Maps

Maps could be added manually into the files as well, but `FastDL` does not exist in CS2, so you want to use Workshop instead.

1. Open up [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=730&searchtext=kz_) and look for a map or Collection of maps

2. Edit the `start.bat` file and add either `+host_workshop_map` or `+host_workshop_collection` command along with the `ID` of the map/collection to the 2nd row on the file like so:

```txt
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2 +host_workshop_map 3121168339
```

or

```txt
cd ".\steamcmd\steamapps\common\Counter-Strike Global Offensive\game\bin\win64\"
start cs2.exe -dedicated +map de_dust2 +host_workshop_collection 3210526079
```

(Replace [`3210526079`](https://steamcommunity.com/sharedfiles/filedetails/?id=3121168339)/[`3210526079`](https://steamcommunity.com/sharedfiles/filedetails/?id=3210526079) with what you want.)

::: warning
Currently the CS2 Workshop doesn't require you to use a GSLT token for maps, but this could change in the future.
:::
