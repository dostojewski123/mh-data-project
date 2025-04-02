import wilds1 from '../../images/wilds1.webp';

export const wildsMonsterMoves = {
    image: wilds1,
    title: "荒野怪物招式",
    description: "《怪物猎人：荒野》怪物招式动作值",
    list: [
        {
            name: "煌雷龙",
            image: wilds1,
            moves: [
                { name: "雷光吐息", value: "35" },
                { name: "雷暴领域", value: "25" },
                { name: "雷霆尾击", value: "45" }
            ]
        },
        {
            name: "锁刃龙",
            image: wilds1,
            moves: [
                { name: "锁链缠绕", value: "20" },
                { name: "刃尾横扫", value: "30" },
                { name: "旋转斩击", value: "40" }
            ]
        }
    ]
};