export default {
  widgets: [
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
                  buildHookId: '610d8f204e6ed7fcea2d796f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1i972mmm',
                  apiId: '9d541d3a-4d0a-4582-b273-119168eb8c2d'
                },
                {
                  buildHookId: '610d8f20b5d12c09b55f6202',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cuj1ivg5',
                  apiId: '24954d03-1ecb-4bfd-98a3-e4d0162d387d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spanrucker/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cuj1ivg5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
