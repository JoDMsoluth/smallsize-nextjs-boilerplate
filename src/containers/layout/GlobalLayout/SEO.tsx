/*
 *
 * SEO for different pages
 *
 */

import React from 'react';
import { NextSeo, BlogJsonLd } from 'next-seo';

const SEO = (page, config) => {
    switch (page) {
        case 'post': {
            return (
                <BlogJsonLd
                    url={config.url}
                    title={config.title}
                    datePublished={config.datePublished}
                    dateModified={config.dateModified}
                    authorName={config.authorName}
                    description={config.description}
                    images={config.images}
                />
            );
        }

        default: {
            return (
                <NextSeo
                    title={config.title}
                    description={config.description}
                    openGraph={{
                        url: config.url,
                        title: config.title,
                        description: config.description,
                    }}
                    additionalMetaTags={[
                        {
                            name: 'keywords',
                            content: 'jodmsoluth,personal blog',
                        },
                    ]}
                />
            );
        }
    }
};

export default SEO;
