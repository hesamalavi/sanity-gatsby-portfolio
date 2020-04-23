export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea1467c6b6b8511db41989e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7129zd2i',
                  apiId: 'f024317c-cf2d-4b94-9d57-462b3dda22d2'
                },
                {
                  buildHookId: '5ea1467cde7904e2795909a8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5fiqj73n',
                  apiId: 'fc0b4b31-f8d7-431f-832e-acfcc41d0676'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hesamalavi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5fiqj73n.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
