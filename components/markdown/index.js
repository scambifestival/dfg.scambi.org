/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import useMediaQuery from "../../lib/hooks/media-query";

export default function Markdown({ className, content }) {
	const isXLarge = useMediaQuery("(max-width: 1100px)");
	const isLarge = useMediaQuery("(max-width: 940px)");
	const isMedium = useMediaQuery("(max-width: 700px)");
	const isSmall = useMediaQuery("(max-width: 500px)");
	const isXSmall = useMediaQuery("(max-width: 400px)");
	const isGalaxyS8 = useMediaQuery("(max-width: 360px)");

	if (typeof content === "string")
		return (
			<div className={className}>
				<ReactMarkdown
					rehypePlugins={[rehypeRaw, gfm]}
					linkTarget="_blank"
					className="space-y-10"
					components={{
						img: ({ src, alt }) => {
							return (
								<img
									src={src}
									layout="responsive"
									className="lg:w-[800px] xl:h-[450px] lg:h-[430px] md:w-[800px] md:h-[300px] mx-auto GalaxyFold:w-[220px] GalaxyFold:h-[130px] iPhoneSE:w-[300px] iPhoneSE:h-[200px]"
									alt={alt}
								/>
							);
						},
						iframe: ({ src, title }) => {
							return (
								<iframe
									sandbox="allow-same-origin allow-scripts allow-popups"
									src={src}
									title={title}
									width={
										isGalaxyS8
											? 240
											: isXSmall
											? 260
											: isSmall
											? 260
											: isMedium
											? 360
											: isLarge
											? 480
											: isXLarge
											? 600
											: 770
									}
									height={
										isGalaxyS8
											? 130
											: isXSmall
											? 140
											: isSmall
											? 150
											: isMedium
											? 160
											: isLarge
											? 260
											: isXLarge
											? 320
											: 400
									}
									frameBorder="0"></iframe>
							);
						},
						a: ({ href, children }) => {
							return (
								<a href={href} className="text-primary font-bold">
									{children}
								</a>
							);
						},
						q: ({ children }) => {
							return <q className="text-right">{children}</q>;
						},
						blockquote: ({ children }) => {
							return <blockquote className="text-right">{children}</blockquote>;
						}
					}}>
					{content}
				</ReactMarkdown>
			</div>
		);
}
