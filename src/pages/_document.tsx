import Document, {
    DocumentContext,
    Main,
    NextScript,
    Head,
    Html,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface DocumentProps {
    styleTags: any;
}

export default class MyDocument extends Document<DocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();

        try {
            const page = ctx.renderPage((App) => (props) =>
                sheet.collectStyles(<App {...props} />)
            );
            const styleTags = sheet.getStyleElement();
            return { ...page, styleTags };
        } catch (e) {
            sheet.seal();
            throw e;
        }
    }

    render() {
        /*
       const sheet = new ServerStyleSheet()
       const main = sheet.collectStyles(<Main />)
       const styleTags = sheet.getStyleElement()
     */
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="renderer" content="webkit" />
                    <link rel="icon" href="/favicon.ico" />

                    {this.props.styleTags}
                </Head>
                {/* if the site is crashed the style here is ensure to work */}
                {/* overflowX: wide screnn the content will scroll little bit  */}
                <body id="body" style={{ margin: 0, overflowX: 'hidden' }}>
                    <Main />
                    <NextScript />
                </body>

                <noscript>
                    You need to enable JavaScript to get this website runing.
                </noscript>
            </Html>
        );
    }
}
