import world1 from '../../images/world1.webp';

export const worldMonsterMoves = {
    image: world1,
    title: "世界怪物招式",
    description: "《怪物猎人：世界》怪物招式动作值",
    list: [
        {
            name: "灭尽龙",
            image: world1,
            moves: [
                { name: "拍击", value: "40" },
                { name: "突进", value: "30" },
                { name: "飞扑", value: "60" }
            ]
        },
        {
            name: "冰呪龙",
            image: world1,
            moves: [
                { name: "冰吐息", value: "25" },
                { name: "尾刺", value: "35" },
                { name: "冰墙", value: "50" }
            ]
        }
    ]
};