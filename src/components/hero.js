import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'



const Hero = ({ image, title, content }) => (
  <div className="flex items-end my-0 mx-auto max-w-7xl min-h-min pb-6 relative lg:mt-5">
    {image && (
      <GatsbyImage className="h-heroImage max-h-560px w-full lg:w-85perc lg:ml-auto" alt={title} image={image} />
    )}
    <div className="bg-white absolute left-0 max-w-screen-sm md:max-w-screen-md  w-85perc p-3 pt-7 pl-5">
      <h1 className="text-5xl font-extrabold mb-5">{title}</h1>
      {content && <p className="text-xl font-semibold text-gray-800">{content}</p>}
    </div>
  </div>
)


export default Hero
