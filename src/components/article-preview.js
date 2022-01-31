import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <React.Fragment key={post.slug}>

              <li className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <GatsbyImage
                  className="object-cover w-full h-48"
                  alt=""
                  image={post.heroImage.gatsbyImageData}
                />

                <div className="p-6">
                  <div>
                    <Tags tags={post.tags} />

                    <Link
                      to={`/blog/${post.slug}`}
                      className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
                    >
                      {post.title}
                    </Link>

                    <p
                      className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                      dangerouslySetInnerHTML={{
                        __html: post.description.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <GatsbyImage
                          className="object-cover h-10 w-10 rounded-full"
                          alt=""
                          image={post.author.image.gatsbyImageData}
                        />
                        <a
                          href="/"
                          className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                        >
                          {post.author.name}
                        </a>
                      </div>
                      <span className="mx-1 text-xs text-gray-600 text-uppercase dark:text-gray-300">
                        {post.publishDate}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </React.Fragment>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
