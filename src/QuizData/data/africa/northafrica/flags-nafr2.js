import Egypt from '../../../flagPics/africa/Egypt.png';
import Algeria from '../../../flagPics/africa/Algeria.png';
import Sudan from '../../../flagPics/africa/Sudan.png';
const NAfrQ2 = [
	{
		text: 'What do Egyptians call Egypt?',
		flag: Egypt,
		options: [
			{ id: 0, choice: 'Masr', isCorrect: true },
			{ id: 1, choice: 'El Egypte', isCorrect: false },
			{ id: 2, choice: 'Al Egypte', isCorrect: false },
			{ id: 3, choice: 'Al Qahirah', isCorrect: false },
		],
	},
	{
		text: ' When did Egypt attain independence, and from whom?',
		flag: Egypt,
		options: [
			{ id: 0, choice: 'In 1922 from the UK', isCorrect: true },
			{ id: 1, choice: 'In 1923 from Turkey', isCorrect: false },
			{ id: 2, choice: 'In 1925 from France', isCorrect: false },
			{ id: 3, choice: 'In 1924 from Libya', isCorrect: false },
		],
	},
	{
		text: 'According to the census of 2006, what was the population of Egypt?',
		flag: Egypt,
		options: [
			{ id: 0, choice: '99,548,008', isCorrect: false },
			{ id: 1, choice: '58,876,898', isCorrect: false },
			{ id: 2, choice: '72,798,000', isCorrect: true },
			{ id: 3, choice: '101,132,864', isCorrect: false },
		],
	},

	{
		text: 'Which of the following does Egypt NOT export?',
		flag: Egypt,
		options: [
			{ id: 0, choice: 'cotton and textiles', isCorrect: false },
			{ id: 1, choice: 'wood products', isCorrect: true },
			{ id: 2, choice: 'crude oil and petroleum products', isCorrect: false },
			{ id: 3, choice: 'metal products', isCorrect: false },
		],
	},
	{
		text: 'Annaba is one of the largest cities in Algeria and is known for its beaches that lie on the coast of the Mediterranean Sea. It is a short distance from the ruins of a city that was home to a 4th and 5th century bishop, whose writings had a significant impact on the future of Christianity. An important location in Roman times, what was the ancient name of this city?',
		flag: Algeria,
		options: [
			{ id: 0, choice: 'Carthage', isCorrect: false },
			{ id: 1, choice: 'Hippo Regius', isCorrect: true },
			{ id: 2, choice: 'Syracuse', isCorrect: false },
			{ id: 3, choice: 'Timbuktu', isCorrect: false },
		],
	},
	{
		text: 'Amongst the Algerian sites that UNESCO has thought worthy of adding to its World Heritage list is a Saharan mountain range that can be found in the south-east of Algeria. There you can find some fine examples of prehistoric art amongst a beautiful setting. What is the name of this World Heritage Site?',
		flag: Algeria,
		options: [
			{ id: 0, choice: 'Plitvice Lakes', isCorrect: false },
			{ id: 1, choice: 'Peninsula Valdés', isCorrect: false },
			{ id: 2, choice: 'Pendjari National Park', isCorrect: false },
			{ id: 3, choice: "Tassili n'Ajjer", isCorrect: true },
		],
	},
	{
		text: ' Timgad was a Roman colonial town that rose up at the close of the 1st century A.D. Its ruins are particularly noted as an excellent example of Roman town planning, and you can see the two perpendicular roads, the cardo and decumanus, running through the town. Other pieces of architecture that are particularly striking are an impressive theatre and triumphal arch. With which name is the triumphal arch associated?',
		flag: Algeria,
		options: [
			{ id: 0, choice: 'Julius Caesar', isCorrect: false },
			{ id: 1, choice: 'Marcus Aurelius', isCorrect: false },
			{ id: 2, choice: 'Nero', isCorrect: false },
			{ id: 3, choice: 'Trajan', isCorrect: true },
		],
	},
	{
		text: "The Al Qal'a of Beni Hammad was the capital of the Hammadid empire in the 11th century. It is notable for its ruins in a beautiful, mountainous setting, and its importance has been noted by UNESCO who includes it on their World Heritage list. The evidence of which of the following types of building will you find at the site?",
		flag: Algeria,
		options: [
			{ id: 0, choice: 'Cathedral', isCorrect: false },
			{ id: 1, choice: 'Mosque', isCorrect: true },
			{ id: 2, choice: 'Amphitheatre', isCorrect: false },
			{ id: 3, choice: 'Crematorium', isCorrect: false },
		],
	},
	{
		text: 'Madaure was an ancient settlement that as well as coming under Roman rule, had previously been under control of the Punic era kingdoms of Syphax and Massinissa. It was particularly renowned for its educational establishments, and was the home of the famous Berber writer Apuleius. Which picaresque novel, the only Latin novel to still exist in its entirety, did Apuleius write?',
		flag: Algeria,
		options: [
			{ id: 0, choice: 'The Frogs', isCorrect: false },
			{ id: 1, choice: 'Parallel Lives', isCorrect: false },
			{ id: 2, choice: 'Don Quixote', isCorrect: false },
			{ id: 3, choice: 'The Golden Ass', isCorrect: true },
		],
	},
	{
		text: ' The Nile is usually considered the longest river in the world. Where do the Blue Nile and the White Nile converge to form the Nile proper?',
		flag: Sudan,
		options: [
			{ id: 0, choice: 'At Juba in South Sudan', isCorrect: false },
			{
				id: 1,
				choice: 'About 5 miles before the Egyptian border',
				isCorrect: false,
			},
			{ id: 2, choice: 'Just before they leave Ethiopia', isCorrect: false },
			{ id: 3, choice: 'The city of Khartoum', isCorrect: true },
		],
	},
	{
		text: ' Sudan is a large country. It is nearly one-fifth the area of which of the following?',
		flag: Sudan,
		options: [
			{ id: 0, choice: 'Egypt', isCorrect: false },
			{ id: 1, choice: 'Libya', isCorrect: false },
			{ id: 2, choice: 'Europe', isCorrect: true },
			{ id: 3, choice: 'Africa', isCorrect: false },
		],
	},
	{
		text: 'The northern portion of Sudan, other than the Nile valley, consists largely of desert. Which major desert(s) is (are) represented?',
		flag: Sudan,
		options: [
			{ id: 0, choice: 'The Kalahari Desert', isCorrect: false },
			{ id: 1, choice: 'Abyssinian Desert', isCorrect: false },
			{ id: 2, choice: 'Libyan and Kalahari Deserts', isCorrect: false },
			{ id: 3, choice: 'Nubian and the Libyan Deserts', isCorrect: true },
		],
	},
	{
		text: "In the 21st century, prior to the secession of South Sudan, what had been Sudan's most valuable known natural resource?",
		flag: Sudan,
		options: [
			{ id: 0, choice: 'Limestone', isCorrect: false },
			{ id: 1, choice: 'Petroleum', isCorrect: true },
			{ id: 2, choice: 'Ivory', isCorrect: false },
			{ id: 3, choice: 'Chromium', isCorrect: false },
		],
	},
];
export default NAfrQ2;
