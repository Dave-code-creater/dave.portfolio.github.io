import TodoList from '../assets/1000_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg';
import discordBot from '../assets/discordBot.png';
import news from '../assets/news.jpeg';

export const projects = [
	{
		img: {
			src: TodoList,
			alt: 'To-do list in Vietnamese',
		},
		title: 'Full-Stack To-Do List App',
		description:
			'This project showcases a full-stack to-do list application. The front-end is built using React for a dynamic user interface, and the back-end is powered by Node.js for efficient task management.',
		url: 'https://www.danhsachcongviec.site/',
		languages: ['React', 'Node.js', 'Tailwind'],
	},
	{
		img: {
			src: discordBot,
			alt: 'Discord Bot',
		},
		title: 'Discord Bot with LLM Integration',
		description:
			'This project integrates a language learning model (LLM) into Discord to interact with and moderate user language, as well as provide information based on user requests.',
		url: 'https://discord.com/invite/pFPxgv43',
		languages: ['Python'],
	},
	{
		img: {
			src: news,
			alt: 'Stack of newspapers',
		},
		title: 'Daily News Scraping and Summarization',
		description:
			'A Python project that scrapes daily news from well-known tech publishers and summarizes the content using the BERT model for efficient reading.',
		url: 'https://www.linkedin.com/posts/tan-dat-ta_python-automation-machinelearning-activity-7215791228334858243-oigO?utm_source=share&utm_medium=member_desktop',
		languages: ['Python', 'BERT'],
	},
];

export default projects;
