import ArcherFemale from '../images/ArcherF.png';
import ArcherMale from '../images/ArcherM.png';
import AssassinFemale from '../images/AssassinF.png';
import AssassinMale from '../images/AssassinM.png';
import AxemanFemale from '../images/AxemanF.png';
import AxemanMale from '../images/AxemanM.png';
import CasterFemale from '../images/CasterF.png';
import CasterMale from '../images/CasterM.png';
import HealerFemale from '../images/HealerF.png';
import HealerMale from '../images/HealerM.png';
import SwordsmanFemale from '../images/SwordsmanF.png';
import SwordsmanMale from '../images/SwordsmanM.png';
import SpearmanFemale from '../images/SpearmanF.png';
import SpearmanMale from '../images/SpearmanM.png';

const unitList = [
    {
        "id": 1,
        "unitName": "Arthur",
        "className": "Axeman",
        "gender": "Male",
        "stats": {
            "hitPoints": 500,
            "maxHitPoints": 500,
            "attack": 135,
            "defense": 20,
            "accuracy": 60,
            "critical": 30
        },
        "skills": "Skull Splitter",
        "profilePic": AxemanMale
    },
    {
        "id": 2,
        "unitName": "Lina",
        "className": "Healer",
        "gender": "Female",
        "stats": {
            "hitPoints": 300,
            "maxHitPoints": 300,
            "attack": 10,
            "defense": 10,
            "accuracy": 85,
            "critical": 10
        },
        "skills": "Heal",
        "profilePic": HealerFemale
    },
    {
        "id": 3,
        "unitName": "Numa",
        "className": "Caster",
        "gender": "Male",
        "stats": {
            "hitPoints": 300,
            "maxHitPoints": 300,
            "attack": 175,
            "defense": 10,
            "accuracy": 85,
            "critical": 10
        },
        "skills": "Fireball",
        "profilePic": CasterMale
    },
    {
        "id": 4,
        "unitName": "Kerry",
        "className": "Spearman",
        "gender": "Male",
        "stats": {
            "hitPoints": 550,
            "maxHitPoints": 550,
            "attack": 100,
            "defense": 45,
            "accuracy": 80,
            "critical": 10
        },
        "skills": "Bolster",
        "profilePic": SpearmanMale
    },
    {
        "id": 5,
        "unitName": "Naga",
        "className": "Axeman",
        "gender": "Male",
        "stats": {
            "hitPoints": 500,
            "maxHitPoints": 500,
            "attack": 135,
            "defense": 20,
            "accuracy": 60,
            "critical": 30
        },
        "skills": "Skull Splitter",
        "profilePic": AxemanMale
    },
    {
        "id": 6,
        "unitName": "Leilei",
        "className": "Assassin",
        "gender": "Female",
        "stats": {
            "hitPoints": 300,
            "maxHitPoints": 300,
            "attack": 125,
            "defense": 20,
            "accuracy": 95,
            "critical": 35
        },
        "skills": "Healing",
        "profilePic": AssassinFemale
    },
    {
        "id": 7,
        "unitName": "Maria",
        "className": "Caster",
        "gender": "Female",
        "stats": {
            "hitPoints": 300,
            "maxHitPoints": 300,
            "attack": 175,
            "defense": 10,
            "accuracy": 85,
            "critical": 10
        },
        "skills": "Fireball",
        "profilePic": CasterFemale
    },
    {
        "id": 8,
        "unitName": "Hailionaona",
        "className": "Assassin",
        "gender": "Male",
        "stats": {
            "hitPoints": 300,
            "maxHitPoints": 300,
            "attack": 125,
            "defense": 20,
            "accuracy": 95,
            "critical": 35
        },
        "skills": "Backstab",
        "profilePic": AssassinMale
    },
    {
        "id": 9,
        "unitName": "Derock",
        "className": "Archer",
        "gender": "Male",
        "stats": {
            "hitPoints": 450,
            "maxHitPoints": 450,
            "attack": 100,
            "defense": 20,
            "accuracy": 75,
            "critical": 25
        },
        "skills": "Snipe",
        "profilePic": ArcherMale
    },
    {
        "id": 10,
        "unitName": "Comoshi",
        "className": "Swordsman",
        "gender": "Female",
        "stats": {
            "hitPoints": 600,
            "maxHitPoints": 600,
            "attack": 80,
            "defense": 35,
            "accuracy": 85,
            "critical": 15
        },
        "skills": "Double Strike",
        "profilePic": SwordsmanFemale
    },
    {
        "id": 11,
        "unitName": "Melody",
        "className": "SpearmanF",
        "gender": "Female",
        "stats": {
            "hitPoints": 550,
            "maxHitPoints": 550,
            "attack": 100,
            "defense": 45,
            "accuracy": 80,
            "critical": 10
        },
        "skills": "Bolster",
        "profilePic": SpearmanFemale
    },
    {
        "id": 12,
        "unitName": "Destin",
        "className": "Healer",
        "gender": "Male",
        "stats": {
            "hitPoints": 300,
            "maxHitPoints": 300,
            "attack": 10,
            "defense": 10,
            "accuracy": 85,
            "critical": 10
        },
        "skills": "Heal",
        "profilePic": HealerMale
    }
];

export default unitList;