import type { LocaleLanguage } from '../types/types'

export const locales = {
    en: {
        header: {
            home: 'Home',
            search: 'Search',
        },

        sections: {
            hero_title: 'a search tool for veterinary medicines',
            hero_subtitle: 'with data that comes from the official database',
            search_title: 'Searching',
            search_text: 'By brand name, by registration number or by species.',
            swarm_medicines: 'medicines',
            swarm: {
                birds: { title: 'Birds', text: 'Twenty-two separate entries in the register, six icons on the screen.' },
                cat: { title: 'Cats', text: 'The best served animal after the dog, under one name in the register.' },
                duck: { title: 'Ducks', text: 'Two waiting periods instead of one, for meat and for eggs.' },
                fish: { title: 'Fish', text: 'Nine medicines for everything that swims, spread over three names.' },
                turtle: { title: 'Turtles', text: 'The register has no turtle, only reptiles, terrarium animals and amphibians.' },
            },
            leaflets_title: 'Package leaflets',
            leaflets_text: 'The official leaflet sits with every medicine that has one.',
            credits: 'Designed and made by',
        },

        landing: {
            title: 'Vetly',
        },

        search: {
            title: 'Search',
            placeholder: 'Brand name, registration number…',
            searching: 'Searching…',
            result_singular: '1 result found',
            result_plural: '{count} results found',
            no_results: 'No results found',
            disclaimer_link: 'Disclaimer',
            landing_link: 'Vetly.nl',
        },

        medicine: {
            open_leaflet: 'Open package leaflet',
            species: 'Species',
            withdrawal_periods: 'Withdrawal periods',
            disclaimer: 'This information is intended as an aid only and does not replace the advice of a veterinarian.',
            sources: 'Sources',
            registration: 'REG NL',
            show_more: 'Show more information',
            show_less: 'Show less information',
        },

        disclaimer: {
            title: 'Disclaimer',
            updated: 'Last updated: 5 August 2026',
            sections: [
                {
                    title: 'What Vetly is intended for',
                    body: 'Vetly is a search tool that makes public data from the Dutch Veterinary Medicinal Products Database of the CBG searchable. Vetly is not a veterinarian, not a pharmacy and not an official source.',
                },
                {
                    title: 'No advice',
                    body: 'The information shown is for informational purposes only and does not constitute veterinary, medical or pharmaceutical advice. It never replaces the judgement of a veterinarian. Only use veterinary medicinal products on prescription and in accordance with the instructions of your veterinarian and the official package leaflet. In case of doubt, urgency or side effects, consult a veterinarian immediately.',
                },
                {
                    title: 'Source and currency',
                    body: 'The data is taken automatically from the CBG and checked for changes every hour. We do not guarantee that the presentation is complete, correct or current at any given moment. In the event of any discrepancy, the official publication of the CBG and the EMA prevails, not Vetly.',
                },
                {
                    title: 'Withdrawal periods and food safety',
                    body: 'Withdrawal periods for food-producing animals are reproduced unchanged, but must never be determined on the basis of Vetly alone. Always verify them in the official package leaflet and with your veterinarian. Vetly accepts no liability for damage arising from observing an incorrect withdrawal period, including the rejection of animals or animal products.',
                },
                {
                    title: 'Package leaflets',
                    body: 'The package leaflets offered are copies of documents published by the marketing authorisation holder. No rights may be derived from these copies; the original held by the CBG prevails.',
                },
                {
                    title: 'Availability',
                    body: 'Vetly is provided as is. We do not guarantee uninterrupted availability and may modify or discontinue the service without notice.',
                },
                {
                    title: 'Liability',
                    body: 'To the extent permitted by law, Vetly is not liable for any direct or indirect damage arising from the use of, or reliance on, the information shown through Vetly. This exclusion does not apply to damage resulting from intent or wilful recklessness on our part.',
                },
                {
                    title: 'Governing law',
                    body: 'Dutch law applies to the use of Vetly. The Dutch version of this disclaimer prevails over this translation.',
                },
            ],
        },
    },

    nl: {
        header: {
            home: 'Home',
            search: 'Zoeken',
        },

        sections: {
            hero_title: 'een zoekhulp voor diergeneesmiddelen',
            hero_subtitle: 'met gegevens die uit de officiële databank komen',
            search_title: 'Zoeken',
            search_text: 'Op merknaam, op registratienummer of op diersoort.',
            swarm_medicines: 'middelen',
            swarm: {
                birds: { title: 'Vogels', text: 'Tweeëntwintig aparte ingangen in het register, zes iconen op het scherm.' },
                cat: { title: 'Katten', text: 'Na de hond het best bediende dier, onder één naam in het register.' },
                duck: { title: 'Eenden', text: 'Twee wachttermijnen in plaats van één, voor vlees en voor eieren.' },
                fish: { title: 'Vissen', text: 'Negen middelen voor alles wat zwemt, verdeeld over drie namen.' },
                turtle: { title: 'Schildpadden', text: 'Het register kent geen schildpad, alleen reptielen, terrariumdieren en amfibieën.' },
            },
            leaflets_title: 'Bijsluiters',
            leaflets_text: 'Bij elk middel dat er een heeft, staat de officiële bijsluiter erbij.',
            credits: 'Ontworpen en gemaakt door',
        },

        landing: {
            title: 'Vetly',
        },

        search: {
            title: 'Zoeken',
            placeholder: 'Merknaam, registratienummer…',
            searching: 'Zoeken…',
            result_singular: 'Er is 1 resultaat gevonden',
            result_plural: 'Er zijn {count} resultaten gevonden',
            no_results: 'Geen resultaten gevonden',
            disclaimer_link: 'Disclaimer',
            landing_link: 'Vetly.nl',
        },

        medicine: {
            open_leaflet: 'Open bijsluiter',
            species: 'Diersoorten',
            withdrawal_periods: 'Wachttermijnen',
            disclaimer: 'Deze informatie is uitsluitend bedoeld als hulpmiddel en vervangt geen advies van een dierenarts.',
            sources: 'Bronnen',
            registration: 'REG NL',
            show_more: 'Laat meer informatie zien',
            show_less: 'Laat minder informatie zien',
        },

        disclaimer: {
            title: 'Disclaimer',
            updated: 'Laatst bijgewerkt: 5 augustus 2026',
            sections: [
                {
                    title: 'Waarvoor Vetly bedoeld is',
                    body: 'Vetly is een zoekhulpmiddel dat openbare gegevens uit de Diergeneesmiddeleninformatiebank van het CBG doorzoekbaar maakt. Vetly is geen dierenarts, geen apotheek en geen officiële bron.',
                },
                {
                    title: 'Geen advies',
                    body: 'De getoonde informatie is uitsluitend informatief en vormt geen diergeneeskundig, medisch of farmaceutisch advies. Zij vervangt nooit het oordeel van een dierenarts. Gebruik diergeneesmiddelen alleen op voorschrift en volgens de aanwijzingen van uw dierenarts en de officiële bijsluiter. Raadpleeg bij twijfel, spoed of bijwerkingen direct een dierenarts.',
                },
                {
                    title: 'Bron en actualiteit',
                    body: 'De gegevens worden automatisch overgenomen van het CBG en elk uur op wijzigingen gecontroleerd. Wij garanderen niet dat de weergave op enig moment volledig, juist of actueel is. Bij enig verschil is de officiële publicatie van het CBG en het EMA leidend, niet Vetly.',
                },
                {
                    title: 'Wachttermijnen en voedselveiligheid',
                    body: 'Wachttermijnen voor voedselproducerende dieren worden ongewijzigd overgenomen, maar mogen nooit uitsluitend op basis van Vetly worden vastgesteld. Controleer deze altijd in de officiële bijsluiter en bij uw dierenarts. Vetly aanvaardt geen aansprakelijkheid voor schade die voortvloeit uit het aanhouden van een onjuiste wachttermijn, waaronder afkeuring van dieren of dierlijke producten.',
                },
                {
                    title: 'Bijsluiters',
                    body: 'Aangeboden bijsluiters zijn kopieën van door de registratiehouder gepubliceerde documenten. Aan deze kopieën kunnen geen rechten worden ontleend; het origineel bij het CBG is leidend.',
                },
                {
                    title: 'Beschikbaarheid',
                    body: 'Vetly wordt aangeboden in de staat waarin het zich bevindt. Wij garanderen geen ononderbroken beschikbaarheid en kunnen de dienst zonder aankondiging wijzigen of beëindigen.',
                },
                {
                    title: 'Aansprakelijkheid',
                    body: 'Voor zover wettelijk toegestaan is Vetly niet aansprakelijk voor directe of indirecte schade die voortvloeit uit het gebruik van, of het vertrouwen op, de via Vetly getoonde informatie. Deze uitsluiting geldt niet voor schade als gevolg van opzet of bewuste roekeloosheid aan onze zijde.',
                },
                {
                    title: 'Toepasselijk recht',
                    body: 'Op het gebruik van Vetly is Nederlands recht van toepassing.',
                },
            ],
        },
    },
} as const

export type { LocaleLanguage }
