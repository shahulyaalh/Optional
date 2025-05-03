import { Helmet } from "react-helmet-async"

const SEOHead = ({ title, description, canonicalUrl, ogImage }) => {
  const siteName = "Stair Ecosystem"
  const siteUrl = "https://stairecosystem.com"

  const defaultTitle = "Solar Energy & CCTV Solutions"
  const defaultDesc =
    "Smart solar energy and CCTV security solutions for homes and businesses. Power your space sustainably and protect what matters most."
  const defaultImage = "/og-image.jpg"

  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - ${defaultTitle}`
  const metaDescription = description || defaultDesc
  const ogImg = ogImage || defaultImage
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImg}`} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={`${siteUrl}${ogImg}`} />
    </Helmet>
  )
}

export default SEOHead
