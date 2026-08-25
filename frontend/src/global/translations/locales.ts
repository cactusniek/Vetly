import { type LocaleLanguage } from '@/global/types/types'

export const locales = {
    en: {
        header: {
            home: 'Home',
            search: 'Search',
        },

        sections: {
            hero_title: 'the search tool for veterinary medicines',
            hero_subtitle: 'with data from the official database',
            species_medicines: 'registered medicines',
            species: {
                cat: { title: 'Cats', text: 'Cats are listed as one group, without subdivision.' },
                duck: { title: 'Ducks', text: 'Separate withdrawal periods apply to the meat and the eggs.' },
                fish: { title: 'Fish', text: 'Fish and aquarium fish are listed separately.' },
                parrot: { title: 'Birds', text: 'Cage birds and ornamental birds belong to this group.' },
                rabbit: { title: 'Rabbits', text: 'Rabbits and pet rabbits fall under the same group.' },
                turtle: { title: 'Reptiles', text: 'Turtles, lizards and snakes belong to this group.' },
            },
            leaflets_title: 'Updated hourly',
            leaflets_text: 'If something changes at CBG, it appears here within an hour.',
            search_link: 'Search for a medicine',
            credits: 'Designed and built by',
        },

        landing: {
            title: 'Search tool for veterinary medicines | Vetly',
            description: 'Search veterinary medicines by brand name or registration number. Target species, withdrawal periods and the leaflet for every medicine. Updated hourly.',
        },

        search: {
            title: 'Search Medicine | Vetly',
            description: 'Search a veterinary medicine by brand name or registration number and see the target species, the withdrawal periods and the matching leaflet.',
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
            updated: 'Last updated: 19 August 2026',
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
                    title: 'Rights in Vetly',
                    body: 'The data of the CBG is public, but the compilation, ordering, presentation and search index of Vetly are not. These are ours and are protected by copyright and database rights.',
                },
                {
                    title: 'Reuse and automated access',
                    body: 'Reproducing, copying or automatically reading out Vetly is not permitted without our prior written consent. This includes scraping, crawling outside of the usual search engines, calling our search function from other applications, and embedding Vetly in another website.',
                },
                {
                    title: 'Referring to Vetly',
                    body: 'Referring to Vetly as a source is only permitted with our prior consent. Without that consent, Vetly may not be named or shown as the source of data you publish or process elsewhere.',
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
            hero_title: 'de zoekhulp voor diergeneesmiddelen',
            hero_subtitle: 'met gegevens uit de officiële databank',
            species_medicines: 'geregistreerde middelen',
            species: {
                cat: { title: 'Katten', text: 'Katten staan er als één groep in, zonder onderverdeling.' },
                duck: { title: 'Eenden', text: 'Voor het vlees en voor de eieren gelden aparte wachttermijnen.' },
                fish: { title: 'Vissen', text: 'Vissen en aquariumvissen staan los van elkaar in de lijst.' },
                parrot: { title: 'Vogels', text: 'Onder vogels horen kooivogels en siervogels.' },
                rabbit: { title: 'Konijnen', text: 'Konijnen en gezelschapskonijnen vallen onder dezelfde groep.' },
                turtle: { title: 'Reptielen', text: 'Bij deze groep horen schildpadden, hagedissen en slangen.' },
            },
            leaflets_title: 'Elk uur bijgewerkt',
            leaflets_text: 'Verandert er iets bij het CBG, dan staat het hier binnen het uur.',
            search_link: 'Zoek een middel',
            credits: 'Ontworpen en gemaakt door',
        },

        landing: {
            title: 'Zoekhulp voor diergeneesmiddelen | Vetly',
            description: 'Zoek diergeneesmiddelen op merknaam of registratienummer. Doeldieren, wachttermijnen en de bijsluiter bij elk middel. Elk uur bijgewerkt.',
        },

        search: {
            title: 'Zoek Medicijn | Vetly',
            description: 'Zoek een diergeneesmiddel op merknaam of registratienummer en zie meteen de doeldieren, de wachttermijnen en de bijsluiter die erbij hoort.',
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
            updated: 'Laatst bijgewerkt: 19 augustus 2026',
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
                    title: 'Rechten op Vetly',
                    body: 'De gegevens van het CBG zijn openbaar, maar de samenstelling, ordening, vormgeving en zoekindex van Vetly zijn dat niet. Die zijn van ons en worden beschermd door auteursrecht en databankenrecht.',
                },
                {
                    title: 'Overnemen en uitlezen',
                    body: 'Het overnemen, kopiëren of geautomatiseerd uitlezen van Vetly is niet toegestaan zonder voorafgaande schriftelijke toestemming. Dit geldt onder meer voor scrapen, crawlen buiten de gebruikelijke zoekmachines om, het aanroepen van onze zoekfunctie vanuit andere toepassingen, en het insluiten van Vetly in een andere website.',
                },
                {
                    title: 'Verwijzen naar Vetly',
                    body: 'Verwijzen naar Vetly als bron mag alleen met onze voorafgaande toestemming. Zonder die toestemming mag Vetly niet worden genoemd of getoond als bron van de gegevens die u elders publiceert of verwerkt.',
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
