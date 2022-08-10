/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function Markdown({ content }) {
	if (typeof content === 'string')
		return <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />;
}
