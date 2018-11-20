fis.set('project.files', ['src/**']);

fis.hook('commonjs', {
    baseUrl: 'src',
    paths: {
        'vue': '/node_modules/vue/dist/vue.js'
    }
});

// :dev
fis.match('/src/(**)', {
    release: '/dist/$1',
    url: '/dist/$1'
})
.match('/src/(**).js', {
    id: '$1',
    isMod: true
})
.match('/src/plugins/**.js', {
  isMod: false
})
.match('/(node_modules/**)', {
  release: '/dist/$1',
  url: '$1'
})
.match('/(node_modules/**.js)', {
  isMod: true,
  useSameNameRequire: false
})
.match('/node_modules/**.map', {
  release: false
})
.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true
    })
});

// :prod
fis
.media('prod')
.match('*.js', {
    packTo: '/dist/aio.js'
})
.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        resourcemapWhitespace: 0,
        useInlineMap: true
    })
});
