// this is an auto generated file, do not change this manually

import { ServiceFunction, ServiceFunctionTypes, VacuumEntityState } from '@hakit/core';
declare module '@hakit/core' {
  export interface CustomSupportedServices<T extends ServiceFunctionTypes = 'target'> {
    homeassistant: {
      // Saves the persistent states immediately. Maintains the normal periodic saving interval.
      savePersistentStates: ServiceFunction<object, T, object>;
      // Generic action to turn devices off under any domain.
      turnOff: ServiceFunction<object, T, object>;
      // Generic action to turn devices on under any domain.
      turnOn: ServiceFunction<object, T, object>;
      // Generic action to toggle devices on/off under any domain.
      toggle: ServiceFunction<object, T, object>;
      // Stops Home Assistant.
      stop: ServiceFunction<object, T, object>;
      // Restarts Home Assistant.
      restart: ServiceFunction<object, T, object>;
      // Checks the Home Assistant YAML-configuration files for errors. Errors will be shown in the Home Assistant logs.
      checkConfig: ServiceFunction<object, T, object>;
      // Forces one or more entities to update its data.
      updateEntity: ServiceFunction<
        object,
        T,
        {
          // List of entities to force update.
          entity_id: string;
        }
      >;
      // Reloads the core configuration from the YAML-configuration.
      reloadCoreConfig: ServiceFunction<object, T, object>;
      // Updates the Home Assistant location.
      setLocation: ServiceFunction<
        object,
        T,
        {
          // Latitude of your location. @example 32.87336 @constraints  number: mode: box, min: -90, max: 90, step: any
          latitude: number;
          // Longitude of your location. @example 117.22743 @constraints  number: mode: box, min: -180, max: 180, step: any
          longitude: number;
          // Elevation of your location above sea level. @example 120 @constraints  number: mode: box, step: any
          elevation?: number;
        }
      >;
      // Reloads Jinja2 templates found in the `custom_templates` folder in your config. New values will be applied on the next render of the template.
      reloadCustomTemplates: ServiceFunction<object, T, object>;
      // Reloads the specified config entry.
      reloadConfigEntry: ServiceFunction<
        object,
        T,
        {
          // The configuration entry ID of the entry to be reloaded. @example 8955375327824e14ba89e4b29cc3ec9a
          entry_id?: string;
        }
      >;
      // Reload all YAML configuration that can be reloaded without restarting Home Assistant.
      reloadAll: ServiceFunction<object, T, object>;
    };
    persistentNotification: {
      // Shows a notification on the notifications panel.
      create: ServiceFunction<
        object,
        T,
        {
          // Message body of the notification. @example Please check your configuration.yaml.
          message: string;
          // Optional title of the notification. @example Test notification
          title?: string;
          // ID of the notification. This new notification will overwrite an existing notification with the same ID. @example 1234
          notification_id?: string;
        }
      >;
      // Deletes a notification from the notifications panel.
      dismiss: ServiceFunction<
        object,
        T,
        {
          // ID of the notification to be deleted. @example 1234
          notification_id: string;
        }
      >;
      // Deletes all notifications from the notifications panel.
      dismissAll: ServiceFunction<object, T, object>;
    };
    systemLog: {
      // Deletes all log entries.
      clear: ServiceFunction<object, T, object>;
      // Write log entry.
      write: ServiceFunction<
        object,
        T,
        {
          // Message to log. @example Something went wrong
          message: string;
          // Log level.
          level?: 'debug' | 'info' | 'warning' | 'error' | 'critical';
          // Logger name under which to log the message. Defaults to `system_log.external`. @example mycomponent.myplatform
          logger?: string;
        }
      >;
    };
    logger: {
      // Sets the default log level for integrations.
      setDefaultLevel: ServiceFunction<
        object,
        T,
        {
          // Default severity level for all integrations.
          level?: 'debug' | 'info' | 'warning' | 'error' | 'fatal' | 'critical';
        }
      >;
      // Sets the log level for one or more integrations.
      setLevel: ServiceFunction<object, T, object>;
    };
    person: {
      // Reloads persons from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    hassio: {
      // Starts an add-on.
      addonStart: ServiceFunction<
        object,
        T,
        {
          // The add-on to start. @example core_ssh
          addon: string;
        }
      >;
      // Stops an add-on.
      addonStop: ServiceFunction<
        object,
        T,
        {
          // The add-on to stop. @example core_ssh
          addon: string;
        }
      >;
      // Restarts an add-on.
      addonRestart: ServiceFunction<
        object,
        T,
        {
          // The add-on to restart. @example core_ssh
          addon: string;
        }
      >;
      // Updates an add-on. This action should be used with caution since add-on updates can contain breaking changes. It is highly recommended that you review release notes/change logs before updating an add-on.
      addonUpdate: ServiceFunction<
        object,
        T,
        {
          // The add-on to update. @example core_ssh
          addon: string;
        }
      >;
      // Writes data to the add-on's standard input.
      addonStdin: ServiceFunction<
        object,
        T,
        {
          // The add-on to write to. @example core_ssh
          addon: string;
        }
      >;
      // Powers off the host system.
      hostShutdown: ServiceFunction<object, T, object>;
      // Reboots the host system.
      hostReboot: ServiceFunction<object, T, object>;
      // Creates a full backup.
      backupFull: ServiceFunction<
        object,
        T,
        {
          // Optional (default = current date and time). @example Backup 1
          name?: string;
          // Password to protect the backup with. @example password
          password?: string;
          // Compresses the backup files.
          compressed?: boolean;
          // Name of a backup network storage to host backups. @example my_backup_mount
          location?: string;
          // Exclude the Home Assistant database file from backup
          homeassistant_exclude_database?: boolean;
        }
      >;
      // Creates a partial backup.
      backupPartial: ServiceFunction<
        object,
        T,
        {
          // Includes Home Assistant settings in the backup.
          homeassistant?: boolean;
          // Exclude the Home Assistant database file from backup
          homeassistant_exclude_database?: boolean;
          // List of add-ons to include in the backup. Use the name slug of each add-on. @example core_ssh,core_samba,core_mosquitto
          addons?: object;
          // List of directories to include in the backup. @example homeassistant,share
          folders?: object;
          // Optional (default = current date and time). @example Partial backup 1
          name?: string;
          // Password to protect the backup with. @example password
          password?: string;
          // Compresses the backup files.
          compressed?: boolean;
          // Name of a backup network storage to host backups. @example my_backup_mount
          location?: string;
        }
      >;
      // Restores from full backup.
      restoreFull: ServiceFunction<
        object,
        T,
        {
          // Slug of backup to restore from.
          slug: string;
          // Optional password. @example password
          password?: string;
        }
      >;
      // Restores from a partial backup.
      restorePartial: ServiceFunction<
        object,
        T,
        {
          // Slug of backup to restore from.
          slug: string;
          // Restores Home Assistant.
          homeassistant?: boolean;
          // List of directories to restore from the backup. @example homeassistant,share
          folders?: object;
          // List of add-ons to restore from the backup. Use the name slug of each add-on. @example core_ssh,core_samba,core_mosquitto
          addons?: object;
          // Optional password. @example password
          password?: string;
        }
      >;
    };
    update: {
      // Installs an update for a device or service.
      install: ServiceFunction<
        object,
        T,
        {
          // The version to install. If omitted, the latest version will be installed. @example 1.0.0
          version?: string;
          // If supported by the integration, this creates a backup before starting the update.
          backup?: boolean;
        }
      >;
      // Marks currently available update as skipped.
      skip: ServiceFunction<object, T, object>;
      // Removes the skipped version marker from an update.
      clearSkipped: ServiceFunction<object, T, object>;
    };
    backup: {
      // Creates a new backup with automatic backup settings.
      createAutomatic: ServiceFunction<object, T, object>;
    };
    frontend: {
      // Sets the default theme Home Assistant uses. Can be overridden by a user.
      setTheme: ServiceFunction<
        object,
        T,
        {
          // Name of a theme. @example default
          name: string;
          // Theme mode.
          mode?: 'dark' | 'light';
        }
      >;
      // Reloads themes from the YAML-configuration.
      reloadThemes: ServiceFunction<object, T, object>;
    };
    recorder: {
      // Starts purge task - to clean up old data from your database.
      purge: ServiceFunction<
        object,
        T,
        {
          // Number of days to keep the data in the database. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. @constraints  number: min: 0, max: 365, unit_of_measurement: days
          keep_days?: number;
          // Attempt to save disk space by rewriting the entire database file.
          repack?: boolean;
          // Apply `entity_id` and `event_type` filters in addition to time-based purge.
          apply_filter?: boolean;
        }
      >;
      // Starts a purge task to remove the data related to specific entities from your database.
      purgeEntities: ServiceFunction<
        object,
        T,
        {
          // List of entities for which the data is to be removed from the recorder database.
          entity_id?: string;
          // List of domains for which the data needs to be removed from the recorder database. @example sun
          domains?: object;
          // List of glob patterns used to select the entities for which the data is to be removed from the recorder database. @example domain*.object_id*
          entity_globs?: object;
          // Number of days to keep the data for rows matching the filter. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. The default of 0 days will remove all matching rows immediately. @constraints  number: min: 0, max: 365, unit_of_measurement: days
          keep_days?: number;
        }
      >;
      // Starts the recording of events and state changes.
      enable: ServiceFunction<object, T, object>;
      // Stops the recording of events and state changes.
      disable: ServiceFunction<object, T, object>;
    };
    cloud: {
      // Makes the instance UI accessible from outside of the local network by enabling your Home Assistant Cloud connection.
      remoteConnect: ServiceFunction<object, T, object>;
      // Disconnects the instance UI from Home Assistant Cloud. This disables access to it from outside your local network.
      remoteDisconnect: ServiceFunction<object, T, object>;
    };
    ffmpeg: {
      // Sends a start command to a ffmpeg based sensor.
      start: ServiceFunction<
        object,
        T,
        {
          // Name of entity that will start. Platform dependent.
          entity_id?: string;
        }
      >;
      // Sends a stop command to a ffmpeg based sensor.
      stop: ServiceFunction<
        object,
        T,
        {
          // Name of entity that will stop. Platform dependent.
          entity_id?: string;
        }
      >;
      // Sends a restart command to a ffmpeg based sensor.
      restart: ServiceFunction<
        object,
        T,
        {
          // Name of entity that will restart. Platform dependent.
          entity_id?: string;
        }
      >;
    };
    tts: {
      // Speaks something using text-to-speech on a media player.
      speak: ServiceFunction<
        object,
        T,
        {
          // Media players to play the message.
          media_player_entity_id: string;
          // The text you want to convert into speech so that you can listen to it on your device. @example My name is hanna
          message: string;
          // Stores this message locally so that when the text is requested again, the output can be produced more quickly.
          cache?: boolean;
          // Language to use for speech generation. @example ru
          language?: string;
          // A dictionary containing integration-specific options. @example platform specific
          options?: object;
        }
      >;
      // Removes all cached text-to-speech files and purges the memory.
      clearCache: ServiceFunction<object, T, object>;
      // Say something using text-to-speech on a media player with cloud.
      cloudSay: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example My name is hanna
          message: string;
          //
          cache?: boolean;
          //  @example ru
          language?: string;
          //  @example platform specific
          options?: object;
        }
      >;
    };
    scene: {
      // Reloads the scenes from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Activates a scene with configuration.
      apply: ServiceFunction<
        object,
        T,
        {
          // List of entities and their target state. @example light.kitchen: 'on' light.ceiling:   state: 'on'   brightness: 80
          entities: object;
          // Time it takes the devices to transition into the states defined in the scene. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
        }
      >;
      // Creates a new scene.
      create: ServiceFunction<
        object,
        T,
        {
          // The entity ID of the new scene. @example all_lights
          scene_id: string;
          // List of entities and their target state. If your entities are already in the target state right now, use 'Entities snapshot' instead. @example light.tv_back_light: 'on' light.ceiling:   state: 'on'   brightness: 200
          entities?: object;
          // List of entities to be included in the snapshot. By taking a snapshot, you record the current state of those entities. If you do not want to use the current state of all your entities for this scene, you can combine 'Entities snapshot' with 'Entity states'. @example - light.ceiling - light.kitchen
          snapshot_entities?: string;
        }
      >;
      // Deletes a dynamically created scene.
      delete: ServiceFunction<object, T, object>;
      // Activates a scene.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // Time it takes the devices to transition into the states defined in the scene. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
        }
      >;
    };
    camera: {
      // Enables the motion detection.
      enableMotionDetection: ServiceFunction<object, T, object>;
      // Disables the motion detection.
      disableMotionDetection: ServiceFunction<object, T, object>;
      // Turns off the camera.
      turnOff: ServiceFunction<object, T, object>;
      // Turns on the camera.
      turnOn: ServiceFunction<object, T, object>;
      // Takes a snapshot from a camera.
      snapshot: ServiceFunction<
        object,
        T,
        {
          // Full path to filename. @example /tmp/snapshot_{{ entity_id.name }}.jpg
          filename: string;
        }
      >;
      // Plays the camera stream on a supported media player.
      playStream: ServiceFunction<
        object,
        T,
        {
          // Media players to stream to.
          media_player: string;
          // Stream format supported by the media player.
          format?: 'hls';
        }
      >;
      // Creates a recording of a live camera feed.
      record: ServiceFunction<
        object,
        T,
        {
          // Full path to filename. Must be mp4. @example /tmp/snapshot_{{ entity_id.name }}.mp4
          filename: string;
          // Planned duration of the recording. The actual duration may vary. @constraints  number: min: 1, max: 3600, unit_of_measurement: seconds
          duration?: number;
          // Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          lookback?: number;
        }
      >;
    };
    conversation: {
      // Launches a conversation from a transcribed text.
      process: ServiceFunction<
        object,
        T,
        {
          // Transcribed text input. @example Turn all lights on
          text: string;
          // Language of text. Defaults to server language. @example NL
          language?: string;
          // Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands. @example homeassistant
          agent_id?: string;
          // ID of the conversation, to be able to continue a previous conversation @example my_conversation_1
          conversation_id?: string;
        }
      >;
      // Reloads the intent configuration.
      reload: ServiceFunction<
        object,
        T,
        {
          // Language to clear cached intents for. Defaults to server language. @example NL
          language?: string;
          // Conversation agent to reload. @example homeassistant
          agent_id?: string;
        }
      >;
    };
    logbook: {
      // Creates a custom entry in the logbook.
      log: ServiceFunction<
        object,
        T,
        {
          // Custom name for an entity, can be referenced using an `entity_id`. @example Kitchen
          name: string;
          // Message of the logbook entry. @example is being used
          message: string;
          // Entity to reference in the logbook entry.
          entity_id?: string;
          // Determines which icon is used in the logbook entry. The icon illustrates the integration domain related to this logbook entry. @example light
          domain?: string;
        }
      >;
    };
    script: {
      // Reloads all the available scripts.
      reload: ServiceFunction<object, T, object>;
      // Runs the sequence of actions defined in a script.
      turnOn: ServiceFunction<object, T, object>;
      // Stops a running script.
      turnOff: ServiceFunction<object, T, object>;
      // Starts a script if it isn't running, stops it otherwise.
      toggle: ServiceFunction<object, T, object>;
    };
    inputButton: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Mimics the physical button press on the device.
      press: ServiceFunction<object, T, object>;
    };
    inputNumber: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Sets the value.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The target value. @constraints  number: min: 0, max: 9223372036854776000, step: 0.001, mode: box
          value: number;
        }
      >;
      // Increments the current value by 1 step.
      increment: ServiceFunction<object, T, object>;
      // Decrements the current value by 1 step.
      decrement: ServiceFunction<object, T, object>;
    };
    group: {
      // Reloads group configuration, entities, and notify services from YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Creates/Updates a group.
      set: ServiceFunction<
        object,
        T,
        {
          // Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id]. @example test_group
          object_id: string;
          // Name of the group. @example My test group
          name?: string;
          // Name of the icon for the group. @example mdi:camera
          icon?: string;
          // List of all members in the group. Cannot be used in combination with `Add entities` or `Remove entities`. @example domain.entity_id1, domain.entity_id2
          entities?: string;
          // List of members to be added to the group. Cannot be used in combination with `Entities` or `Remove entities`. @example domain.entity_id1, domain.entity_id2
          add_entities?: string;
          // List of members to be removed from a group. Cannot be used in combination with `Entities` or `Add entities`. @example domain.entity_id1, domain.entity_id2
          remove_entities?: string;
          // Enable this option if the group should only be used when all entities are in state `on`.
          all?: boolean;
        }
      >;
      // Removes a group.
      remove: ServiceFunction<
        object,
        T,
        {
          // Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id]. @example test_group
          object_id: object;
        }
      >;
    };
    light: {
      // Turns on one or more lights and adjusts their properties, even when they are turned on already.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // Duration it takes to get to next state. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
          // The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue. @example [255, 100, 100]
          rgb_color?: [number, number, number];
          // Color temperature in Kelvin. @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          kelvin?: number | object;
          // Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          brightness_pct?: number;
          // Change brightness by a percentage. @constraints  number: min: -100, max: 100, unit_of_measurement: %
          brightness_step_pct?: number;
          // Light effect.
          effect?: string;
          //  @example [255, 100, 100, 50]
          rgbw_color?: [number, number, number, number];
          //  @example [255, 100, 100, 50, 70]
          rgbww_color?: [number, number, number, number, number];
          //
          color_name?:
            | 'homeassistant'
            | 'aliceblue'
            | 'antiquewhite'
            | 'aqua'
            | 'aquamarine'
            | 'azure'
            | 'beige'
            | 'bisque'
            | 'blanchedalmond'
            | 'blue'
            | 'blueviolet'
            | 'brown'
            | 'burlywood'
            | 'cadetblue'
            | 'chartreuse'
            | 'chocolate'
            | 'coral'
            | 'cornflowerblue'
            | 'cornsilk'
            | 'crimson'
            | 'cyan'
            | 'darkblue'
            | 'darkcyan'
            | 'darkgoldenrod'
            | 'darkgray'
            | 'darkgreen'
            | 'darkgrey'
            | 'darkkhaki'
            | 'darkmagenta'
            | 'darkolivegreen'
            | 'darkorange'
            | 'darkorchid'
            | 'darkred'
            | 'darksalmon'
            | 'darkseagreen'
            | 'darkslateblue'
            | 'darkslategray'
            | 'darkslategrey'
            | 'darkturquoise'
            | 'darkviolet'
            | 'deeppink'
            | 'deepskyblue'
            | 'dimgray'
            | 'dimgrey'
            | 'dodgerblue'
            | 'firebrick'
            | 'floralwhite'
            | 'forestgreen'
            | 'fuchsia'
            | 'gainsboro'
            | 'ghostwhite'
            | 'gold'
            | 'goldenrod'
            | 'gray'
            | 'green'
            | 'greenyellow'
            | 'grey'
            | 'honeydew'
            | 'hotpink'
            | 'indianred'
            | 'indigo'
            | 'ivory'
            | 'khaki'
            | 'lavender'
            | 'lavenderblush'
            | 'lawngreen'
            | 'lemonchiffon'
            | 'lightblue'
            | 'lightcoral'
            | 'lightcyan'
            | 'lightgoldenrodyellow'
            | 'lightgray'
            | 'lightgreen'
            | 'lightgrey'
            | 'lightpink'
            | 'lightsalmon'
            | 'lightseagreen'
            | 'lightskyblue'
            | 'lightslategray'
            | 'lightslategrey'
            | 'lightsteelblue'
            | 'lightyellow'
            | 'lime'
            | 'limegreen'
            | 'linen'
            | 'magenta'
            | 'maroon'
            | 'mediumaquamarine'
            | 'mediumblue'
            | 'mediumorchid'
            | 'mediumpurple'
            | 'mediumseagreen'
            | 'mediumslateblue'
            | 'mediumspringgreen'
            | 'mediumturquoise'
            | 'mediumvioletred'
            | 'midnightblue'
            | 'mintcream'
            | 'mistyrose'
            | 'moccasin'
            | 'navajowhite'
            | 'navy'
            | 'navyblue'
            | 'oldlace'
            | 'olive'
            | 'olivedrab'
            | 'orange'
            | 'orangered'
            | 'orchid'
            | 'palegoldenrod'
            | 'palegreen'
            | 'paleturquoise'
            | 'palevioletred'
            | 'papayawhip'
            | 'peachpuff'
            | 'peru'
            | 'pink'
            | 'plum'
            | 'powderblue'
            | 'purple'
            | 'red'
            | 'rosybrown'
            | 'royalblue'
            | 'saddlebrown'
            | 'salmon'
            | 'sandybrown'
            | 'seagreen'
            | 'seashell'
            | 'sienna'
            | 'silver'
            | 'skyblue'
            | 'slateblue'
            | 'slategray'
            | 'slategrey'
            | 'snow'
            | 'springgreen'
            | 'steelblue'
            | 'tan'
            | 'teal'
            | 'thistle'
            | 'tomato'
            | 'turquoise'
            | 'violet'
            | 'wheat'
            | 'white'
            | 'whitesmoke'
            | 'yellow'
            | 'yellowgreen';
          //  @example [300, 70]
          hs_color?: [number, number];
          //  @example [0.52, 0.43]
          xy_color?: [number, number];
          //  @constraints  color_temp: unit: mired, min: 153, max: 500
          color_temp?: number | object;
          //  @constraints  number: min: 0, max: 255
          brightness?: number;
          //  @constraints  number: min: -225, max: 255
          brightness_step?: number;
          //
          white?: boolean;
          //  @example relax
          profile?: string;
          //
          flash?: 'long' | 'short';
        }
      >;
      // Turns off one or more lights.
      turnOff: ServiceFunction<
        object,
        T,
        {
          // Duration it takes to get to next state. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
          //
          flash?: 'long' | 'short';
        }
      >;
      // Toggles one or more lights, from on to off, or off to on, based on their current state.
      toggle: ServiceFunction<
        object,
        T,
        {
          // Duration it takes to get to next state. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
          // The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue. @example [255, 100, 100]
          rgb_color?: [number, number, number];
          // Color temperature in Kelvin. @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          kelvin?: number | object;
          // Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          brightness_pct?: number;
          // Light effect.
          effect?: string;
          //  @example [255, 100, 100, 50]
          rgbw_color?: [number, number, number, number];
          //  @example [255, 100, 100, 50, 70]
          rgbww_color?: [number, number, number, number, number];
          //
          color_name?:
            | 'homeassistant'
            | 'aliceblue'
            | 'antiquewhite'
            | 'aqua'
            | 'aquamarine'
            | 'azure'
            | 'beige'
            | 'bisque'
            | 'blanchedalmond'
            | 'blue'
            | 'blueviolet'
            | 'brown'
            | 'burlywood'
            | 'cadetblue'
            | 'chartreuse'
            | 'chocolate'
            | 'coral'
            | 'cornflowerblue'
            | 'cornsilk'
            | 'crimson'
            | 'cyan'
            | 'darkblue'
            | 'darkcyan'
            | 'darkgoldenrod'
            | 'darkgray'
            | 'darkgreen'
            | 'darkgrey'
            | 'darkkhaki'
            | 'darkmagenta'
            | 'darkolivegreen'
            | 'darkorange'
            | 'darkorchid'
            | 'darkred'
            | 'darksalmon'
            | 'darkseagreen'
            | 'darkslateblue'
            | 'darkslategray'
            | 'darkslategrey'
            | 'darkturquoise'
            | 'darkviolet'
            | 'deeppink'
            | 'deepskyblue'
            | 'dimgray'
            | 'dimgrey'
            | 'dodgerblue'
            | 'firebrick'
            | 'floralwhite'
            | 'forestgreen'
            | 'fuchsia'
            | 'gainsboro'
            | 'ghostwhite'
            | 'gold'
            | 'goldenrod'
            | 'gray'
            | 'green'
            | 'greenyellow'
            | 'grey'
            | 'honeydew'
            | 'hotpink'
            | 'indianred'
            | 'indigo'
            | 'ivory'
            | 'khaki'
            | 'lavender'
            | 'lavenderblush'
            | 'lawngreen'
            | 'lemonchiffon'
            | 'lightblue'
            | 'lightcoral'
            | 'lightcyan'
            | 'lightgoldenrodyellow'
            | 'lightgray'
            | 'lightgreen'
            | 'lightgrey'
            | 'lightpink'
            | 'lightsalmon'
            | 'lightseagreen'
            | 'lightskyblue'
            | 'lightslategray'
            | 'lightslategrey'
            | 'lightsteelblue'
            | 'lightyellow'
            | 'lime'
            | 'limegreen'
            | 'linen'
            | 'magenta'
            | 'maroon'
            | 'mediumaquamarine'
            | 'mediumblue'
            | 'mediumorchid'
            | 'mediumpurple'
            | 'mediumseagreen'
            | 'mediumslateblue'
            | 'mediumspringgreen'
            | 'mediumturquoise'
            | 'mediumvioletred'
            | 'midnightblue'
            | 'mintcream'
            | 'mistyrose'
            | 'moccasin'
            | 'navajowhite'
            | 'navy'
            | 'navyblue'
            | 'oldlace'
            | 'olive'
            | 'olivedrab'
            | 'orange'
            | 'orangered'
            | 'orchid'
            | 'palegoldenrod'
            | 'palegreen'
            | 'paleturquoise'
            | 'palevioletred'
            | 'papayawhip'
            | 'peachpuff'
            | 'peru'
            | 'pink'
            | 'plum'
            | 'powderblue'
            | 'purple'
            | 'red'
            | 'rosybrown'
            | 'royalblue'
            | 'saddlebrown'
            | 'salmon'
            | 'sandybrown'
            | 'seagreen'
            | 'seashell'
            | 'sienna'
            | 'silver'
            | 'skyblue'
            | 'slateblue'
            | 'slategray'
            | 'slategrey'
            | 'snow'
            | 'springgreen'
            | 'steelblue'
            | 'tan'
            | 'teal'
            | 'thistle'
            | 'tomato'
            | 'turquoise'
            | 'violet'
            | 'wheat'
            | 'white'
            | 'whitesmoke'
            | 'yellow'
            | 'yellowgreen';
          //  @example [300, 70]
          hs_color?: [number, number];
          //  @example [0.52, 0.43]
          xy_color?: [number, number];
          //  @constraints  color_temp: unit: mired, min: 153, max: 500
          color_temp?: number | object;
          //  @constraints  number: min: 0, max: 255
          brightness?: number;
          //
          white?: boolean;
          //  @example relax
          profile?: string;
          //
          flash?: 'long' | 'short';
        }
      >;
    };
    inputBoolean: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Turns on the helper.
      turnOn: ServiceFunction<object, T, object>;
      // Turns off the helper.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles the helper on/off.
      toggle: ServiceFunction<object, T, object>;
    };
    inputSelect: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Selects the first option.
      selectFirst: ServiceFunction<object, T, object>;
      // Selects the last option.
      selectLast: ServiceFunction<object, T, object>;
      // Select the next option.
      selectNext: ServiceFunction<
        object,
        T,
        {
          // If the option should cycle from the last to the first option on the list.
          cycle?: boolean;
        }
      >;
      // Selects an option.
      selectOption: ServiceFunction<
        object,
        T,
        {
          // Option to be selected. @example 'Item A'
          option: string;
        }
      >;
      // Selects the previous option.
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          // If the option should cycle from the last to the first option on the list.
          cycle?: boolean;
        }
      >;
      // Sets the options.
      setOptions: ServiceFunction<
        object,
        T,
        {
          // List of options. @example ['Item A', 'Item B', 'Item C']
          options: string;
        }
      >;
    };
    timer: {
      // Reloads timers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Starts a timer or restarts it with a provided duration.
      start: ServiceFunction<
        object,
        T,
        {
          // Custom duration to restart the timer with. @example 00:01:00 or 60
          duration?: string;
        }
      >;
      // Pauses a running timer, retaining the remaining duration for later continuation.
      pause: ServiceFunction<object, T, object>;
      // Resets a timer's duration to the last known initial value without firing the timer finished event.
      cancel: ServiceFunction<object, T, object>;
      // Finishes a running timer earlier than scheduled.
      finish: ServiceFunction<object, T, object>;
      // Changes a timer by adding or subtracting a given duration.
      change: ServiceFunction<
        object,
        T,
        {
          // Duration to add to or subtract from the running timer. @example 00:01:00, 60 or -60
          duration: string;
        }
      >;
    };
    zone: {
      // Reloads zones from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    shoppingList: {
      // Adds an item to the shopping list.
      addItem: ServiceFunction<
        object,
        T,
        {
          // The name of the item to add. @example Beer
          name: string;
        }
      >;
      // Removes the first item with matching name from the shopping list.
      removeItem: ServiceFunction<
        object,
        T,
        {
          // The name of the item to remove. @example Beer
          name: string;
        }
      >;
      // Marks the first item with matching name as completed in the shopping list.
      completeItem: ServiceFunction<
        object,
        T,
        {
          // The name of the item to mark as completed (without removing). @example Beer
          name: string;
        }
      >;
      // Marks the first item with matching name as incomplete in the shopping list.
      incompleteItem: ServiceFunction<
        object,
        T,
        {
          // The name of the item to mark as incomplete. @example Beer
          name: string;
        }
      >;
      // Marks all items as completed in the shopping list (without removing them from the list).
      completeAll: ServiceFunction<object, T, object>;
      // Marks all items as incomplete in the shopping list.
      incompleteAll: ServiceFunction<object, T, object>;
      // Removes completed items from the shopping list.
      clearCompletedItems: ServiceFunction<object, T, object>;
      // Sorts all items by name in the shopping list.
      sort: ServiceFunction<
        object,
        T,
        {
          // Whether to sort in reverse (descending) order.
          reverse?: boolean;
        }
      >;
    };
    inputText: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Sets the value.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The target value. @example This is an example text
          value: string;
        }
      >;
    };
    cast: {
      // Shows a dashboard view on a Chromecast device.
      showLovelaceView: ServiceFunction<
        object,
        T,
        {
          // Media player entity to show the dashboard view on.
          entity_id: string;
          // The URL path of the dashboard to show. @example lovelace-cast
          dashboard_path: string;
          // The URL path of the dashboard view to show. @example downstairs
          view_path?: string;
        }
      >;
    };
    counter: {
      // Increments a counter by its step size.
      increment: ServiceFunction<object, T, object>;
      // Decrements a counter by its step size.
      decrement: ServiceFunction<object, T, object>;
      // Resets a counter to its initial value.
      reset: ServiceFunction<object, T, object>;
      // Sets the counter to a specific value.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The new counter value the entity should be set to. @constraints  number: min: 0, max: 9223372036854776000, mode: box
          value: number;
        }
      >;
    };
    mqtt: {
      // Publishes a message to an MQTT topic.
      publish: ServiceFunction<
        object,
        T,
        {
          // Topic to publish to. @example /homeassistant/hello
          topic: string;
          // The payload to publish. Publishes an empty message if not provided. @example The temperature is {{ states('sensor.temperature') }}
          payload?: object;
          // When `payload` is a Python bytes literal, evaluate the bytes literal and publish the raw data.
          evaluate_payload?: boolean;
          // Quality of Service to use. 0: At most once. 1: At least once. 2: Exactly once.
          qos?: '0' | '1' | '2';
          // If the message should have the retain flag set. If set, the broker stores the most recent message on a topic.
          retain?: boolean;
        }
      >;
      // Writes all messages on a specific topic into the `mqtt_dump.txt` file in your configuration folder.
      dump: ServiceFunction<
        object,
        T,
        {
          // Topic to listen to. @example OpenZWave/#
          topic?: string;
          // How long we should listen for messages in seconds. @constraints  number: min: 1, max: 300, unit_of_measurement: seconds
          duration?: number;
        }
      >;
      // Reloads MQTT entities from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    homekit: {
      // Resets a HomeKit accessory.
      resetAccessory: ServiceFunction<object, T, object>;
      // Forcefully removes all pairings from an accessory to allow re-pairing. Use this action if the accessory is no longer responsive, and you want to avoid deleting and re-adding the entry. Room locations, and accessory preferences will be lost.
      unpair: ServiceFunction<object, T, object>;
      // Reloads HomeKit and re-processes the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    schedule: {
      // Reloads schedules from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    inputDatetime: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Sets the date and/or time.
      setDatetime: ServiceFunction<
        object,
        T,
        {
          // The target date. @example '2019-04-20'
          date?: string;
          // The target time. @example '05:04:20'
          time?: string;
          // The target date & time. @example '2019-04-20 05:04:20'
          datetime?: string;
          // The target date & time, expressed by a UNIX timestamp. @constraints  number: min: 0, max: 9223372036854776000, mode: box
          timestamp?: number;
        }
      >;
    };
    watchman: {
      // Run the Watchman report
      report: ServiceFunction<
        object,
        T,
        {
          // Parse configuration files before generating the report. Usually, this is done automatically by Watchman, so this flag is typically not required. @example true
          parse_config?: boolean;
          //
          advanced_options?: object;
        }
      >;
    };
    todo: {
      // Adds a new to-do list item.
      addItem: ServiceFunction<
        object,
        T,
        {
          // The name that represents the to-do item. @example Submit income tax return
          item: string;
          // The date the to-do item is expected to be completed. @example 2023-11-17
          due_date?: string;
          // The date and time the to-do item is expected to be completed. @example 2023-11-17 13:30:00
          due_datetime?: string;
          // A more complete description of the to-do item than provided by the item name. @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // Updates an existing to-do list item based on its name.
      updateItem: ServiceFunction<
        object,
        T,
        {
          // The current name of the to-do item. @example Submit income tax return
          item: string;
          // The new name for the to-do item @example Something else
          rename?: string;
          // A status or confirmation of the to-do item. @example needs_action
          status?: 'needs_action' | 'completed';
          // The date the to-do item is expected to be completed. @example 2023-11-17
          due_date?: string;
          // The date and time the to-do item is expected to be completed. @example 2023-11-17 13:30:00
          due_datetime?: string;
          // A more complete description of the to-do item than provided by the item name. @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // Removes an existing to-do list item by its name.
      removeItem: ServiceFunction<
        object,
        T,
        {
          // The name for the to-do list item.
          item: string;
        }
      >;
      // Gets items on a to-do list.
      getItems: ServiceFunction<
        object,
        T,
        {
          // Only return to-do items with the specified statuses. Returns not completed actions by default. @example needs_action
          status?: 'needs_action' | 'completed';
        }
      >;
      // Removes all to-do list items that have been completed.
      removeCompletedItems: ServiceFunction<object, T, object>;
    };
    notify: {
      // Sends a notification message.
      sendMessage: ServiceFunction<
        object,
        T,
        {
          // Your notification message.
          message: string;
          // Title for your notification message.
          title?: string;
        }
      >;
      // Sends a notification that is visible in the notifications panel.
      persistentNotification: ServiceFunction<
        object,
        T,
        {
          // Message body of the notification. @example The garage door has been open for 10 minutes.
          message: string;
          // Title of the notification. @example Your Garage Door Friend
          title?: string;
          // Some integrations provide extended functionality. For information on how to use _data_, refer to the integration documentation.. @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_terrijons_iphone integration.
      mobileAppTerrijonsIphone: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_galaxytabs9ultra integration.
      mobileAppGalaxytabs9Ultra: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the notify service.
      notify: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the alexa_media_alexa integration.
      alexaMediaAlexa: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the alexa_media service.
      alexaMedia: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
    };
    deviceTracker: {
      // Manually update the records of a seen legacy device tracker in the known_devices.yaml file.
      see: ServiceFunction<
        object,
        T,
        {
          // MAC address of the device. @example FF:FF:FF:FF:FF:FF
          mac?: string;
          // ID of the device (find the ID in `known_devices.yaml`). @example phonedave
          dev_id?: string;
          // Hostname of the device. @example Dave
          host_name?: string;
          // Name of the location where the device is located. The options are: `home`, `not_home`, or the name of the zone. @example home
          location_name?: string;
          // GPS coordinates where the device is located, specified by latitude and longitude (for example: [51.513845, -0.100539]). @example [51.509802, -0.086692]
          gps?: object;
          // Accuracy of the GPS coordinates. @constraints  number: min: 0, mode: box, unit_of_measurement: m
          gps_accuracy?: number;
          // Battery level of the device. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          battery?: number;
        }
      >;
    };
    hue: {
      // Activates a Hue scene with more control over the options.
      activateScene: ServiceFunction<
        object,
        T,
        {
          // Transition duration it takes to bring devices to the state defined in the scene. @constraints  number: min: 0, max: 3600, unit_of_measurement: seconds
          transition?: number;
          // Enable dynamic mode of the scene.
          dynamic?: boolean;
          // Speed of dynamic palette for this scene. @constraints  number: min: 0, max: 100
          speed?: number;
          // Set brightness for the scene. @constraints  number: min: 1, max: 255
          brightness?: number;
        }
      >;
      // Activates a Hue scene stored in the Hue hub.
      hueActivateScene: ServiceFunction<
        object,
        T,
        {
          // Name of Hue group/room from the Hue app. @example Living Room
          group_name?: string;
          // Name of Hue scene from the Hue app. @example Energize
          scene_name?: string;
          // Enable dynamic mode of the scene (V2 bridges and supported scenes only).
          dynamic?: boolean;
        }
      >;
    };
    switch: {
      // Turns a switch off.
      turnOff: ServiceFunction<object, T, object>;
      // Turns a switch on.
      turnOn: ServiceFunction<object, T, object>;
      // Toggles a switch on/off.
      toggle: ServiceFunction<object, T, object>;
    };
    mediaPlayer: {
      // Turns on the power of the media player.
      turnOn: ServiceFunction<object, T, object>;
      // Turns off the power of the media player.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles a media player on/off.
      toggle: ServiceFunction<object, T, object>;
      // Turns up the volume.
      volumeUp: ServiceFunction<object, T, object>;
      // Turns down the volume.
      volumeDown: ServiceFunction<object, T, object>;
      // Toggles play/pause.
      mediaPlayPause: ServiceFunction<object, T, object>;
      // Starts playing.
      mediaPlay: ServiceFunction<object, T, object>;
      // Pauses.
      mediaPause: ServiceFunction<object, T, object>;
      // Stops playing.
      mediaStop: ServiceFunction<object, T, object>;
      // Selects the next track.
      mediaNextTrack: ServiceFunction<object, T, object>;
      // Selects the previous track.
      mediaPreviousTrack: ServiceFunction<object, T, object>;
      // Removes all items from the playlist.
      clearPlaylist: ServiceFunction<object, T, object>;
      // Sets the volume level.
      volumeSet: ServiceFunction<
        object,
        T,
        {
          // The volume. 0 is inaudible, 1 is the maximum volume. @constraints  number: min: 0, max: 1, step: 0.01
          volume_level: number;
        }
      >;
      // Mutes or unmutes the media player.
      volumeMute: ServiceFunction<
        object,
        T,
        {
          // Defines whether or not it is muted.
          is_volume_muted: boolean;
        }
      >;
      // Allows you to go to a different part of the media that is currently playing.
      mediaSeek: ServiceFunction<
        object,
        T,
        {
          // Target position in the currently playing media. The format is platform dependent. @constraints  number: min: 0, max: 9223372036854776000, step: 0.01, mode: box
          seek_position: number;
        }
      >;
      // Groups media players together for synchronous playback. Only works on supported multiroom audio systems.
      join: ServiceFunction<
        object,
        T,
        {
          // The players which will be synced with the playback specified in 'Targets'. @example - media_player.multiroom_player2 - media_player.multiroom_player3
          group_members: string[];
        }
      >;
      // Sends the media player the command to change input source.
      selectSource: ServiceFunction<
        object,
        T,
        {
          // Name of the source to switch to. Platform dependent. @example video1
          source: string;
        }
      >;
      // Selects a specific sound mode.
      selectSoundMode: ServiceFunction<
        object,
        T,
        {
          // Name of the sound mode to switch to. @example Music
          sound_mode?: string;
        }
      >;
      // Starts playing specified media.
      playMedia: ServiceFunction<
        object,
        T,
        {
          // The ID of the content to play. Platform dependent. @example https://home-assistant.io/images/cast/splash.png
          media_content_id: string | number;
          // The type of the content to play. Such as image, music, tv show, video, episode, channel, or playlist. @example music
          media_content_type: string;
          // If the content should be played now or be added to the queue.
          enqueue?: 'play' | 'next' | 'add' | 'replace';
          // If the media should be played as an announcement. @example true
          announce?: boolean;
        }
      >;
      // Playback mode that selects the media in randomized order.
      shuffleSet: ServiceFunction<
        object,
        T,
        {
          // Whether or not shuffle mode is enabled.
          shuffle: boolean;
        }
      >;
      // Removes the player from a group. Only works on platforms which support player groups.
      unjoin: ServiceFunction<object, T, object>;
      // Playback mode that plays the media in a loop.
      repeatSet: ServiceFunction<
        object,
        T,
        {
          // Repeat mode to set.
          repeat: 'off' | 'all' | 'one';
        }
      >;
    };
    sonos: {
      // Takes a snapshot of a media player.
      snapshot: ServiceFunction<
        object,
        T,
        {
          // Name of entity that will be snapshot.
          entity_id?: string;
          // Whether the snapshot should include the group layout and the state of other speakers in the group.
          with_group?: boolean;
        }
      >;
      // Restores a snapshot of a media player.
      restore: ServiceFunction<
        object,
        T,
        {
          // Name of entity that will be restored.
          entity_id?: string;
          // Whether the group layout and the state of other speakers in the group should also be restored.
          with_group?: boolean;
        }
      >;
      // Sets a Sonos timer.
      setSleepTimer: ServiceFunction<
        object,
        T,
        {
          // Number of seconds to set the timer. @constraints  number: min: 0, max: 7200, unit_of_measurement: seconds
          sleep_time?: number;
        }
      >;
      // Clears a Sonos timer.
      clearSleepTimer: ServiceFunction<object, T, object>;
      // Updates an alarm with new time and volume settings.
      updateAlarm: ServiceFunction<
        object,
        T,
        {
          // The ID of the alarm to be updated. @constraints  number: min: 1, max: 1440, mode: box
          alarm_id: number;
          // The time for the alarm. @example 07:00
          time?: string;
          // The alarm volume level. @constraints  number: min: 0, max: 1, step: 0.01
          volume?: number;
          // Whether or not to enable the alarm.
          enabled?: boolean;
          // Whether the alarm also plays on grouped players.
          include_linked_zones?: boolean;
        }
      >;
      // Starts playing the queue from the first item.
      playQueue: ServiceFunction<
        object,
        T,
        {
          // Position of the song in the queue to start playing from. @constraints  number: min: 0, max: 10000, mode: box
          queue_position?: number;
        }
      >;
      // Removes an item from the queue.
      removeFromQueue: ServiceFunction<
        object,
        T,
        {
          // Position in the queue to remove. @constraints  number: min: 0, max: 10000, mode: box
          queue_position?: number;
        }
      >;
      // Returns the contents of the queue.
      getQueue: ServiceFunction<object, T, object>;
    };
    number: {
      // Sets the value of a number.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The target value to set. @example 42
          value?: string;
        }
      >;
    };
    cover: {
      // Opens a cover.
      openCover: ServiceFunction<object, T, object>;
      // Closes a cover.
      closeCover: ServiceFunction<object, T, object>;
      // Moves a cover to a specific position.
      setCoverPosition: ServiceFunction<
        object,
        T,
        {
          // Target position. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          position: number;
        }
      >;
      // Stops the cover movement.
      stopCover: ServiceFunction<object, T, object>;
      // Toggles a cover open/closed.
      toggle: ServiceFunction<object, T, object>;
      // Tilts a cover open.
      openCoverTilt: ServiceFunction<object, T, object>;
      // Tilts a cover to close.
      closeCoverTilt: ServiceFunction<object, T, object>;
      // Stops a tilting cover movement.
      stopCoverTilt: ServiceFunction<object, T, object>;
      // Moves a cover tilt to a specific position.
      setCoverTiltPosition: ServiceFunction<
        object,
        T,
        {
          // Target tilt positition. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          tilt_position: number;
        }
      >;
      // Toggles a cover tilt open/closed.
      toggleCoverTilt: ServiceFunction<object, T, object>;
    };
    roku: {
      // Emulates opening the search screen and entering the search keyword.
      search: ServiceFunction<
        object,
        T,
        {
          // The keyword to search for. @example Space Jam
          keyword: string;
        }
      >;
    };
    remote: {
      // Sends the turn off command.
      turnOff: ServiceFunction<object, T, object>;
      // Sends the turn on command.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // Activity ID or activity name to be started. @example BedroomTV
          activity?: string;
        }
      >;
      // Sends the toggle command.
      toggle: ServiceFunction<object, T, object>;
      // Sends a command or a list of commands to a device.
      sendCommand: ServiceFunction<
        object,
        T,
        {
          // Device ID to send command to. @example 32756745
          device?: string;
          // A single command or a list of commands to send. @example Play
          command: object;
          // The number of times you want to repeat the commands. @constraints  number: min: 0, max: 255
          num_repeats?: number;
          // The time you want to wait in between repeated commands. @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds
          delay_secs?: number;
          // The time you want to have it held before the release is send. @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds
          hold_secs?: number;
        }
      >;
      // Learns a command or a list of commands from a device.
      learnCommand: ServiceFunction<
        object,
        T,
        {
          // Device ID to learn command from. @example television
          device?: string;
          // A single command or a list of commands to learn. @example Turn on
          command?: object;
          // The type of command to be learned.
          command_type?: 'ir' | 'rf';
          // If code must be stored as an alternative. This is useful for discrete codes. Discrete codes are used for toggles that only perform one function. For example, a code to only turn a device on. If it is on already, sending the code won't change the state.
          alternative?: boolean;
          // Timeout for the command to be learned. @constraints  number: min: 0, max: 60, step: 5, unit_of_measurement: seconds
          timeout?: number;
        }
      >;
      // Deletes a command or a list of commands from the database.
      deleteCommand: ServiceFunction<
        object,
        T,
        {
          // Device from which commands will be deleted. @example television
          device?: string;
          // The single command or the list of commands to be deleted. @example Mute
          command: object;
        }
      >;
    };
    select: {
      // Selects the first option.
      selectFirst: ServiceFunction<object, T, object>;
      // Selects the last option.
      selectLast: ServiceFunction<object, T, object>;
      // Selects the next option.
      selectNext: ServiceFunction<
        object,
        T,
        {
          // If the option should cycle from the last to the first.
          cycle?: boolean;
        }
      >;
      // Selects an option.
      selectOption: ServiceFunction<
        object,
        T,
        {
          // Option to be selected. @example 'Item A'
          option: string;
        }
      >;
      // Selects the previous option.
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          // If the option should cycle from the first to the last.
          cycle?: boolean;
        }
      >;
    };
    automation: {
      // Triggers the actions of an automation.
      trigger: ServiceFunction<
        object,
        T,
        {
          // Defines whether or not the conditions will be skipped.
          skip_condition?: boolean;
        }
      >;
      // Toggles (enable / disable) an automation.
      toggle: ServiceFunction<object, T, object>;
      // Enables an automation.
      turnOn: ServiceFunction<object, T, object>;
      // Disables an automation.
      turnOff: ServiceFunction<
        object,
        T,
        {
          // Stops currently running actions.
          stop_actions?: boolean;
        }
      >;
      // Reloads the automation configuration.
      reload: ServiceFunction<object, T, object>;
    };
    climate: {
      // Turns climate device on.
      turnOn: ServiceFunction<object, T, object>;
      // Turns climate device off.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles climate device, from on to off, or off to on.
      toggle: ServiceFunction<object, T, object>;
      // Sets HVAC operation mode.
      setHvacMode: ServiceFunction<
        object,
        T,
        {
          // HVAC operation mode.
          hvac_mode?: 'off' | 'auto' | 'cool' | 'dry' | 'fan_only' | 'heat_cool' | 'heat';
        }
      >;
      // Sets preset mode.
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          // Preset mode. @example away
          preset_mode: string;
        }
      >;
      // Turns auxiliary heater on/off.
      setAuxHeat: ServiceFunction<
        object,
        T,
        {
          // New value of auxiliary heater.
          aux_heat: boolean;
        }
      >;
      // Sets the temperature setpoint.
      setTemperature: ServiceFunction<
        object,
        T,
        {
          // The temperature setpoint. @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          temperature?: number;
          // The max temperature setpoint. @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          target_temp_high?: number;
          // The min temperature setpoint. @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          target_temp_low?: number;
          // HVAC operation mode.
          hvac_mode?: 'off' | 'auto' | 'cool' | 'dry' | 'fan_only' | 'heat_cool' | 'heat';
        }
      >;
      // Sets target humidity.
      setHumidity: ServiceFunction<
        object,
        T,
        {
          // Target humidity. @constraints  number: min: 30, max: 99, unit_of_measurement: %
          humidity: number;
        }
      >;
      // Sets fan operation mode.
      setFanMode: ServiceFunction<
        object,
        T,
        {
          // Fan operation mode. @example low
          fan_mode: string;
        }
      >;
      // Sets swing operation mode.
      setSwingMode: ServiceFunction<
        object,
        T,
        {
          // Swing operation mode. @example on
          swing_mode: string;
        }
      >;
      // Sets horizontal swing operation mode.
      setSwingHorizontalMode: ServiceFunction<
        object,
        T,
        {
          // Horizontal swing operation mode. @example on
          swing_horizontal_mode: string;
        }
      >;
    };
    button: {
      // Press the button entity.
      press: ServiceFunction<object, T, object>;
    };
    fan: {
      // Turns fan on.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // Speed of the fan. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          percentage?: number;
          // Preset fan mode. @example auto
          preset_mode?: string;
        }
      >;
      // Turns fan off.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles a fan on/off.
      toggle: ServiceFunction<object, T, object>;
      // Increases the speed of a fan.
      increaseSpeed: ServiceFunction<
        object,
        T,
        {
          // Percentage step by which the speed should be increased. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          percentage_step?: number;
        }
      >;
      // Decreases the speed of a fan.
      decreaseSpeed: ServiceFunction<
        object,
        T,
        {
          // Percentage step by which the speed should be decreased. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          percentage_step?: number;
        }
      >;
      // Controls the oscillation of a fan.
      oscillate: ServiceFunction<
        object,
        T,
        {
          // Turns oscillation on/off.
          oscillating: boolean;
        }
      >;
      // Sets a fan's rotation direction.
      setDirection: ServiceFunction<
        object,
        T,
        {
          // Direction of the fan rotation.
          direction: 'forward' | 'reverse';
        }
      >;
      // Sets the speed of a fan.
      setPercentage: ServiceFunction<
        object,
        T,
        {
          // Speed of the fan. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          percentage: number;
        }
      >;
      // Sets preset fan mode.
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          // Preset fan mode. @example auto
          preset_mode: string;
        }
      >;
    };
    humidifier: {
      // Turns the humidifier on.
      turnOn: ServiceFunction<object, T, object>;
      // Turns the humidifier off.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles the humidifier on/off.
      toggle: ServiceFunction<object, T, object>;
      // Sets the humidifier operation mode.
      setMode: ServiceFunction<
        object,
        T,
        {
          // Operation mode. For example, _normal_, _eco_, or _away_. For a list of possible values, refer to the integration documentation. @example away
          mode: string;
        }
      >;
      // Sets the target humidity.
      setHumidity: ServiceFunction<
        object,
        T,
        {
          // Target humidity. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          humidity: number;
        }
      >;
    };
    vesync: {
      // Add new VeSync devices to Home Assistant
      updateDevices: ServiceFunction<object, T, object>;
    };
    alarmControlPanel: {
      // Disarms the alarm.
      alarmDisarm: ServiceFunction<
        object,
        T,
        {
          // Code to disarm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed, but someone is home_.
      alarmArmHome: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed, no one home_.
      alarmArmAway: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed for the night_.
      alarmArmNight: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Sets the alarm to: _armed for vacation_.
      alarmArmVacation: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Arms the alarm while allowing to bypass a custom area.
      alarmArmCustomBypass: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Trigger the alarm manually.
      alarmTrigger: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
    };
    alexaMedia: {
      // Forces update of last_called echo device for each Alexa account.
      updateLastCalled: ServiceFunction<
        object,
        T,
        {
          // List of Alexa accounts to update. If empty, will update all known accounts. @example my_email@alexa.com
          email?: object;
        }
      >;
      // Force account to logout. Used mainly for debugging.
      forceLogout: ServiceFunction<
        object,
        T,
        {
          // Accounts to clear. Empty will clear all. @example my_email@alexa.com
          email?: object;
        }
      >;
    };
  }
  export interface CustomEntityNameContainer {
    names:
      | 'person.terrijon_fowler'
      | 'update.home_assistant_supervisor_update'
      | 'update.home_assistant_core_update'
      | 'update.dhcp_server_update'
      | 'update.terminal_ssh_update'
      | 'update.get_hacs_update'
      | 'update.airsonos_update'
      | 'update.mosquitto_broker_update'
      | 'update.mqtt_explorer_update'
      | 'update.file_editor_update'
      | 'update.node_red_update'
      | 'update.home_assistant_operating_system_update'
      | 'conversation.home_assistant'
      | 'light.entertainment_lights'
      | 'light.bar_lights'
      | 'zone.home'
      | 'sun.sun'
      | 'sensor.sun_next_dawn'
      | 'sensor.sun_next_dusk'
      | 'sensor.sun_next_midnight'
      | 'sensor.sun_next_noon'
      | 'sensor.sun_next_rising'
      | 'sensor.sun_next_setting'
      | 'govee.state'
      | 'sensor.watchman_last_updated'
      | 'sensor.watchman_missing_entities'
      | 'sensor.watchman_missing_actions'
      | 'todo.shopping_list'
      | 'binary_sensor.rpi_power_status'
      | 'binary_sensor.terrijons_iphone_focus'
      | 'device_tracker.terrijons_iphone'
      | 'sensor.terrijons_iphone_battery_level'
      | 'sensor.terrijons_iphone_sim_2'
      | 'sensor.terrijons_iphone_battery_state'
      | 'sensor.terrijons_iphone_ssid'
      | 'sensor.terrijons_iphone_storage'
      | 'sensor.terrijons_iphone_sim_1'
      | 'sensor.terrijons_iphone_bssid'
      | 'sensor.terrijons_iphone_geocoded_location'
      | 'sensor.terrijons_iphone_last_update_trigger'
      | 'sensor.terrijons_iphone_connection_type'
      | 'sensor.terrijons_iphone_app_version'
      | 'sensor.terrijons_iphone_location_permission'
      | 'sensor.terrijons_iphone_activity'
      | 'sensor.terrijons_iphone_distance'
      | 'sensor.terrijons_iphone_floors_ascended'
      | 'sensor.terrijons_iphone_steps'
      | 'sensor.terrijons_iphone_average_active_pace'
      | 'sensor.terrijons_iphone_floors_descended'
      | 'sensor.terrijons_iphone_audio_output'
      | 'device_tracker.galaxytabs9ultra'
      | 'sensor.galaxytabs9ultra_battery_level'
      | 'sensor.galaxytabs9ultra_battery_state'
      | 'sensor.galaxytabs9ultra_charger_type'
      | 'tts.google_translate_en_com'
      | 'light.flood_light_2'
      | 'light.terrijon_light_2'
      | 'light.back_porch_light'
      | 'light.side_yard_door_light'
      | 'light.right_lamp'
      | 'light.flood_light_1'
      | 'light.left_lamp'
      | 'light.terrijon_light_1'
      | 'light.master_bedroom_lamp'
      | 'light.front_porch_1'
      | 'light.front_porch_2'
      | 'light.vannary_light_2'
      | 'light.nursery'
      | 'light.vannary_light_1'
      | 'sensor.master_bedroom_lamp_zigbee_connectivity'
      | 'media_player.master_bedroom_google_home_mini'
      | 'media_player.basement_speaker'
      | 'media_player.kitchen_speaker'
      | 'update.watchman_update'
      | 'update.card_mod_update'
      | 'update.hacs_update'
      | 'light.game_3'
      | 'number.game_3_effect_speed'
      | 'sensor.game_3_signal_strength'
      | 'sensor.game_3_power'
      | 'cover.this_device_do_not_disturb_switch'
      | 'media_player.tv_samsung_6_series_65'
      | 'light.bar_2'
      | 'number.bar_2_effect_speed'
      | 'sensor.bar_2_signal_strength'
      | 'sensor.bar_2_power'
      | 'light.game_1'
      | 'number.game_1_effect_speed'
      | 'sensor.game_1_signal_strength'
      | 'sensor.game_1_power'
      | 'light.kitchen_4'
      | 'number.kitchen_4_effect_speed'
      | 'sensor.kitchen_4_signal_strength'
      | 'sensor.kitchen_4_power'
      | 'light.bedroom_hallway_1'
      | 'number.bedroom_hallway_1_effect_speed'
      | 'sensor.bedroom_hallway_1_signal_strength'
      | 'sensor.bedroom_hallway_1_power'
      | 'light.bedroom_hallway_3'
      | 'number.bedroom_hallway_3_effect_speed'
      | 'sensor.bedroom_hallway_3_signal_strength'
      | 'sensor.bedroom_hallway_3_power'
      | 'light.entertainment_3'
      | 'number.entertainment_3_effect_speed'
      | 'sensor.entertainment_3_signal_strength'
      | 'sensor.entertainment_3_power'
      | 'light.kitchen_5'
      | 'number.kitchen_5_effect_speed'
      | 'sensor.kitchen_5_signal_strength'
      | 'sensor.kitchen_5_power'
      | 'light.guest_hallway_1'
      | 'number.guest_hallway_1_effect_speed'
      | 'sensor.guest_hallway_1_signal_strength'
      | 'sensor.guest_hallway_1_power'
      | 'light.kitchen_3'
      | 'number.kitchen_3_effect_speed'
      | 'sensor.kitchen_3_signal_strength'
      | 'sensor.kitchen_3_power'
      | 'light.kitchen_1'
      | 'number.kitchen_1_effect_speed'
      | 'sensor.kitchen_1_signal_strength'
      | 'sensor.kitchen_1_power'
      | 'light.living_room_3'
      | 'number.living_room_3_effect_speed'
      | 'sensor.living_room_3_power'
      | 'light.walkout_5'
      | 'number.walkout_5_effect_speed'
      | 'sensor.walkout_5_signal_strength'
      | 'sensor.walkout_5_power'
      | 'light.walkout_3'
      | 'number.walkout_3_effect_speed'
      | 'sensor.walkout_3_signal_strength'
      | 'sensor.walkout_3_power'
      | 'light.bar_4'
      | 'number.bar_4_effect_speed'
      | 'sensor.bar_4_signal_strength'
      | 'sensor.bar_4_power'
      | 'light.office_2'
      | 'number.office_2_effect_speed'
      | 'sensor.office_2_signal_strength'
      | 'sensor.office_2_power'
      | 'light.walkout_1'
      | 'number.walkout_1_effect_speed'
      | 'sensor.walkout_1_signal_strength'
      | 'sensor.walkout_1_power'
      | 'light.living_room_2'
      | 'number.living_room_2_effect_speed'
      | 'sensor.living_room_2_power'
      | 'light.entertainment_4'
      | 'number.entertainment_4_effect_speed'
      | 'sensor.entertainment_4_signal_strength'
      | 'sensor.entertainment_4_power'
      | 'light.bar_3'
      | 'number.bar_3_effect_speed'
      | 'sensor.bar_3_signal_strength'
      | 'sensor.bar_3_power'
      | 'light.bedroom_hallway_2'
      | 'number.bedroom_hallway_2_effect_speed'
      | 'sensor.bedroom_hallway_2_signal_strength'
      | 'sensor.bedroom_hallway_2_power'
      | 'light.entertainment_1'
      | 'number.entertainment_1_effect_speed'
      | 'sensor.entertainment_1_signal_strength'
      | 'sensor.entertainment_1_power'
      | 'light.bar_1'
      | 'number.bar_1_effect_speed'
      | 'sensor.bar_1_signal_strength'
      | 'sensor.bar_1_power'
      | 'light.guest_hallway_2'
      | 'number.guest_hallway_2_effect_speed'
      | 'sensor.guest_hallway_2_signal_strength'
      | 'sensor.guest_hallway_2_power'
      | 'light.kitchen_2'
      | 'number.kitchen_2_effect_speed'
      | 'sensor.kitchen_2_signal_strength'
      | 'sensor.kitchen_2_power'
      | 'light.office_1'
      | 'number.office_1_effect_speed'
      | 'sensor.office_1_signal_strength'
      | 'sensor.office_1_power'
      | 'light.wiz_rgbw_tunable_59bca6'
      | 'number.wiz_rgbw_tunable_59bca6_effect_speed'
      | 'sensor.wiz_rgbw_tunable_59bca6_signal_strength'
      | 'sensor.wiz_rgbw_tunable_59bca6_power'
      | 'light.utility_hallway_1'
      | 'number.utility_hallway_1_effect_speed'
      | 'sensor.utility_hallway_1_signal_strength'
      | 'sensor.utility_hallway_1_power'
      | 'light.wiz_office_3'
      | 'number.wiz_office_3_effect_speed'
      | 'sensor.wiz_office_3_signal_strength'
      | 'sensor.wiz_office_3_power'
      | 'light.living_room_1'
      | 'number.living_room_1_effect_speed'
      | 'sensor.living_room_1_power'
      | 'media_player.living_room_tv_3'
      | 'light.entertainment_2'
      | 'number.entertainment_2_effect_speed'
      | 'sensor.entertainment_2_signal_strength'
      | 'sensor.entertainment_2_power'
      | 'binary_sensor.entertainment_tv_headphones_connected'
      | 'binary_sensor.entertainment_tv_supports_airplay'
      | 'binary_sensor.entertainment_tv_supports_ethernet'
      | 'binary_sensor.entertainment_tv_supports_find_remote'
      | 'media_player.entertainment_tv'
      | 'remote.entertainment_tv'
      | 'sensor.entertainment_tv_active_app'
      | 'sensor.entertainment_tv_active_app_id'
      | 'automation.sunset_main_lights'
      | 'automation.sunset_desk_lights'
      | 'automation.sunrise_turn_off_outside_lights'
      | 'automation.sunrise_workday_basement_lights'
      | 'automation.turn_off_all_main_basement_lights'
      | 'automation.11_00_pm_t'
      | 'automation.4_00_am_turn_off_basement_lights'
      | 'automation.sunset'
      | 'automation.sunset_turn_on_outside_lights'
      | 'automation.4_00_am_turn_off_upstairs_lights'
      | 'automation.new_automation'
      | 'automation.new_automation_2'
      | 'automation.pulse_bar'
      | 'automation.pulse_office'
      | 'automation.pulse_entertainment'
      | 'automation.pulse_game'
      | 'automation.pulse_guest_utility_hallway'
      | 'automation.pulse_kitchen'
      | 'automation.pulse_living_room'
      | 'automation.pulse_bedroom_hallway'
      | 'automation.pulse_thermostats'
      | 'automation.pulse_govee'
      | 'automation.new_automation_3'
      | 'automation.new_automation2'
      | 'automation.2_00_am_turn_off_tv_backlight'
      | 'automation.sunset_set_tv_to_movie_mode'
      | 'sensor.sonos_arc_sound_bar_audio_input_format'
      | 'binary_sensor.sonos_arc_sound_bar_microphone'
      | 'media_player.sonos_arc_sound_bar'
      | 'light.rope'
      | 'light.string_lights_1'
      | 'light.string_lights_2'
      | 'light.purifier'
      | 'light.christmas'
      | 'light.left_bar'
      | 'light.right_bar'
      | 'light.m1_light_strip'
      | 'light.rgbic_tv_backlight'
      | 'light.game_5'
      | 'number.game_5_effect_speed'
      | 'sensor.game_5_signal_strength'
      | 'sensor.game_5_power'
      | 'number.sonos_arc_sound_bar_audio_delay'
      | 'number.sonos_arc_sound_bar_bass'
      | 'number.sonos_arc_sound_bar_balance'
      | 'number.sonos_arc_sound_bar_treble'
      | 'number.sonos_arc_sound_bar_surround_level'
      | 'number.sonos_arc_sound_bar_music_surround_level'
      | 'switch.sonos_arc_sound_bar_crossfade'
      | 'switch.sonos_arc_sound_bar_loudness'
      | 'switch.sonos_arc_sound_bar_surround_music_full_volume'
      | 'switch.sonos_arc_sound_bar_night_sound'
      | 'switch.sonos_arc_sound_bar_speech_enhancement'
      | 'switch.sonos_arc_sound_bar_surround_enabled'
      | 'light.entertainment_5'
      | 'number.entertainment_5_effect_speed'
      | 'sensor.entertainment_5_signal_strength'
      | 'sensor.entertainment_5_power'
      | 'light.game_4'
      | 'number.game_4_effect_speed'
      | 'sensor.game_4_signal_strength'
      | 'sensor.game_4_power'
      | 'light.walkout_2'
      | 'number.walkout_2_effect_speed'
      | 'sensor.walkout_2_signal_strength'
      | 'sensor.walkout_2_power'
      | 'light.walkout_4'
      | 'number.walkout_4_effect_speed'
      | 'sensor.walkout_4_signal_strength'
      | 'sensor.walkout_4_power'
      | 'select.main_floor_thermostat_temperature_display_units'
      | 'select.main_floor_thermostat_current_mode'
      | 'climate.main_floor_thermostat'
      | 'sensor.main_floor_thermostat_current_temperature'
      | 'sensor.main_floor_thermostat_current_humidity'
      | 'button.main_floor_thermostat_identify'
      | 'button.main_floor_thermostat_clear_hold'
      | 'light.entertainment_6'
      | 'number.entertainment_6_effect_speed'
      | 'sensor.entertainment_6_signal_strength'
      | 'sensor.entertainment_6_power'
      | 'switch.master_bedroom_humidifier_automatic_stop'
      | 'switch.master_bedroom_humidifier_display'
      | 'switch.hallway_purifier_display'
      | 'switch.hallway_purifier_child_lock'
      | 'switch.miles_purifier_display'
      | 'switch.miles_purifier_child_lock'
      | 'switch.basement_purifier_display'
      | 'switch.basement_purifier_child_lock'
      | 'switch.tvf_purifier_display'
      | 'switch.tvf_purifier_child_lock'
      | 'switch.jaf_purifier_display'
      | 'switch.jaf_purifier_child_lock'
      | 'fan.hallway_purifier'
      | 'fan.miles_purifier'
      | 'fan.basement_purifier'
      | 'fan.tvf_purifier'
      | 'fan.jaf_purifier'
      | 'light.master_bedroom_humidifier_night_light'
      | 'light.hallway_purifier_night_light'
      | 'light.miles_purifier_night_light'
      | 'light.basement_purifier_night_light'
      | 'light.tvf_purifier_night_light'
      | 'light.jaf_purifier_night_light'
      | 'switch.master_bedroom_humidifier_auto_mode'
      | 'sensor.master_bedroom_humidifier_current_humidity'
      | 'sensor.hallway_purifier_filter_lifetime'
      | 'sensor.miles_purifier_filter_life'
      | 'sensor.basement_purifier_air_quality'
      | 'sensor.basement_purifier_air_quality_value'
      | 'sensor.basement_purifier_filter_lifetime'
      | 'sensor.tvf_purifier_air_quality'
      | 'sensor.tvf_purifier_air_quality_value'
      | 'sensor.tvf_purifier_filter_lifetime'
      | 'sensor.jaf_purifier_filter_lifetime'
      | 'humidifier.master_bedroom_humidifier'
      | 'number.master_bedroom_humidifier_mist_level'
      | 'number.master_bedroom_humidifier_target_level'
      | 'number.hallway_purifier_fan_speed_level'
      | 'number.miles_purifier_fan_speed_level'
      | 'number.basement_purifier_fan_speed_level'
      | 'number.tvf_purifier_fan_speed_level'
      | 'number.jaf_purifier_fan_speed_level'
      | 'binary_sensor.master_bedroom_humidifier_out_of_water'
      | 'binary_sensor.master_bedroom_humidifier_water_tank_lifted'
      | 'light.game_6'
      | 'number.game_6_effect_speed'
      | 'sensor.game_6_signal_strength'
      | 'sensor.game_6_power'
      | 'media_player.samsung_6_series_65'
      | 'remote.samsung_6_series_65'
      | 'media_player.samsung_6_series_70'
      | 'remote.samsung_6_series_70'
      | 'select.upstairs_thermostat_temperature_display_units'
      | 'select.upstairs_thermostat_current_mode'
      | 'climate.upstairs_thermostat'
      | 'sensor.upstairs_thermostat_current_temperature'
      | 'sensor.upstairs_thermostat_current_humidity'
      | 'button.upstairs_thermostat_identify'
      | 'button.upstairs_thermostat_clear_hold'
      | 'select.basement_thermostat_temperature_display_units'
      | 'select.basement_thermostat_current_mode'
      | 'climate.basement_thermostat'
      | 'sensor.basement_thermostat_current_temperature'
      | 'sensor.basement_thermostat_current_humidity'
      | 'button.basement_thermostat_identify'
      | 'button.basement_thermostat_clear_hold'
      | 'media_player.alexa'
      | 'switch.this_device_do_not_disturb_switch_2'
      | 'sensor.this_device_next_alarm_2'
      | 'sensor.this_device_next_timer_2'
      | 'sensor.this_device_next_reminder_2'
      | 'binary_sensor.guesttv_headphones_connected'
      | 'binary_sensor.guesttv_supports_airplay'
      | 'binary_sensor.guesttv_supports_ethernet'
      | 'binary_sensor.guesttv_supports_find_remote'
      | 'media_player.guesttv'
      | 'remote.guesttv'
      | 'sensor.guesttv_active_app'
      | 'sensor.guesttv_active_app_id'
      | 'binary_sensor.kitchentv_headphones_connected'
      | 'binary_sensor.kitchentv_supports_airplay'
      | 'binary_sensor.kitchentv_supports_ethernet'
      | 'binary_sensor.kitchentv_supports_find_remote'
      | 'media_player.kitchentv'
      | 'remote.kitchentv'
      | 'sensor.kitchentv_active_app'
      | 'sensor.kitchentv_active_app_id'
      | 'binary_sensor.roku_ultra_headphones_connected'
      | 'binary_sensor.roku_ultra_supports_airplay'
      | 'binary_sensor.roku_ultra_supports_ethernet'
      | 'binary_sensor.roku_ultra_supports_find_remote'
      | 'media_player.roku_ultra'
      | 'remote.roku_ultra'
      | 'sensor.roku_ultra_active_app'
      | 'sensor.roku_ultra_active_app_id'
      | 'media_player.gym_tv'
      | 'binary_sensor.gymtv_headphones_connected'
      | 'binary_sensor.gymtv_supports_airplay'
      | 'binary_sensor.gymtv_supports_ethernet'
      | 'binary_sensor.gymtv_supports_find_remote'
      | 'media_player.gymtv'
      | 'remote.gymtv'
      | 'sensor.gymtv_active_app'
      | 'sensor.gymtv_active_app_id'
      | 'update.custom_vesync_update'
      | 'sensor.basement_purifier_pm2_5'
      | 'sensor.tvf_purifier_pm2_5'
      | 'sensor.canon_tr8500_series_black_bk'
      | 'sensor.canon_tr8500_series_black_pgbk'
      | 'sensor.canon_tr8500_series_cyan'
      | 'sensor.canon_tr8500_series_magenta'
      | 'sensor.canon_tr8500_series_yellow'
      | 'sensor.canon_tr8500_series'
      | 'update.govee_update'
      | 'media_player.office_tv'
      | 'remote.office_tv'
      | 'sensor.office_tv_active_app'
      | 'sensor.office_tv_active_app_id'
      | 'binary_sensor.office_tv_headphones_connected'
      | 'binary_sensor.office_tv_supports_airplay'
      | 'binary_sensor.office_tv_supports_ethernet'
      | 'binary_sensor.office_tv_supports_find_remote'
      | 'update.cielo_home_update'
      | 'update.alexa_media_player_update'
      | 'media_player.hisense_tv'
      | 'media_player.android_tv_2'
      | 'remote.android_tv'
      | 'update.hakit_update';
  }
}
