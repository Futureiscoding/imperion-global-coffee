import Head from "next/head";
import { useRouter } from "next/compat/router";

const SITE_NAME = "Imperion Global Holdings";
const SITE_URL = "https://imperionglobalholdings.co.ke";

export default function Seo({
  title,
  description,
  keywords,
  image = "/logo.png",
  imageAlt = `${SITE_NAME} logo`,
  type = "website",
  noIndex = false,
  structuredData,
}) {
  const router = useRouter();
  const currentPath = router?.asPath ? router.asPath.split("?")[0] : "";
  const canonicalUrl = `${SITE_URL}${currentPath && currentPath !== "/" ? currentPath : ""}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large"} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
      <meta name="twitter:image:alt" content={imageAlt} />
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : null}
    </Head>
  );
}
