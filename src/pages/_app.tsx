import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { SEO } from '@/config';
import { DefaultSeo } from 'next-seo';

import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryCache = new QueryCache();

export default function App({ Component, pageProps }) {
    return (
        <>
            {/* see: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
            </Head>

            {/* see: https://react-query.tanstack.com/docs/guides/ssr */}
            <ReactQueryCacheProvider queryCache={queryCache}>
                <Hydrate state={pageProps.dehydratedState}>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <RecoilRoot>
                        <DefaultSeo {...SEO} />
                        <Component {...pageProps} />
                    </RecoilRoot>
                </Hydrate>
            </ReactQueryCacheProvider>
        </>
    );
}
