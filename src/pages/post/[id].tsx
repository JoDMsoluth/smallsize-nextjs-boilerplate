import Head from 'next/head';
import GlobalLayout from '@/containers/layout/GlobalLayout';

import { SITE_URL, SITE_NAME, SITE_DESC } from '@/config';
import { ERR, ROUTE } from 'utils/constant';
import { buildLog } from 'utils';
import { QueryCache, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { getPost } from '@/services';

/* eslint-disable-next-line */
const log = buildLog('page:home');

export default function Post() {
    const seoConfig = {
        url: `${SITE_URL}/post`,
        title: `${SITE_NAME}`,
        description: `${SITE_DESC}`,
    };

    const { data } = useQuery('posts', getPost);

    return (
        <GlobalLayout
            page={ROUTE.POST}
            seoConfig={seoConfig}
            errorCode={!data && ERR.NOT_FOUND}
        >
            <div>
                <Head>
                    <title>Post Title</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main></main>

                <footer></footer>
            </div>
        </GlobalLayout>
    );
}

export const getServerSideProps = async () => {
    const queryCache = new QueryCache();

    await queryCache.prefetchQuery('post', getPost);

    return {
        props: {
            dehydratedState: dehydrate(queryCache),
        },
    };
};
