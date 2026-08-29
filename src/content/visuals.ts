import type { WikiVisual } from './types';

const officialGamePage = 'https://www.hellletloose.com/game/hll-vietnam';

const officialCredit = 'Team17 / Offworld Industries';

const officialSourceLabel = 'Official HLL: Vietnam game page';

function officialVisual(src: string, alt: string, caption: string): WikiVisual {
  return {
    src,
    alt,
    caption,
    credit: officialCredit,
    sourceHref: officialGamePage,
    sourceLabel: officialSourceLabel,
    evidenceRole: 'official-demonstration',
    build: 'Official launch media; build not stated',
  };
}

export const officialVisuals = {
  armourHelicopter: officialVisual(
    '/assets/hllv-official-armour-helicopter.webp',
    'Official HLL: Vietnam media showing an armoured vehicle and helicopter moving through tropical terrain.',
    'Armour and helicopter units shown together in the official battlefield media.'
  ),
  armourPush: officialVisual(
    '/assets/hllv-official-armour-push.webp',
    'Official HLL: Vietnam media showing a first-person rifle view beside an armoured vehicle and an explosion.',
    'A first-person push alongside armour; this demonstrates battlefield context, not a fixed route.'
  ),
  bridgeGameplay: officialVisual(
    '/assets/hllv-official-bridge-gameplay.webp',
    'Official HLL: Vietnam media showing a first-person rifle view from a bamboo bridge over water.',
    'Bridge and water terrain shown in official battlefield media.'
  ),
  helicopterField: officialVisual(
    '/assets/hllv-official-helicopter-field.webp',
    'Official HLL: Vietnam media showing a helicopter over a field while soldiers and armour move below.',
    'A helicopter field scene from the official media set.'
  ),
  jungleSquad: officialVisual(
    '/assets/hllv-official-jungle-squad.webp',
    'Official HLL: Vietnam media showing a squad moving through dense jungle vegetation.',
    'Squad movement through dense vegetation; use it as visual context, not a universal concealment rule.'
  ),
  lzApproach: officialVisual(
    '/assets/hllv-official-lz-approach.webp',
    'Official HLL: Vietnam media showing a helicopter, armour and infantry around a landing area.',
    'A combined-arms landing-area scene from the official media set.'
  ),
  sniperPosition: officialVisual(
    '/assets/hllv-official-sniper-position.webp',
    'Official HLL: Vietnam media showing a scoped rifle aimed from a covered position into tropical terrain.',
    'A covered firing position shown in official battlefield media.'
  ),
  squadMovement: officialVisual(
    '/assets/hllv-official-squad-movement.webp',
    'Official HLL: Vietnam media showing soldiers moving through a sunlit jungle path.',
    'Squad movement on a jungle path from the official media set.'
  ),
} as const;

export const fieldEvidenceVisuals: readonly WikiVisual[] = [
  officialVisuals.squadMovement,
  officialVisuals.armourHelicopter,
  officialVisuals.bridgeGameplay,
  officialVisuals.helicopterField,
];
