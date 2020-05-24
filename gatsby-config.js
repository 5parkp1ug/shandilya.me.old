/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require(`dotenv`).config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `<as/>`,
    description: `Abhishek Shandilya, A full stack engineer who likes to fiddle with anything tech related.`,
    siteUrl: process.env.SITE_URL || `http://localhost`,
    startUrl: `/`,
    copyright: `© YYYY Abhishek Shandilya. All rights reserved.`,
    icon: `src/images/icon.png`,
    color: `#3C64F1`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      }
    ],
    socialLinks: [

      {
        name: `Github`,
        url: `http://github.com/5parkp1ug/`,
        icon: `github`,
      },
      {
        name: `StackOverflow`,
        url: `https://stackoverflow.com/users/7693825/5parkp1ug/`,
        icon: `code`,
      },
      {
        name: `Facebook`,
        url: `https://www.facebook.com/5parkp1ug/`,
        icon: `facebook`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/im5parkp1ug/`,
        icon: `instagram`,
      }
    ],
  },
  plugins: [
    `@arshad/gatsby-theme-blog-core`,
    `@arshad/gatsby-theme-page-core`,
    `@arshad/gatsby-theme-phoenix`,
  ],
}
