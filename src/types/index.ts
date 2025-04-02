export interface WeaponMoveItem {
    image: string | { src: string };
    modalImage: string;
}

export interface WeaponMoveContent {
    title: string;
    description: string;
    list: WeaponMoveItem[];
}

export type ContentSection = 'weapons' | 'armor' | 'monsters' | 'weaponMoves' | 'monsterMoves' | null;

export interface GameContent {
    monsters: any; // Define as needed
    weapons: any; // Define as needed
    armor: any; // Define as needed
    weaponMoves: WeaponMoveContent;
    monsterMoves: any; // Define as needed
}

export type GameVersion = 'world' | 'rise' | 'wilds';



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
    image: string | { src: string };
    modalImage: string;
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



export type VersionedContent = Record<GameVersion, GameContent>;