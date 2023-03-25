import type { NextPage } from 'next'
import Home from 'ui/containers/Home/Home'
import React from 'react'
import SEO from 'ui/components/SEO'

const HomePage: NextPage = () => (
  <>
    <SEO />
    <Home />
  </>
)
export default HomePage
