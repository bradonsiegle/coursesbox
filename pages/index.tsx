import type { NextPage } from 'next';
import Head from 'next/head';

import { Course } from '@/components/Course';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>CoursesBox</title>
				<meta name='description' content='IT courses for everyone' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{Array(4).fill(
				<Course
					header='React'
					link='/hands-on-reactjs'
					imageProps={{
						width: 1368,
						height: 770,
						alt: 'React',
						src: '/covers/hands-on_reactjs_cover.png',
					}}
				>
					<>
						<p>
							React is the most popular library for building frontend web
							applications. Step-by-step by diving into all the basics,
							I&apos;ll introduce you to advanced concepts as well. We&apos;ll
							build the minesweeper application from scratch We&apos;ll build
							the minesweeper application from scratch:
						</p>
						<ul>
							<li>setup of the development environment</li>
							<li>configuration of the React JS app</li>
							<li>basic algorithms of Minesweeper</li>
						</ul>
					</>
				</Course>
			)}
		</>
	);
};

export default Home;
