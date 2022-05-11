import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
	DocumentInitialProps
} from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) =>
						function enhance(props) {
							return sheet.collectStyles(<App {...props} />);
						}
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [
					<Fragment key="1">
						{initialProps.styles}
						{sheet.getStyleElement()}
					</Fragment>
				]
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="pt-BR">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
