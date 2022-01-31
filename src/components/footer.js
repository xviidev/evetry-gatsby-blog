import React from 'react'

import { useSiteMetadata } from '../hooks/use-site-metadata'

function Footer() {
  const { title } = useSiteMetadata()
  return (
    <footer className="bg-gray-100 mt-8 dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © {title} {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
