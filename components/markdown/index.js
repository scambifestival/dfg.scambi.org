/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function Markdown({ className, content }) {
	if (typeof content === 'string')
		return (
			<div className={className}>
				<ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />
			</div>
		);
}
