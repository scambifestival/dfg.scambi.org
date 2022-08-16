/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';

export default function Markdown({ className, content }) {
	if (typeof content === 'string')
		return (
			<div className={className}>
				<ReactMarkdown
					rehypePlugins={[rehypeRaw, gfm]}
					linkTarget='_blank'
					className='space-y-10'
					components={{
						img: ({ src, alt }) => {
							return (
								<img
									src={src}
									className='lg:w-[800px] lg:h-[500px] mx-auto'
									alt={alt}
								/>
							);
						},
						a: ({ href, children }) => {
							return (
								<a href={href} className='text-primary font-bold'>
									{children}
								</a>
							);
						},
						q: ({ children }) => {
							return <q className='text-right'>{children}</q>;
						},
						blockquote: ({ children }) => {
							return <blockquote className='text-right'>{children}</blockquote>;
						},
					}}>
					{content}
				</ReactMarkdown>
			</div>
		);
}
