const title = 'jodsol';
const description = "jodmsoluth's personal blog.";

const SEO = {
    title,
    description,
    // canonical: 'https://jodsol.io',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://jodsol.io',
        title,
        description,
        images: [
            {
                url: 'https://jodsol.io/favicon.ico',
                alt: title,
                width: 1200,
                height: 700,
            },
        ],
    },

    /*
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  */
};

export default SEO;
