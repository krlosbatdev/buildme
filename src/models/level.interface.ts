export interface Level {
    id: number,
    name: string,
    icon: string
}

const levelList: Level[] = [
    { id: 29, name: "Hulk", icon: "levels/Hulk.png" },
    { id: 28, name: "Superman", icon: "levels/Superman.png" },
    { id: 27, name: "Darth Vader", icon: "levels/DarthVader.png" },
    { id: 26, name: "Thor", icon: "levels/Thor.png" },
    { id: 25, name: "Jedi", icon: "levels/Jedi.png" },
    { id: 24, name: "Captain America", icon: "levels/CaptainAmerica.png" },
    { id: 23, name: "Dragon Fury", icon: "levels/DragonFury.png" },
    { id: 22, name: "King Kong", icon: "levels/KingKong.png" },
    { id: 21, name: "Iron man", icon: "levels/IronMan.png" },
    { id: 20, name: "Predator", icon: "levels/Predator.png" },
    { id: 19, name: "Samurai", icon: "levels/Samurai.png" },
    { id: 18, name: "Crusader", icon: "levels/Crusader.png" },
    { id: 17, name: "Orc", icon: "levels/Orc.png" },
    { id: 16, name: "Targaryen", icon: "levels/Targaryen.png" },
    { id: 15, name: "Spartan", icon: "levels/Spartan.png" },
    { id: 14, name: "Centurion", icon: "levels/Centurion.png" },
    { id: 13, name: "Viking", icon: "levels/Viking.png" },
    { id: 12, name: "Templar", icon: "levels/Templar.png" },
    { id: 11, name: "Tank", icon: "levels/Tank.png" },
    { id: 10, name: "Hitman", icon: "levels/Hitman.png" },
    { id: 9, name: "Gladiator", icon: "levels/Gladiator.png" },
    { id: 8, name: "Marine", icon: "levels/Marine.png" },
    { id: 7, name: "Shere Khan", icon: "levels/Tiger.png" },
    { id: 6, name: "Bull", icon: "levels/Bull.png" },
    { id: 5, name: "Ninja", icon: "levels/Ninja.png" },
    { id: 4, name: "Pirate", icon: "levels/Pirate.png" },
    { id: 3, name: "Lannister", icon: "levels/Lannister.png" },
    { id: 2, name: "Stark", icon: "levels/Stark.png" },
    { id: 1, name: "Shark", icon: "levels/Shark.png" },
    { id: 0, name: "Honda", icon: "levels/Sumo.png" }
]

export const LEVEL_LIST = levelList;