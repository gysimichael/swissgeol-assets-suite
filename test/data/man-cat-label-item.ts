import { ManCatLabelItem } from '@prisma/client';
import { faker } from '@faker-js/faker';

export const fakeManCatLabelItemCode = (): string =>
  faker.helpers.arrayElement(manCatLabelItems.map((item) => item.manCatLabelItemCode));

export const manCatLabelItems: ManCatLabelItem[] = [
  {
    manCatLabelItemCode: 'energyRessources',
    geolCode: 'No-GeolCode-specified',
    name: 'Energy ressources',
    nameDe: 'Geoenergie, Geothermie, Energierohstoffe (Erdöl/Erdgas/Kohle)',
    nameFr: 'Géoénergie, géothermie, matières premières énergétiques (pétrole/gaz naturel/charbon)',
    nameRm: '',
    nameIt: 'Geoenergia, energia geotermica, risorse energetiche (petrolio/gas naturale/carbone)',
    nameEn: 'Geoenergy, geothermal energy, energy resources (oil/natural gas/coal)',
    description: 'Geoenergy assets, e.g. geothermal energy, energy resources (oil, gas, coal), etc.',
    descriptionDe: 'Assets zum Thema Geoenergie, wie z.B. Geothermie, Energierohstoffe (Erdöl, Erdgas, Kohle), etc.',
    descriptionFr:
      'Assets sur le thème des géoénergies, p. ex. géothermie, matières premières énergétiques (pétrole, gaz naturel, charbon), etc.',
    descriptionRm: '',
    descriptionIt:
      'Elementi sul tema della geoenergia, ad esempio energia geotermica, risorse energetiche (petrolio, gas, carbone), ecc.',
    descriptionEn: 'Geoenergy assets, e.g. geothermal energy, energy resources (oil, gas, coal), etc.',
  },
  {
    manCatLabelItemCode: 'science',
    geolCode: 'No-GeolCode-specified',
    name: 'Science',
    nameDe: 'Wissenschaftl. Abschlussarbeiten',
    nameFr: "Travaux scientifiques de fin d'études",
    nameRm: '',
    nameIt: 'Tesi scientifiche',
    nameEn: 'Scientific theses',
    description: 'Assets in the form of a scientific thesis',
    descriptionDe: 'Assets ins Form einer  wissenschaftl. Abschlussarbeiten',
    descriptionFr: "Assets sous la forme d'un travail scientifique de fin d'études",
    descriptionRm: '',
    descriptionIt: 'Elementi in  forma di tesi scientifica',
    descriptionEn: 'Assets in the form of a scientific thesis',
  },
  {
    manCatLabelItemCode: 'geotechnics',
    geolCode: 'No-GeolCode-specified',
    name: 'Geotechnics',
    nameDe: 'Geotechnik',
    nameFr: 'Géotechnique',
    nameRm: '',
    nameIt: 'Geotecnica',
    nameEn: 'Geotechnics',
    description: 'Assets on the topic of geotechnics',
    descriptionDe: 'Assets zum Thema Geotechnik',
    descriptionFr: 'Assets sur le thème de la géotechnique',
    descriptionRm: '',
    descriptionIt: 'Elementi sul tema della geotecnica',
    descriptionEn: 'Assets on the topic of geotechnics',
  },
  {
    manCatLabelItemCode: 'geophysics',
    geolCode: 'No-GeolCode-specified',
    name: 'Geophysics',
    nameDe: 'Geophysik',
    nameFr: 'Géophysique',
    nameRm: '',
    nameIt: 'Geofisica',
    nameEn: 'Geophysics',
    description: 'Assets on the topic of geophysics',
    descriptionDe: 'Assets zum Thema Geophysik',
    descriptionFr: 'Assets sur le thème de la géophysique',
    descriptionRm: '',
    descriptionIt: 'Elementi sul tema della geofisica',
    descriptionEn: 'Assets on the topic of geophysics',
  },
  {
    manCatLabelItemCode: 'borehole',
    geolCode: 'No-GeolCode-specified',
    name: 'Borehole',
    nameDe: 'Bohrungen',
    nameFr: 'Forages',
    nameRm: '',
    nameIt: 'Perforazioni',
    nameEn: 'Boreholes',
    description: 'Assets on the topic of boreholes, e.g. borehole profiles and reports',
    descriptionDe: 'Assets zum Thema Bohrungen, z.B. Bohrprofile und Berichte zu Bohrungen',
    descriptionFr: 'Assets sur le thème des forages, p. ex. profils et rapports de forage',
    descriptionRm: '',
    descriptionIt: 'Elementi sul tema della perforazione, ad esempio profili e rpporti di perforazione.',
    descriptionEn: 'Assets on the topic of boreholes, e.g. borehole profiles and reports',
  },
  {
    manCatLabelItemCode: 'other',
    geolCode: 'No-GeolCode-specified',
    name: 'Other',
    nameDe: 'Andere',
    nameFr: 'Autres',
    nameRm: '',
    nameIt: 'Altro',
    nameEn: 'Other',
    description: 'Assets on other topics not covered by the values in this list',
    descriptionDe: 'Assets zu anderen Themen, die nicht mit den Werten dieser Liste abgedeckt sind',
    descriptionFr: "Assets sur d'autres thèmes qui ne sont pas couverts par les valeurs de cette liste",
    descriptionRm: '',
    descriptionIt: 'Elementi su altri argomenti non coperti dai valori di questo elenco',
    descriptionEn: 'Assets on other topics not covered by the values in this list',
  },
  {
    manCatLabelItemCode: 'naturalHazards',
    geolCode: 'No-GeolCode-specified',
    name: 'Natural hazards',
    nameDe: 'Naturgefahren',
    nameFr: 'Dangers naturels',
    nameRm: '',
    nameIt: 'Rischi naturali',
    nameEn: 'Natural hazards',
    description: 'Assets on the topic of natural hazards',
    descriptionDe: 'Assets zum Thema Naturgefahren',
    descriptionFr: 'Assets sur le thème des dangers naturels',
    descriptionRm: '',
    descriptionIt: 'Elementi sul tema dei rischi naturali',
    descriptionEn: 'Assets on the topic of natural hazards',
  },
  {
    manCatLabelItemCode: 'hydrogeology',
    geolCode: 'No-GeolCode-specified',
    name: 'Hydrogeology',
    nameDe: 'Hydrogeologie',
    nameFr: 'Hydrogéologie',
    nameRm: '',
    nameIt: 'Idrogeologia',
    nameEn: 'Hydrogeology',
    description: 'Assets on the topic of hydrogeology',
    descriptionDe: 'Assets zum Thema Hydrogeologie',
    descriptionFr: "Assets sur le thème de l'hydrogéologie",
    descriptionRm: '',
    descriptionIt: "Elementi sul tema dell'idrogeologia",
    descriptionEn: 'Assets on the topic of hydrogeology',
  },
  {
    manCatLabelItemCode: 'pollution',
    geolCode: 'No-GeolCode-specified',
    name: 'Pollution',
    nameDe: 'Altlasten',
    nameFr: 'Sites contaminés',
    nameRm: '',
    nameIt: 'Siti contaminati',
    nameEn: 'Contaminated sites',
    description: 'Assets on the topic of contaminated sites',
    descriptionDe: 'Assets zum Thema Altlasten',
    descriptionFr: 'Assets sur le thème des sites contaminés',
    descriptionRm: '',
    descriptionIt: 'Elementi sul tema dei siti contaminati',
    descriptionEn: 'Assets on the topic of contaminated sites',
  },
  {
    manCatLabelItemCode: 'mineralRessources',
    geolCode: 'No-GeolCode-specified',
    name: 'Mineralressources',
    nameDe: 'Mineralische Rohstoffe',
    nameFr: 'Matières premières minérales',
    nameRm: '',
    nameIt: 'Risorse minerali',
    nameEn: 'Mineral Resources',
    description: 'Assets on the topic of mineral resources (incl. mining, quarries, gravel pits, etc.)',
    descriptionDe: 'Assets zum Thema Mineralische Rohstoffe (inkl. Bergbau, Steinbruch, Kiesgrube etc.)',
    descriptionFr:
      'Assets sur le thème des ressources minérales (y compris exploitation minière, carrières, gravières, etc.)',
    descriptionRm: '',
    descriptionIt: 'Elementi sul tema delle risorse minerali (incluse miniere, cave di roccia, cave di ghiaia, ecc.)',
    descriptionEn: 'Assets on the topic of mineral resources (incl. mining, quarries, gravel pits, etc.)',
  },
  {
    manCatLabelItemCode: 'prospection',
    geolCode: 'No-GeolCode-specified',
    name: 'Prospection',
    nameDe: 'Prospektion (z.B. Rohstoffe)',
    nameFr: 'Prospection (p. ex. matières premières)',
    nameRm: '',
    nameIt: 'Prospezione (ad es. materie prime)',
    nameEn: 'Prospecting (e.g. raw materials)',
    description: 'Assets on the topic of prospecting, e.g. of mineral raw materials',
    descriptionDe: 'Assets zum Thema Prospektion, wie z.B. von mineralischen Rohstoffen',
    descriptionFr: 'Assets sur le thème de la prospection, p. ex. matières premières minérales',
    descriptionRm: '',
    descriptionIt: 'Elementi sul tema della prospezione, ad esempio di materie prime minerali',
    descriptionEn: 'Assets on the topic of prospecting, e.g. of mineral raw materials',
  },
  {
    manCatLabelItemCode: 'exploration',
    geolCode: 'No-GeolCode-specified',
    name: 'Exploration',
    nameDe: 'Exploration',
    nameFr: 'Exploration',
    nameRm: '',
    nameIt: 'Esplorazione',
    nameEn: 'Exploration',
    description: 'Assets on the topic of exploration, e.g. of minerals and raw materials',
    descriptionDe: 'Assets zum Thema Exploration, wie z.B. von mineralischen Rohstoffen',
    descriptionFr: "Assets sur le thème de l'exploration, p. ex. ressources minérales",
    descriptionRm: '',
    descriptionIt: "Elementi sul tema dell'esplorazione, ad es. di materie prime minerali",
    descriptionEn: 'Assets on the topic of exploration, e.g. of minerals and raw materials',
  },
];
