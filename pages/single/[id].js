import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from '../../components/markdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const pageDir = path.join(process.cwd(), 'single-pages');

export default function Single({ data, content }) {
	return (
		<section className='mt-48'>
			<Markdown content={content} />
		</section>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(pageDir);
	const paths = files.map((file) => ({
		params: {
			id: `${file.replace('.md', '')}`,
		},
	}));
	return {
		paths: paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, locale }) {
	let filePath = path.join(pageDir, `${params.id}.md`);
	let data = null;
	let content = null;
	try {
		const file = fs.readFileSync(filePath, 'utf-8');
		if (file) {
			let parse = matter(file);
			content = parse.content;
		}

		return {
			props: {
				data: data,
				content: content,
				...(await serverSideTranslations(locale, ['common'])),
			},
		};
	} catch (error) {
		return null;
	}
}
