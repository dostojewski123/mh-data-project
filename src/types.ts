// types.ts

/**
 * 游戏版本类型
 */
export type GameVersion = 'world' | 'rise' | 'wilds';

/**
 * 内容区块类型
 */
export type ContentSection =
    | 'monsters'
    | 'weapons'
    | 'armor'
    | 'weaponMoves'
    | 'monsterMoves'
    | null;

/**
 * 图片对象类型
 */
export interface ImageObject {
    src: string;
    width?: number;
    height?: number;
}

/**
 * 简单图片项
 */
export interface SimpleImageItem {
    name: string;
    image: string;
}

/**
 * 简单图片内容区块
 */
export interface SimpleImageContent {
    title: string;
    description: string;
    list: SimpleImageItem[];
}

/**
 * 基础列表项
 */
export interface BaseListItem {
    name: string;
    image: string;
    modalImage?: string;
}

/**
 * 基础内容区块
 */
export interface BaseContent {
    title: string;
    description: string;
    image?: string | ImageObject; // 支持字符串或图片对象
    list: BaseListItem[];
}

/**
 * 武器动作项
 */
export interface WeaponMoveItem extends BaseListItem {
    input?: string;
    damage?: number;
    properties?: string[];
    videoUrl?: string;
}

/**
 * 武器动作内容区块
 */
export interface WeaponMoveContent extends Omit<BaseContent, 'list'> {
    image: string | ImageObject; // 必须存在，不可选
    list: WeaponMoveItem[];
}

/**
 * 怪物动作项
 */
export interface MonsterMoveItem extends BaseListItem {
    dangerLevel: number;
    element?: string;
    counterMethods?: string[];
}

/**
 * 怪物动作内容区块
 */
export interface MonsterMoveContent extends Omit<BaseContent, 'list'> {
    list: MonsterMoveItem[];
}

/**
 * 武器内容区块
 */
export interface WeaponContent extends BaseContent {
    weaponType: string;
    attackPower: number;
    sharpness?: string;
}

/**
 * 防具内容区块
 */
export interface ArmorContent extends BaseContent {
    defense: number;
    resistance: {
        fire: number;
        water: number;
        thunder: number;
        ice: number;
        dragon: number;
    };
}

/**
 * 怪物内容区块
 */
export interface MonsterContent extends BaseContent {
    species: string;
    weakness: {
        element: string;
        stars: number;
    }[];
}

/**
 * 完整游戏内容类型
 */
export interface GameContent {
    monsters: MonsterContent;
    weapons: WeaponContent;
    armor: ArmorContent;
    weaponMoves: WeaponMoveContent;
    monsterMoves: MonsterMoveContent;
}

/**
 * 按版本组织的游戏内容
 */
export type VersionedContent = Record<GameVersion, GameContent>;

/**
 * 组件 Props 类型
 */
export interface PageProps {
    isDarkMode?: boolean;
    className?: string;
}

export interface ContentPageProps<T = any> extends PageProps {
    content: T;
}

/**
 * 路由参数类型
 */
export interface RouteParams {
    index?: string;
    id?: string;
}

/**
 * 主题类型
 */
export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    backgroundColor: string;
}

// types.ts
export interface MoveItem {
    name: string;
    value: string;
    description?: string;
    attribute?: string;
}

export interface MonsterMoveItem extends BaseListItem {
    moves: MoveItem[]; // 确保这里是必填属性
    weakness?: string[];
}

export interface MonsterMoveContent extends Omit<BaseContent, 'list'> {
    list: MonsterMoveItem[];
}