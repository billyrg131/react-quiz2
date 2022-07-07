import Gabon from '../../../flagPics/africa/Gabon.png';
import Congo from '../../../flagPics/africa/Congo.png';
import Cameroon from '../../../flagPics/africa/Cameroon.png';
const CAfrQ = [
	{
		text: ' The capital of Cameroon is:',
		flag: Cameroon,
		options: [
			{ id: 0, choice: 'Yaounde', isCorrect: true },
			{ id: 1, choice: 'Maroua', isCorrect: false },
			{ id: 2, choice: 'Douala', isCorrect: false },
			{ id: 3, choice: 'Ebolowa', isCorrect: false },
		],
	},
	{
		text: 'The main port is:',
		flag: Cameroon,
		options: [
			{ id: 0, choice: 'Douala', isCorrect: true },
			{ id: 1, choice: 'Kribi', isCorrect: false },
			{ id: 2, choice: 'Limbe', isCorrect: false },
			{ id: 3, choice: 'Kumba', isCorrect: false },
		],
	},
	{
		text: '. Cameroon shares a border with how many countries?',
		flag: Cameroon,
		options: [
			{ id: 0, choice: '3', isCorrect: false },
			{ id: 1, choice: '5', isCorrect: false },
			{ id: 2, choice: '4', isCorrect: false },
			{ id: 3, choice: '6', isCorrect: true },
		],
	},
	{
		text: ' When did Cameroon become independent?',
		flag: Cameroon,
		options: [
			{ id: 0, choice: '1955', isCorrect: false },
			{ id: 1, choice: '1970', isCorrect: false },
			{ id: 2, choice: '1965', isCorrect: false },
			{ id: 3, choice: '1960', isCorrect: true },
		],
	},
	{
		text: ' The Republic of the Congo borders five nations. In addition to the Democratic Republic of the Congo (DR Congo), it also borders the province of Cabinda, which is an exclave that belongs to which former Portuguese colony?',
		flag: Congo,
		options: [
			{ id: 0, choice: 'Angola', isCorrect: true },
			{ id: 1, choice: 'Cameroon', isCorrect: false },
			{ id: 2, choice: 'Gabon', isCorrect: false },
			{ id: 3, choice: 'Central African Republic', isCorrect: false },
		],
	},
	{
		text: 'Due to its geographical location, Congo experiences consistent climate all year round, with distinct dry and rainy seasons. What similarity does Congo share with the following six African nations - DR Congo, Gabon, Kenya, São Tomé and Príncipe, Somalia, and Uganda?',
		flag: Congo,
		options: [
			{
				id: 0,
				choice: 'They are all located on the Tropic of Cancer.',
				isCorrect: false,
			},
			{
				id: 1,
				choice: 'They are all located on the equator.',
				isCorrect: true,
			},
			{
				id: 2,
				choice: 'They are all located on the International Date Line.',
				isCorrect: false,
			},
			{
				id: 3,
				choice: 'They are all located on the Greenwich prime meridian.',
				isCorrect: false,
			},
		],
	},
	{
		text: 'The capital of Congo, Brazzaville, is located near the Congo River. Located directly opposite the river is Kinshasa, the capital city of DR Congo. This makes Brazzaville and Kinshasa one of the closest pairs of capital cities in the world. How far are the two cities apart?',
		flag: Congo,
		options: [
			{ id: 0, choice: '20 kilometers', isCorrect: true },
			{ id: 1, choice: '2,000 kilometers', isCorrect: false },
			{ id: 2, choice: '200 kilometers', isCorrect: false },
			{ id: 3, choice: '20,000 kilometers', isCorrect: false },
		],
	},
	{
		text: 'Located in the western region of Congo, Pointe-Noire is a major city and commercial center of the nation. The city is situated on the coast of which ocean?',
		flag: Congo,
		options: [
			{ id: 0, choice: 'Arctic Ocean', isCorrect: false },
			{ id: 1, choice: 'Pacific Ocean', isCorrect: false },
			{ id: 2, choice: 'Atlantic Ocean', isCorrect: true },
			{ id: 3, choice: 'Indian Ocean', isCorrect: false },
		],
	},
	{
		text: " Which of the following main rivers, noted for being the world's deepest river, flows through Congo, providing freshwater fish as an important protein source for Congolese?",
		flag: Congo,
		options: [
			{ id: 0, choice: 'Amazon River', isCorrect: false },
			{ id: 1, choice: 'Mekong River', isCorrect: false },
			{ id: 2, choice: 'Orange River', isCorrect: false },
			{ id: 3, choice: 'Congo River', isCorrect: true },
		],
	},
	{
		text: 'Gabon has land borders with three other countries. Which is these is NOT one of those three?',
		flag: Gabon,
		options: [
			{ id: 0, choice: 'Equatorial Guinea', isCorrect: false },
			{ id: 1, choice: 'Republic of Congo', isCorrect: false },
			{ id: 2, choice: 'Cameroon', isCorrect: false },
			{ id: 3, choice: 'Nigeria', isCorrect: true },
		],
	},
	{
		text: 'The Gabonese flag consists of three equal-size horizontal stripes of which colors?',
		flag: Gabon,
		options: [
			{ id: 0, choice: 'Red, White Blue', isCorrect: false },
			{ id: 1, choice: 'Red, Yellow, Black', isCorrect: false },
			{ id: 2, choice: 'Black, White, Green', isCorrect: false },
			{ id: 3, choice: 'Green, Yellow, Blue', isCorrect: true },
		],
	},
	{
		text: "Gabon's capital and largest city is Libreville. Where in the country is it located?",
		flag: Gabon,
		options: [
			{
				id: 0,
				choice: 'Near the coast in the south of the country',
				isCorrect: false,
			},
			{
				id: 1,
				choice: 'On the coast in the north of the country',
				isCorrect: true,
			},
			{ id: 2, choice: 'In the centre of the country', isCorrect: false },
			{
				id: 3,
				choice: 'Near the northeastern border of the country',
				isCorrect: false,
			},
		],
	},
	{
		text: ' Gabon is divided into nine provinces. Which of the nine is the largest, the least populated and the least developed?',
		flag: Gabon,
		options: [
			{ id: 0, choice: 'Moyen-Ogooué Province', isCorrect: false },
			{ id: 1, choice: 'Ogooué-Ivindo Province', isCorrect: true },
			{ id: 2, choice: 'Woleu-Ntem Province', isCorrect: false },
			{ id: 3, choice: 'Nyanga Province', isCorrect: false },
		],
	},
];
export default CAfrQ;
