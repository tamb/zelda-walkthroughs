import type { GuideSection } from '../../../../components/Guide';

// Import all section data
import { tableOfContents } from './sections/00_toc';
import { versionHistory } from './sections/01_version-history';
import { introduction } from './sections/02_intro';
import { itemsSpoils } from './sections/03_items-spoils';
import { generalTips } from './sections/04_general-tips';
import { enemies } from './sections/05_enemies';
import { walkthroughIntro } from './sections/06_0a-intro';
import { outset } from './sections/06_a-outset';
import { stormingForsakenFortress } from './sections/06_b-storming-ff';
import { c_windfall_island } from './sections/06_c-windfall-island';
import { d_rito_dragon_roost } from './sections/06_d-rito-dragon-roost';
import { e_dragon_roost_cavern } from './sections/06_e-dragon-roost-cavern';
import { f_forest_haven } from './sections/06_f-forest-haven';
import { g_forbidden_woods } from './sections/06_g-forbidden-woods';
import { h_return_windfall_pirate_fun } from './sections/06_h-return-windfall-pirate-fun';
import { i_third_pearl_raising_tower } from './sections/06_i-third-pearl-raising-tower';
import { j_tower_of_gods } from './sections/06_j-tower-of-gods';
import { k_lost_castle_legendary_sword } from './sections/06_k-lost-castle-legendary-sword';
import { l_return_forsaken_fortress_destiny } from './sections/06_l-return-forsaken-fortress-destiny';
import { m_upgrading_collection_run } from './sections/06_m-upgrading-collection-run';
import { n_power_bracelets_fire_mountain } from './sections/06_n-power-bracelets-fire-mountain';
import { o_iron_boots_ice_ring_isle } from './sections/06_o-iron-boots-ice-ring-isle';
import { p_enlisting_medli_help } from './sections/06_p-enlisting-medli-help';
import { q_earth_temple } from './sections/06_q-earth-temple';
import { r_makar_lends_hand } from './sections/06_r-makar-lends-hand';
import { s_wind_temple } from './sections/06_s-wind-temple';
import { t_world_tour_exploring_globe } from './sections/06_t-world-tour-exploring-globe';
import { u_tingle_proves_useful } from './sections/06_u-tingle-proves-useful';
import { v_world_tour_treasure_triforce } from './sections/06_v-world-tour-treasure-triforce';
import { w_return_to_hyrule } from './sections/06_w-return-to-hyrule';
import { x_final_dungeon_ganons_tower } from './sections/06_x-final-dungeon-ganons-tower';
import { y_ultimate_showdown } from './sections/06_y-ultimate-showdown';
import { z_ending } from './sections/06_z-ending';
import { reference_list } from './sections/07_reference-list';
import { missing } from './sections/08_missing';
import { contact } from './sections/09_contact';
import { credits } from './sections/10_credits';
import { copyright } from './sections/11_copyright';

// Combine all sections into a single array
export const windWakerGuideSections: GuideSection[] = [
  tableOfContents,
  versionHistory,
  introduction,
  itemsSpoils,
  generalTips,
  enemies,
  walkthroughIntro,
  outset,
  stormingForsakenFortress,
  c_windfall_island,
  d_rito_dragon_roost,
  e_dragon_roost_cavern,
  f_forest_haven,
  g_forbidden_woods,
  h_return_windfall_pirate_fun,
  i_third_pearl_raising_tower,
  j_tower_of_gods,
  k_lost_castle_legendary_sword,
  l_return_forsaken_fortress_destiny,
  m_upgrading_collection_run,
  n_power_bracelets_fire_mountain,
  o_iron_boots_ice_ring_isle,
  p_enlisting_medli_help,
  q_earth_temple,
  r_makar_lends_hand,
  s_wind_temple,
  t_world_tour_exploring_globe,
  u_tingle_proves_useful,
  v_world_tour_treasure_triforce,
  w_return_to_hyrule,
  x_final_dungeon_ganons_tower,
  y_ultimate_showdown,
  z_ending,
  reference_list,
  missing,
  contact,
  credits,
  copyright,
];
