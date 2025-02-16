import { EntityName } from '@hakit/core';

// basement floor
export const LIGHTS_ENTERTAINMENT = [
  'light.entertainment_1',
  'light.entertainment_2',
  'light.entertainment_3',
  'light.entertainment_4',
  'light.entertainment_5',
  'light.entertainment_6',
] as EntityName[];
export const LIGHTS_OFFICE = [
  'light.office_1',
  'light.office_2',
  'light.office_3',
  'light.left_bar',
  'light.right_bar',
  'light.rope',
  'light.m1_light_strip',
] as EntityName[];
export const LIGHTS_BAR = ['light.bar_1', 'light.bar_2', 'light.bar_3', 'light.bar_4'] as EntityName[];
export const LIGHTS_GAME = ['light.game_1', 'light.game_2', 'light.game_3', 'light.game_4', 'light.game_5', 'light.game_6'] as EntityName[];
export const LIGHTS_WALKOUT = [
  'light.walkout_1',
  'light.walkout_2',
  'light.walkout_3',
  'light.walkout_4',
  'light.walkout_5',
] as EntityName[];
export const LIGHTS_HALLWAY = ['light.utility_hallway_1', 'light.guest_hallway_1', 'light.guest_hallway_2'] as EntityName[];
export const BASEMENT_SWITCH =  {title: 'All Basement Lights', entity: 'light.basement_lights', icon: 'mdi-power'}
export const BASEMENT_INDIVIDUAL_LIGHTS = [
  { title: 'Entertainment Room', lights: LIGHTS_ENTERTAINMENT },
  { title: 'Game Room', lights: LIGHTS_GAME },
  { title: 'Bar/Kitchenette', lights: LIGHTS_BAR },
  { title: 'Walkout Area', lights: LIGHTS_WALKOUT },
  { title: 'Basement Hallways', lights: LIGHTS_HALLWAY },
  { title: 'Office', lights: LIGHTS_OFFICE },
];
export const BASEMENT_GROUP_LIGHTS = [
  {title: 'Bar', entity: 'light.bar_lights', icon: 'mdi:beer'},
  {title: 'Office', entity: 'light.office_lights', icon: 'mdi:chair-rolling'},
  {title: 'Entertainment', entity: 'light.entertainment_lights', icon: 'mdi:movie-open'},
  {title: 'Game', entity: 'light.game_lights', icon: 'mdi:controller'},
  {title: 'Hallway', entity: 'light.hallway_lights', icon: 'mdi:door-open'},
]
export const BASEMENT_LOGO = 'https://thumbs.dreamstime.com/b/colorful-led-lights-illuminate-modern-tavern-light-games-322938916.jpg';

// bedroom floor
export const LIGHTS_MASTERBEDROOM = [
  'light.master_bedroom_lamp',
  'light.terrijon_light_1',
  'light.terrijon_light_2',
  'light.vannary_light_1',
  'light.vannary_light_2',
] as EntityName[];
export const LIGHTS_BEDROOMHALLWAY = ['light.bedroom_hallway_1', 'light.bedroom_hallway_2', 'light.bedroom_hallway_3'] as EntityName[];
export const BEDROOM_SWITCH =  {title: 'All Upstairs Lights', entity: 'light.upstairs_lights', icon: 'mdi-power'}
export const BEDROOM_INDIVIDUAL_LIGHTS = [
  { title: 'Master Bedroom', lights: LIGHTS_MASTERBEDROOM },
  { title: 'Bedroom Hallway', lights: LIGHTS_BEDROOMHALLWAY },
];
export const BEDROOM_GROUP_LIGHTS = [
  {title: 'Master Bedroom', entity: 'light.master_bedroom_lights', icon: 'mdi:bed-king'},
  {title: 'Bedroom Hallway', entity: 'light.bedroom_hallway_lights', icon: 'mdi:door-open'},
]
export const BEDROOM_LOGO = 'https://www.shutterstock.com/image-photo/stylish-interior-bedroom-comfortable-bed-600nw-2515786939.jpg';

// main floor
export const LIGHTS_FAMILY = ['light.left_lamp', 'light.right_lamp'] as EntityName[];
export const LIGHTS_KITCHEN = [
  'light.kitchen_1',
  'light.kitchen_2',
  'light.kitchen_3',
  'light.kitchen_4',
  'light.kitchen_5',
] as EntityName[];
export const LIGHTS_LIVING = [
  'light.living_room_1',
  'light.living_room_2',
  'light.living_room_3',
  'light.rgbic_tv_backlight',
] as EntityName[];
export const MAIN_SWITCH =  {title: 'All Main Lights', entity: 'light.main_lights', icon: 'mdi-power'}
export const MAIN_INDIVIDUAL_LIGHTS = [
  { title: 'Family Room', lights: LIGHTS_FAMILY },
  { title: 'Kitchen', lights: LIGHTS_KITCHEN },
  { title: 'Living Room', lights: LIGHTS_LIVING },
];
export const MAIN_GROUP_LIGHTS = [
  {title: 'Family Room', entity: 'light.family_room_lights', icon: 'mdi:human-male-female-child'},
  {title: 'Kitchen', entity: 'light.kitchen_lights', icon: 'mdi:silverware-fork-knife'},
  {title: 'Living Room', entity: 'light.living_room_lights', icon: 'mdi:sofa'}
];
export const MAIN_LOGO =
  'https://media.istockphoto.com/id/1300873599/photo/modern-living-room-interior.jpg?s=612x612&w=0&k=20&c=_aPBR0fnpoifP3TZvkVph221Dx3Zt4z0IlP1jHBGYmw=';
