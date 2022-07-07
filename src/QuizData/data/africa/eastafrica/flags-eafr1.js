import Kenya from '../../../flagPics/africa/Flag_of_Kenya.svg';
import Somalia from '../../../flagPics/africa/Flag_of_Somalia.svg';
import Rwanda from '../../../flagPics/africa/Flag_of_Rwanda.svg';
import Uganda from '../../../flagPics/africa/Flag_of_Uganda.svg';
import Tanzania from '../../../flagPics/africa/Flag_of_Tanzania.svg';
import Burundi from '../../../flagPics/africa/Flag_of_Burundi.svg';
import EAC from '../../../flagPics/africa/Flag_of_the_East_African_Community.svg';

const flagEAQ1 = [
	{
		text: 'Which year did this country gain independence?',
		flag: Kenya,
		options: [
			{ id: 0, choice: '1963', checkStatus: true },
			{ id: 1, choice: '1960', checkStatus: false },
			{ id: 2, choice: '1962', checkStatus: false },
			{ id: 3, choice: '1961', checkStatus: false },
		],
	},
	{
		text: 'Which organisation is this country not a member of?',
		flag: Kenya,
		options: [
			{ id: 0, choice: 'IGAD', checkStatus: false },
			{ id: 1, choice: 'AU', checkStatus: false },
			{ id: 2, choice: 'SADC', checkStatus: true },
			{ id: 3, choice: 'EAC', checkStatus: false },
		],
	},
	{
		text: 'The flag above is for which country?',
		flag: Somalia,
		options: [
			{ id: 0, choice: 'Somaliland', checkStatus: false },
			{ id: 1, choice: 'Somalia', checkStatus: true },
			{ id: 2, choice: 'Eritrea', checkStatus: false },
			{ id: 3, choice: 'Djibouti', checkStatus: false },
		],
	},
	{
		text: 'How many national parks are found in this country?',
		flag: Uganda,
		options: [
			{ id: 0, choice: '15', checkStatus: false },
			{ id: 1, choice: '11', checkStatus: false },
			{ id: 2, choice: '13', checkStatus: false },
			{ id: 3, choice: '10', checkStatus: true },
		],
	},
	{
		text: 'In this country , what is the height in metres for Mount Kilimanjaro?',
		flag: Tanzania,
		options: [
			{ id: 0, choice: '5815m', checkStatus: false },
			{ id: 1, choice: '5600m', checkStatus: false },
			{ id: 2, choice: '5850m', checkStatus: false },
			{ id: 3, choice: '5895m', checkStatus: true },
		],
	},
	{
		text: 'How many national parks are in this country?',
		flag: Tanzania,
		options: [
			{ id: 0, choice: '21', checkStatus: true },
			{ id: 1, choice: '19', checkStatus: false },
			{ id: 2, choice: '20', checkStatus: false },
			{ id: 3, choice: '24', checkStatus: false },
		],
	},
	{
		text: 'When was the founding year of the organasition above?',
		flag: EAC,
		options: [
			{ id: 0, choice: '1966', checkStatus: false },
			{ id: 1, choice: '1968', checkStatus: false },
			{ id: 2, choice: '1967', checkStatus: true },
			{ id: 3, choice: '1965', checkStatus: false },
		],
	},
	{
		text: 'Which is not a member of this organisation?',
		flag: EAC,
		options: [
			{ id: 0, choice: 'Ethiopia', checkStatus: true },
			{ id: 1, choice: 'South Sudan', checkStatus: false },
			{ id: 2, choice: 'DRC Congo', checkStatus: false },
			{ id: 3, choice: 'Rwanda', checkStatus: false },
		],
	},
	{
		text: 'What is the name of this organisation ?',
		flag: EAC,
		options: [
			{ id: 0, choice: 'East African Comission', checkStatus: false },
			{ id: 1, choice: 'East African Community', checkStatus: true },
			{ id: 2, choice: 'East African Cooperation', checkStatus: false },
			{ id: 3, choice: 'East African Company', checkStatus: false },
		],
	},
	{
		text: 'Is the country above a part of IGAD(Intergovermental Authority on DevelopmenT) ?',
		flag: Rwanda,
		options: [
			{ id: 0, choice: 'No', checkStatus: true },
			{ id: 1, choice: 'Yes', checkStatus: false },
		],
	},
	{
		text: 'What is the population for the country above ?',
		flag: Rwanda,
		options: [
			{ id: 0, choice: '61.5 million', checkStatus: false },
			{ id: 1, choice: '61.498 million', checkStatus: true },
			{ id: 2, choice: '61.49 million', checkStatus: false },
			{ id: 3, choice: '61.495 million', checkStatus: false },
		],
	},
	{
		text: 'Which Rift Valley Lake is found in this country ?',
		flag: Kenya,
		options: [
			{ id: 0, choice: 'Lake Logipi', checkStatus: true },
			{ id: 1, choice: 'Lake Chamo', checkStatus: false },
			{ id: 2, choice: 'Lake Albert', checkStatus: false },
			{ id: 3, choice: 'Lake Manyara', checkStatus: false },
		],
	},
	{
		text: 'What is the capital of this country?',
		flag: Burundi,
		options: [
			{ id: 0, choice: 'Kigali', checkStatus: true },
			{ id: 1, choice: 'Bujumbura', checkStatus: false },
			{ id: 2, choice: 'Gitega', checkStatus: false },
			{ id: 3, choice: 'Kayanza', checkStatus: false },
		],
	},
];
export default flagEAQ1;
