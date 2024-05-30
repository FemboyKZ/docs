---
title: CS2 Old Version Download Guide
description: Guide on getting older versions of CS2
prev: 
  text: 'Back'
  link: '/guides'
next: false
---

## Summary

The old versions of CS2 have all kinds of weird bugs and changes compared to latest. With this guide you can get any old version that was published by valve. 
<br>

Links:
<br>[SteamDB CS2](https://steamdb.info/app/730/depots/)

<br>

## 1. Opening the Steam Console

For this to work, you need to have the Steam App installed on your computer, and you need to be logged into it (with an account that owns CS2).

1. Open up your web-browser (Chrome, Edge, Firefox, etc...) and open up a new tab, then paste in: `steam://open/console` and press enter.

2. Steam (the app) should open up on the `console` page.

## 2. Choosing the version (Main Depot)

CS2's files are split between multiple depot's depending on OS and other factors. 

You should choose a build from the `Main Depot`, and then match that version on the other depots to get a working build.

1. [Main Depot](https://steamdb.info/depot/2347770/manifests/) - This is the main depot which has most of the files needed for the game, and will be needed regardless of your OS.

2. Choose a version that you would like to download and copy the `ManifestID`.

3. Open the `Steam Console`(as shown on step 1.) and type in the command 
<br>`download_depot 730 2347770` followed by the `ManifestID` of the version you have chosen.

Example:

```json
download_depot 730 2347770 5035069459473518974
```

::: info
`730` = AppID (CS2)
<br>`2347770` = DepotID (Main Build)
<br>`5035069459473518974` = ManfiestID (May 2, 2024)
:::

This will start the download for the gamefiles. The files will be downloaded to:

```go
C:\Program Files (x86)\Steam\steamapps\content\app_730\
```

::: warning
Do not close Steam until the download has finished. It could take up to a few hours depedning on internet and drive speeds.
:::

## 3. Downloading the rest of the files

Check the date on the Manifest you chose in step 2. and find ManifestID's for matching dates on:

::: tip
If there is no exact match for dates on one of the depot's, get the latest `earlier` manifest instead.
:::

[Windows Build Depot](https://steamdb.info/depot/2347771/manifests/)

::: info
If you are on Linux or Mac, you may want to check:
<br>[MacOS Build Depot](https://steamdb.info/depot/2347772/manifests/)
<br>[Linux Build Depot](https://steamdb.info/depot/2347773/manifests/)
<br>Instead
:::

and

[VPK Files Depot](https://steamdb.info/depot/2347774/manifests/)

After finding the matching `ManifestIDs` for your desired build. Repeat the download command for each as follows:

Example (Windows):

```cpp
download_depot 730 2347771 5648449082650336844
```

VPK Files:

```cpp
download_depot 730 2347774 5617227416559801523
```

::: warning
Let each of the commands download all the files before entering the next command.
:::

## 4. Combining the folders

The files will have been downloaded into separate folders for each of the Depots.

All the downloaded files can be found in folders in:

```go
C:\Program Files (x86)\Steam\steamapps\content\app_730\
```

Each of the Depot folders should include a `\game\` folder.

Drag all of the `\game\` folders into a single folder, wherever you want your game install to locate.

## 5. Running the game

::: info
Since you will be on an older version of the game, you won't be able to connect to any public servers (Unless they are specifically running the same version).
:::

You can run the game by finding and then opening the `cs2.exe` located in `\game\bin\win64\`

This may be different on Linux/Mac.
