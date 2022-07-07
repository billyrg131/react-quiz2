import Kenya from '../../../flagPics/africa/Flag_of_Kenya.svg';

import Rwanda from '../../../flagPics/africa/Flag_of_Rwanda.svg';
import Uganda from '../../../flagPics/africa/Flag_of_Uganda.svg';
import Tanzania from '../../../flagPics/africa/Flag_of_Tanzania.svg';
import Burundi from '../../../flagPics/africa/Flag_of_Burundi.svg';

const flagEAQ2 = [
	{
		text: 'Which national park in located in the northern part of thiss country?',
		flag: Tanzania,
		options: [
			{ id: 0, choice: 'Mikumi', isCorrect: true },
			{ id: 1, choice: 'Karamoja', isCorrect: false },
			{ id: 2, choice: 'Lake Mburo', isCorrect: false },
			{ id: 3, choice: 'Bwindi', isCorrect: false },
		],
	},
	{
		text: 'Which mountain is found in this country?',
		flag: Rwanda,
		options: [
			{ id: 0, choice: 'Emin', isCorrect: false },
			{ id: 1, choice: 'Karisimbi', isCorrect: true },
			{ id: 2, choice: 'Bisoke', isCorrect: false },
			{ id: 3, choice: 'Biega', isCorrect: false },
		],
	},
	{
		text: 'Which river is found in this country?',
		flag: Uganda,
		options: [
			{ id: 0, choice: 'Sobat', isCorrect: false },
			{ id: 1, choice: 'Baro', isCorrect: false },
			{ id: 2, choice: 'Kafu', isCorrect: true },
			{ id: 3, choice: 'Chiloango', isCorrect: false },
		],
	},
	{
		text: 'How long has President Kagame ruled this country?',
		flag: Rwanda,
		options: [
			{ id: 0, choice: '22 years', isCorrect: true },
			{ id: 1, choice: '18 years', isCorrect: false },
			{ id: 2, choice: '21 years', isCorrect: false },
			{ id: 3, choice: '20 years', isCorrect: false },
		],
	},
	{
		text: 'How many ethnic groups are found in Burundi?',
		flag: Burundi,
		options: [
			{ id: 0, choice: '1', isCorrect: false },
			{ id: 1, choice: '4', isCorrect: false },
			{ id: 2, choice: '2', isCorrect: false },
			{ id: 3, choice: '3', isCorrect: true },
		],
	},
	{
		text: 'How many presidents ruled Rwanda?',
		flag: Rwanda,
		options: [
			{ id: 0, choice: '5', isCorrect: false },
			{ id: 1, choice: '4', isCorrect: false },
			{ id: 2, choice: '6', isCorrect: true },
			{ id: 3, choice: '7', isCorrect: false },
		],
	},
	{
		text: 'Which is the most correct order of presidents who ruled Rwanda?',
		flag: Rwanda,
		options: [
			{
				id: 0,
				choice:
					'Bizimungu,  Sindikubwabo, Habyarimana, Mbonyumutwa, Kayibanda, Kagame',
				isCorrect: false,
			},
			{
				id: 1,
				choice:
					'Kayibanda, Habyarimana, Mbonyumutwa, Bizimungu, Sindikubwabo, Kagame',
				isCorrect: false,
			},
			{
				id: 2,
				choice:
					'Mbonyumutwa, Kayibanda, Habyarimana, Sindikubwabo, Bizimungu, Kagame',
				isCorrect: true,
			},
			{
				id: 3,
				choice:
					'Habyarimana, Mbonyumutwa, Kayibanda, Bizimungu, Kagame, Sindikubwabo',
				isCorrect: false,
			},
		],
	},
	{
		text: 'Which endangered species are found in Kenya?',
		flag: Kenya,
		options: [
			{
				id: 0,
				choice: 'White rhino',
				isCorrect: true,
			},
			{
				id: 1,
				choice: "Kleinmann's Tortoise",
				isCorrect: false,
			},
			{
				id: 2,
				choice: 'Sinai Wild Rose',
				isCorrect: false,
			},
			{
				id: 3,
				choice: 'Bear',
				isCorrect: false,
			},
		],
	},
	{
		text: 'Which Nilotic group isnt found in Kenya ?',
		flag: Kenya,
		options: [
			{ id: 0, choice: 'River/Lake Nilotes', isCorrect: false },
			{ id: 1, choice: 'Highland Nilotes', isCorrect: false },
			{ id: 2, choice: 'Plain Nilotes', isCorrect: false },
			{ id: 3, choice: 'Desert Nilotes', isCorrect: true },
		],
	},
	{
		text: 'Which isnt a freshwater lake in Tanzania?',
		flag: Tanzania,
		options: [
			{ id: 0, choice: 'Lake Tanganyika', isCorrect: false },
			{ id: 1, choice: 'Lake Victoria', isCorrect: false },
			{ id: 2, choice: 'Lake Natron', isCorrect: true },
			{ id: 3, choice: 'Lake Malawi', isCorrect: false },
		],
	},
	{
		text: 'What is the population of Uganda?',
		flag: Uganda,
		options: [
			{ id: 0, choice: '42 million', isCorrect: false },
			{ id: 1, choice: '45.74 million', isCorrect: true },
			{ id: 2, choice: '45.2 million', isCorrect: false },
			{ id: 3, choice: '46 million ', isCorrect: false },
		],
	},
	{
		text: 'How many tribes are found in Uganda?',
		flag: Uganda,
		options: [
			{ id: 0, choice: '56', isCorrect: true },
			{ id: 1, choice: '55', isCorrect: false },
			{ id: 2, choice: '52', isCorrect: false },
			{ id: 3, choice: '51', isCorrect: false },
		],
	},
	{
		text: 'Which tribe is President Museveni?',
		flag: Uganda,
		options: [
			{ id: 0, choice: 'Hima', isCorrect: true },
			{ id: 1, choice: 'Batoro', isCorrect: false },
			{ id: 2, choice: 'Buganda', isCorrect: false },
			{ id: 3, choice: 'Karamanjong', isCorrect: false },
		],
	},
];

export default flagEAQ2;
