# DENS Launcher

A modern Minecraft launcher for Windows with data stored on drive D, separate instances, offline profiles, catalog integrations, servers, skins, and a mod development mode.

## What is already included

* Electron + React + TypeScript project.
* Data is stored by default in `D:\DENS LAUNCHER\data`, without using `%AppData%\.minecraft`.
* Local settings, accounts, instances, skins, servers, and dev projects are stored in JSON.
* Offline accounts with UUIDs in the `OfflinePlayer:<name>` format.
* Basic installation and launch of vanilla Minecraft through Mojang manifests.
* Modrinth search and installation of the latest compatible mod version into the `mods` folder.
* CurseForge search using an API key from the settings.
* Server profiles, `server.properties`, `eula.txt`, and starting/stopping `server.jar`.
* Development mode: Gradle build, finding the latest jar in `build/libs`, replacing the old jar in `mods` or `libs`.
* Modern custom interface with sections: Play, Instances, Mods, Servers, Skins, Settings, Development Mode.

## First launch

1. Open the `Play` section.
2. Create an offline account.
3. Open `Instances` and create your first instance.
4. Return to `Play` and press `Play`.

## Important production improvements

* Finish the Microsoft device-code flow: Microsoft OAuth, Xbox Live, XSTS, Minecraft services.
* Add full resolvers/installers for Fabric, Forge, NeoForge, and Quilt.
* Implement downloading of vanilla `server.jar` and loader server installers.
* Replace manual path input with system file/folder pickers.
* Add packaging through electron-builder and code signing.
