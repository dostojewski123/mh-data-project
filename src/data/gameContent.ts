import { worldMonsters } from './world/monsters';
import { worldWeapons } from './world/weapons';
import { worldArmor } from './world/armor';
import { worldWeaponMoves } from './world/weaponMoves';
import { worldMonsterMoves } from './world/monsterMoves';
import { riseMonsters } from './rise/monsters';
import { riseWeapons } from './rise/weapons';
import { riseArmor } from './rise/armor';
import { riseWeaponMoves } from './rise/weaponMoves';
import { riseMonsterMoves } from './rise/monsterMoves';
import { wildsMonsters } from './wilds/monsters';
import { wildsWeapons } from './wilds/weapons';
import { wildsArmor } from './wilds/armor';
import { wildsWeaponMoves } from './wilds/weaponMoves';
import { wildsMonsterMoves } from './wilds/monsterMoves';

export const gameContent = {
    world: {
        monsters: worldMonsters,
        weapons: worldWeapons,
        armor: worldArmor,
        weaponMoves: worldWeaponMoves,
        monsterMoves: worldMonsterMoves
    },
    rise: {
        monsters: riseMonsters,
        weapons: riseWeapons,
        armor: riseArmor,
        weaponMoves: riseWeaponMoves,
        monsterMoves: riseMonsterMoves
    },
    wilds: {
        monsters: wildsMonsters,
        weapons: wildsWeapons,
        armor: wildsArmor,
        weaponMoves: wildsWeaponMoves,
        monsterMoves: wildsMonsterMoves
    }
};

export type GameContent = typeof gameContent;
export type GameVersion = keyof GameContent;