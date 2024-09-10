# Documenting React Native Environment Setup

## System Requirements

- CPU: 12th Gen Intel Core i7-12700H x 20 Cores
- RAM: 64GiB
- OS Name: Debian GNU/Linux 12 Bookworm
- Linux Kernel Version: 6.1.0-25-amd64
- Shell: Fish Shell

## Environment Setup

1. Install nvm and Node.js by curling the official install script and piping it into bash. Here are the commands provided by the Node.js site:

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```

2. Install OpenJDK with the apt package manager by running

```bash
sudo apt install openjdk-17-jdk openjdk-17-jdk-headless openjdk-17-jre openjdk-17-jre-headless
```

3. Install Android Studio from the [official website](https://developer.android.com/studio/index.html), unzip the archive, cd into the bin/ directory and run ./studio.sh. You may need to run chmod +x studio.sh and/or run it with superuser privileges. Add the bin/ directory to your path so that you can run studio from anywhere. I chose to rename studio.sh to studio so that I can just run studio instead of studio.sh from the command line. Using the default configuration on startup will work for the React Native environment.

4. Install the Android SDK version 34 for Android 14.0 UpsideDownCake along with the Intel x86 Atom_64 System Image which are nested under the Android 14 option. Version 35 conflicts with some aspects of the React Native environment, at least for me and my classmates. You can install the SDK by opening Android Studio, clicking on "Configure", and selecting "SDK Manager." While in the SDK installation dialog, navigate to SDK tools and check Android Emulator and Android SDK Platform-Tools. Click "OK" and install. Find the device manager in Studio and create a new generic Android device running Android 14.0 and the Android SDK 34.

5. Add the following lines to your .config/fish/config.fish file to set up your environment variables. Ensure that these paths point to where you installed these components, as I may have installed them in a different location from you.

```bash
set --export ANDROID_HOME $HOME/.programs/Android/Sdk
set --export PATH $PATH:$ANDROID_HOME/emulator
set --export PATH $PATH:$ANDROID_HOME/platform-tools
```

6. Install Watchman. Clone the [Github repo](https://github.com/facebook/watchman/), and then run the following commands. You must already have Cargo installed. If you don't, follow the instructions on the [rustup website](https://rustup.rs). If the autogen script fails, check the error messages; it is most likely due to you not having a specific package installed. Install the missing package with the apt package manager.

```bash
cd watchman

sudo ./install-system-packages.sh

./autogen.sh
```

## React Native Installation Instructions

1. Run the following command to uninstall previous installations of the React Native CLI if you have previously installed it globally:

   ```bash
   npm uninstall -g react-native-cli @react-native-community/cli
   ```

2. Use the React Native Community CLI to generate a new project by running the following command in your desired directory:

```bash
npx @react-native-community/cli@latest init <your-project-name>
```

3. Run the following command to check that your environment is set up. If Android Studio isn't running, you don't have a device emulator set up, or your environment is set up incorrectly, it will tell you and assist you in fixing it.

```bash
npx react-native doctor
```

4. To run the build tool for React Native and run your application on an android emulator, run

```bash
npx react-native start
```

in your project directory and type a for android. If you just have one Android emulator, it should automatically boot up and open for you. Congratulations, you are running a React Native app!
