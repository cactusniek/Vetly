import { type FunctionComponent, type SVGProps } from 'react'

import { Bee, Cat, Chicken, Cow, Dog, Duck, Fish, Goat, Goose, Horse, Parrot, Pig, Pigeon, Rabbit, Sheep, Turkey, Turtle } from '@/assets'

export const doeldierenIconMap: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
    Bijen: Bee,

    Katten: Cat,

    Kippen: Chicken,
    Legkippen: Chicken,
    'Niet eierleggende kippen': Chicken,

    Kalveren: Cow,
    Koeien: Cow,
    'Lacterende runderen': Cow,
    Melkkoeien: Cow,
    'Niet melkgevende runderen': Cow,
    Runderen: Cow,
    Stieren: Cow,

    Honden: Dog,

    Eenden: Duck,

    Aquariumvissen: Fish,
    Vissen: Fish,

    Geiten: Goat,

    Ganzen: Goose,

    Merries: Horse,
    Paarden: Horse,

    Kooivogels: Parrot,
    Siervogels: Parrot,

    Mestvarkens: Pig,
    Varkens: Pig,
    Vleesvarkens: Pig,
    Zeugen: Pig,

    Duiven: Pigeon,
    'Duiven, niet te consumeren': Pigeon,

    Gezelschapskonijnen: Rabbit,
    Konijnen: Rabbit,

    'Niet melkgevende schapen': Sheep,
    Schapen: Sheep,

    Kalkoenen: Turkey,

    Reptielen: Turtle,

    // to add later: Fazanten, Kuikens, Biggetjes, Lammeren
}
