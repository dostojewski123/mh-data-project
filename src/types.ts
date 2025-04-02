export type GameVersion = 'world' | 'rise' | 'wilds';

export type ContentSection =
    | 'monsters'
    | 'weapons'
    | 'armor'
    | 'weaponMoves'
    | 'monsterMoves'
    | null;

export interface ImageObject {
    src: string;
    width: number;
    height: number;
}

export type ImageType = ImageObject; // 现在只接受对象形式

export interface SimpleImageItem {
    image: string;
    name?: string; // 可选
}

export interface SimpleImageContent {
    title?: string;
    description?: string;
    list: SimpleImageItem[];
}


export interface BaseListItem {
    name: string;
    image: string; // 统一为字符串类型，简化处理
    moves?: MoveItem[]; // 可选属性
}

export interface BaseContent {
    image: string; // 统一为字符串类型
    title: string;
    description: string;
    list: BaseListItem[];
}

export interface Move {
    name: string;
    value: string;
}

export interface MoveItem {
    name: string;
    value: string;
    attribute?: string;
    description?: string;
}

export interface WeaponMoveItem {
    image: string | {
        src: string;
        width?: number;
        height?: number;
    };
    name?: string;
}


export interface WeaponMoveContent {
    image: string | {
        src: string;
        width?: number;
        height?: number;
    };
    title: string;
    description: string;
    list: WeaponMoveItem[];
}

export interface MonsterMoveContent extends BaseContent {
    list: (BaseListItem & {
        moves: MoveItem[];
        weakness?: string[];
    })[];
}


export interface GameContent {
    monsters: BaseContent;
    weapons: BaseContent;
    armor: BaseContent;
    weaponMoves: BaseContent;
    monsterMoves: BaseContent;
}

export type VersionedContent = Record<GameVersion, GameContent>;