const zCrystalsTypes: string[] = [
	'Buginium Z',
	'Darkinium Z',
	'Dragonium Z',
	'Electrium Z',
	'Fairium Z',
	'Fightinium Z',
	'Firium Z',
	'Flyinium Z',
	'Ghostium Z',
	'Grassium Z',
	'Groundium Z',
	'Icium Z',
	'Normalium Z',
	'Poisonium Z',
	'Psychium Z',
	'Rockium Z',
	'Steelium Z',
	'Waterium Z',
];

const zCrystalsUnique: string[] = [
	'Aloraichium Z',
	'Decidium Z',
	'Eevium Z',
	'Incinium Z',
	'Kommonium Z',
	'Lunalium Z',
	'Lycanium Z',
	'Marshadium Z',
	'Mewnium Z',
	'Mimikium Z',
	'Pikanium Z',
	'Pikashunium Z',
	'Primarium Z',
	'Snorlium Z',
	'Solganium Z',
	'Tapunium Z',
	'Ultranecrozium Z',
];

const bannedMoves: string[] = [
	'Assist',
	'Baton Pass',
	'Hidden Power',
	'Last Respects',
	'Shed Tail',
];

const bannedAbilities: string[] = [
	'Arena Trap',
	'Moody',
	'Power Construct',
	'Quick Draw',
	'Shadow Tag',
];

const bannedItems: string[] = [
	'King\'s Rock',
	'Quick Claw',
	'Razor Fang',
	...zCrystalsTypes,
	...zCrystalsUnique,
];

const bannedCombinations: string[] = [
	'Leppa Berry + Revival Blessing',
]

const oklBans: string[] = [
	...bannedMoves,
	...bannedAbilities,
	...bannedItems,
	...bannedCombinations,
]

export const Formats: FormatList = [
	{
		section: 'Odd Keystone League',
	},
	{
		name: '[Gen 9] National Dex - OKL S5',
		threads: [
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1i8GAUogh9yp4bgD0WMeNsuXRkmLk4m7cfgDsE6ba8UY/edit?usp=sharing" target="_blank">OKL Season 5 Sheet</a>`,
		],
		mod: 'gen9nationaldexokls5',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: oklBans,
	},
];
