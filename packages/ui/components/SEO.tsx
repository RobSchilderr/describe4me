// ui/components/SEO.tsx
import { FRONTEND_URL } from 'lib/utils/config'
import Head from 'next/head'
import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  const defaultTitle = 'describe4me'
  const defaultDescription = 'Generate your next description using chatGPT'
  const defaultImage = `${FRONTEND_URL}/screenshot.png`

  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const seoDescription = description || defaultDescription
  const seoImage = image || defaultImage

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Head>
  )
}

export default SEO
