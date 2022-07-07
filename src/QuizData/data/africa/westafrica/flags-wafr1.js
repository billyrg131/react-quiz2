import CapeVerde from '../../../flagPics/africa/Cape_Verde.png';
import BurkinaFaso from '../../../flagPics/africa/Burkina_Faso.png';
import Guinea from '../../../flagPics/africa/Guinea.png';
import SierraLeone from '../../../flagPics/africa/Sierra_Leone.png';
const WAfrQ = [
	{
		text: ' Which of these islands of Cape Verde shares its name with a South American capital and is home to Praia, the capital of Cape Verde?',
		flag: CapeVerde,
		options: [
			{ id: 0, choice: 'Sal', isCorrect: false },
			{ id: 1, choice: 'Caracas', isCorrect: false },
			{ id: 2, choice: 'Boavista', isCorrect: false },
			{ id: 3, choice: 'Santiago', isCorrect: true },
		],
	},
	{
		text: 'Which European country was the first to discover and colonize Cape Verde in the 15th century?',
		flag: CapeVerde,
		options: [
			{ id: 0, choice: 'France', isCorrect: false },
			{ id: 1, choice: 'Spain', isCorrect: false },
			{ id: 2, choice: 'Portugal', isCorrect: true },
			{ id: 3, choice: 'Italy', isCorrect: false },
		],
	},
	{
		text: 'Which of these Cape Verde animals is actually a real animal?',
		flag: CapeVerde,
		options: [
			{ id: 0, choice: 'Cape Verde Swan', isCorrect: false },
			{ id: 1, choice: 'Cape Verde Warbler', isCorrect: true },
			{ id: 2, choice: 'Cape Verde Piranha', isCorrect: false },
			{ id: 3, choice: 'Cape Verde Catfish', isCorrect: false },
		],
	},
	{
		text: 'Burkina Faso was named Upper Volta until 1984. The old name was due to Burkina Faso being home to the headwaters of three waterways called the Volta River. The rivers were each given an extra name to differentiate them. What are the three Volta Rivers called?',
		flag: BurkinaFaso,
		options: [
			{ id: 0, choice: 'Black, White and Red', isCorrect: true },
			{ id: 1, choice: 'Tom, Dick and Harry', isCorrect: false },
			{ id: 2, choice: 'A, B and C', isCorrect: false },
			{ id: 3, choice: 'Small, Medium and Large', isCorrect: false },
		],
	},
	{
		text: ' The Domes of Fabedougou are a tourist attraction near the town of Banfora. What are the domes?',
		flag: BurkinaFaso,
		options: [
			{ id: 0, choice: 'Ostrich eggs carved from marble', isCorrect: false },
			{ id: 1, choice: 'Rock formations', isCorrect: true },
			{ id: 2, choice: 'A camel farm', isCorrect: false },
			{ id: 3, choice: 'Sand dunes', isCorrect: false },
		],
	},
	{
		text: 'Burkina Faso is a fairly flat country, much of which consists of rolling plains. Which part of the country is made up of a sandstone massif and includes the highest peak, Ténakourou?',
		flag: BurkinaFaso,
		options: [
			{ id: 0, choice: 'Central Burkina Faso', isCorrect: false },
			{ id: 1, choice: 'Southwest', isCorrect: true },
			{ id: 2, choice: 'Northeast', isCorrect: false },
			{ id: 3, choice: 'Southeast', isCorrect: false },
		],
	},
	{
		text: 'What geometric shape does the Republic of Guinea resemble?',
		flag: Guinea,
		options: [
			{ id: 0, choice: 'Crescent', isCorrect: true },
			{ id: 1, choice: 'Octagon', isCorrect: false },
			{ id: 2, choice: 'Triangle', isCorrect: false },
			{ id: 3, choice: 'Rectangle', isCorrect: false },
		],
	},
	{
		text: 'The northeastern third of the country of Guinea is part of a large savanna referred to as Upper Guinea, which extends into the neighboring countries of Sierra Leone, Liberia and Ivory Coast. What kind of vegetation would you expect to find in this area?',
		flag: Guinea,
		options: [
			{ id: 0, choice: 'Hardwood rainforest', isCorrect: false },
			{ id: 1, choice: 'Mangrove swamps', isCorrect: false },
			{ id: 2, choice: 'Jungle growth', isCorrect: false },
			{ id: 3, choice: 'Grasslands', isCorrect: true },
		],
	},
	{
		text: "The Republic of Guinea is thought to have between a quarter and a half of the world's reserves of a mineral which is very useful as a source for the metal aluminum. Which ore is mined extensively in northwest Guinea, and forms one of the country's major exports?",
		flag: Guinea,
		options: [
			{ id: 0, choice: 'Hematite', isCorrect: false },
			{ id: 1, choice: 'Malachite', isCorrect: false },
			{ id: 2, choice: 'Pitchblende', isCorrect: false },
			{ id: 3, choice: 'Bauxite', isCorrect: true },
		],
	},
	{
		text: 'Sierra Leone is located in West Africa, with a coastline on the Atlantic Ocean. Where is it located relative to the Equator?',
		flag: SierraLeone,
		options: [
			{ id: 0, choice: 'Slightly south of the Equator', isCorrect: false },
			{
				id: 1,
				choice: 'Closer to the Tropic of Capricorn than the Equator',
				isCorrect: false,
			},
			{
				id: 2,
				choice: 'Closer to the Tropic of Cancer than the Equator',
				isCorrect: false,
			},
			{ id: 3, choice: 'Slightly north of the Equator', isCorrect: true },
		],
	},
	{
		text: 'As might be expected from its geographical location, Sierra Leone has a tropical climate. How many distinct seasons does it experience in a year?',
		flag: SierraLeone,
		options: [
			{
				id: 0,
				choice: 'One - there is no particular seasonal change to be noticed',
				isCorrect: false,
			},
			{ id: 1, choice: 'Two - rainy season and dry season', isCorrect: true },
			{
				id: 2,
				choice: 'Three - rainy season, dry season, cool season',
				isCorrect: false,
			},
			{
				id: 3,
				choice: 'Four - spring, summer, autumn, winter',
				isCorrect: false,
			},
		],
	},
	{
		text: "As this topographical map shows, Sierra Leone has a diverse geography. It is usually divided into four geographical regions. In which region would you expect to find Mount Bintumani, Sierra Leone's highest point?",
		flag: SierraLeone,
		options: [
			{ id: 0, choice: 'Upland plateau', isCorrect: false },
			{ id: 1, choice: 'Coastal mangroves', isCorrect: false },
			{ id: 2, choice: 'Wooded hill country', isCorrect: false },
			{ id: 3, choice: 'Eastern mountains', isCorrect: true },
		],
	},
	{
		text: 'The central area of Sierra Leone is part of a larger region that covers much of Western Africa. What is the name of this ecoregion, which features a combination of forests, savannas and grasslands?',
		flag: SierraLeone,
		options: [
			{ id: 0, choice: 'Guinean mangroves', isCorrect: false },
			{ id: 1, choice: 'Sahelian Acacia Savanna', isCorrect: false },
			{ id: 2, choice: 'West Sudanian Savanna', isCorrect: false },
			{ id: 3, choice: 'Guinea forest-savanna mosaic', isCorrect: true },
		],
	},
];

export default WAfrQ;
