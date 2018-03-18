# MVSTimers
HTML based Man Vs Stream incentivization management

**This project is still in early development and is not currently operational in any facet.**

## Introduction
The goal of this project is to create a completely offline HTML based system to assist in the managment of incentivization goals submitted for "Man VS Stream" - a streaming system run by MrLlamaSC (http://www.twitch.tv/mrllamasc). The intellectual operations for "Man Vs Stream" belong to MrLlamaSC.

While constructed as a website using HTML, CSS, and Javascript, the system is designed to be able to run locally on any PC using an HTML5 compatable browser. No internet connection, server hosting, or WAMP/XAMP type service required.

## Table of Contents
1. [MVSTimers Configuration](#configuration)
    1. [Creating new configuration settings](#create-configure)
    2. [Removing existing incentives](#remove-configure)
    3. [Exporting configuration settings](#export-configure)
    4. [Importing configuration settings](#import-configure)
2. [Operating MVSTimers](#operation)

## <a name="configuration"></a> MVSTimers Configuration
MVSTimers will store all configuration options (this includes incentivizations, history, and all active timers) into HTML5 local storage to allow for quick recovery in the event of a browser crash or closure.

MVSTimers is also capable of exporting current configuration to be shared, allowing moderators to easily pass off the current MVS operation through the use of a CSV, or JSON encoded text file.

Exports and imports can include seperately incentivization settings, history, and active timers.

### <a name="create-configure"></a> Creating new configuration settings
1. On the right, select "Add" next to the incentivization category desired
2. In the dialog, select the type of incentivization: Action, or Timer
  a. If Action, enter the name of the action to occur
  b. If Timer, enter the name of the timer, and set a duration for the incentive
3. Select OK. The new incentive should be added to the bottom of the list. These can be re-arranged as desired by dragging and dropping into the desired order. Order is preserved.

### <a name="remove-configure"></a> Removing existing incentives
1. On the right, select "Remove" next to the incentivization category you wish to remove an incentive from
2. Click the incentives you wish to remove from the category, this will visually depress the option
3. Click "Save"
4. Confirmation box will add for a final approval to remove listed options. Click OK to continue, or Cancel to adjust which options are to be removed.

### <a name="export-configure"></a> Exporting configuration settings
1. In the top right, click "Configuration"
2. Select "Export" from the menu
3. Select which configuration settings you would like to export
  a. If only "History" is selected, you can change the export type to CSV so the file may be rendered in a spreadsheet.
  b. If additional options are selected, the file will be a JSON encoded config file. Only a JSON file can be imported into MSVTimers
4. Select "Export".

### <a name="import-configure"></a> Importing configuration settings
*THIS WILL OVERWRITE ANY EXISTING LOCAL CONFIGURATION.*

1. In the top right, click "Configuration"
2. Select "Import" from the menu
3. Either drag and drop an exported MVSTimers config file, or select the file from your computer to be loaded
4. Once the file is finished being loaded into memory, you will be prompted to confirm import.


## <a name="operation"></a> Operating MVSTimers

1. Set the Start time
  a. Click "edit" next to the stream start time indicator in the top left
  b. Select from dropdown: "Set start time", "Set eclipsed time", or "start now"
    i. If "Set start time" enter the current time in the format suggested (hh-mm-ss) in 24 hour time, eg "16-34-12"
    ii. If "Set eclipsed time" enter the current stream duration timer in the format suggested (hh-mm-ss) in 24 hour time, eg. "00-04-33"
2. When an incentive is received, increment the correct category of incentive at the top in the circle
3. Once notified of the incentive identity, click the incentive title located on the right.
  a. This will automatically deduct from the incentive counter and add the incentive to the active section
  b. The active section will automatically sort incentives by remaining duration, with expired/lowest duration at the top
  c. If the incentive is already active, the existing incentive in the section will indicate the new addition (x[N] for Actions, or add the time for Timers)
4. Once an incentive has been cleared, select "Clear" on the incentive in the active section
5. On Timer incentives, you can add a minute quickly by selecting "Add 1min" on the incentive in the active (common punishment for breaking incentive rule).
6. On Timer incentives, you can adjust the remaining time by selecting "Edit"
  a. In the dialog, there is an option to "Halve" the remaining time (often a gift incentive), otherwise you can manually set the remaining time
7. If you wish to remove an incentive, and prevent it from being logged in the history (such as if the incentive was erroneously added), you can click the "X" to the left of the incentive name.
  a. This will increment the category of incentive by one.
  b. This will remove the incentive from the history log.
8. Expired incentives are indiciated with a strong red outline
9. When a Timer incentive expires, the browser will attempt to sound a "ding" to notify. This can be disabled by selecting "Configuration" in the top right, and selecting "Mute Timers" from the menu.

