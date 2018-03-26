export interface Level {
    id: number,
    name: string,
    quote: string
    icon: string
}

const levelList: Level[] = [
    { id: 29, name: "Hulk", quote:"The beast is within!", icon: "levels/Hulk.png" },
    { id: 28, name: "Superman", quote:"", icon: "levels/Superman.png" },
    { id: 27, name: "Darth Vader", quote:"", icon: "levels/DarthVader.png" },
    { id: 26, name: "Thor", quote:"", icon: "levels/Thor.png" },
    { id: 25, name: "Jedi", quote:"", icon: "levels/Jedi.png" },
    { id: 24, name: "Captain America", quote:"", icon: "levels/CaptainAmerica.png" },
    { id: 23, name: "Dragon Fury", quote:"", icon: "levels/DragonFury.png" },
    { id: 22, name: "King Kong", quote:"", icon: "levels/KingKong.png" },
    { id: 21, name: "Iron man", quote:"", icon: "levels/IronMan.png" },
    { id: 20, name: "Predator", quote:"", icon: "levels/Predator.png" },
    { id: 19, name: "Samurai", quote:"", icon: "levels/Samurai.png" },
    { id: 18, name: "Crusader", quote:"", icon: "levels/Crusader.png" },
    { id: 17, name: "Orc", quote:"", icon: "levels/Orc.png" },
    { id: 16, name: "Targaryen", quote:"", icon: "levels/Targaryen.png" },
    { id: 15, name: "Spartan", quote:"", icon: "levels/Spartan.png" },
    { id: 14, name: "Centurion", quote:"", icon: "levels/Centurion.png" },
    { id: 13, name: "Viking", quote:"", icon: "levels/Viking.png" },
    { id: 12, name: "Templar", quote:"", icon: "levels/Templar.png" },
    { id: 11, name: "Tank", quote:"", icon: "levels/Tank.png" },
    { id: 10, name: "Hitman", quote:"", icon: "levels/Hitman.png" },
    { id: 9, name: "Gladiator", quote:"Capua, shall I begin?", icon: "levels/Gladiator.png" },
    { id: 8, name: "Marine", quote:"No fear!", icon: "levels/Marine.png" },
    { id: 7, name: "Shere Khan", quote:"", icon: "levels/Tiger.png" },
    { id: 6, name: "Bull", quote:"", icon: "levels/Bull.png" },
    { id: 5, name: "Ninja", quote:"", icon: "levels/Ninja.png" },
    { id: 4, name: "Pirate", quote:"Savage!", icon: "levels/Pirate.png" },
    { id: 3, name: "Lannister", quote:"The lion is here!", icon: "levels/Lannister.png" },
    { id: 2, name: "Stark", quote:"Train hard, winter is coming!", icon: "levels/Stark.png" },
    { id: 1, name: "Shark", quote:"No pain no gain!", icon: "levels/Shark.png" },
    { id: 0, name: "Honda", quote:"Shut up and train", icon: "levels/Sumo.png" }
]

export const LEVEL_LIST = levelList;