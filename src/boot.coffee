Vue = require('vue')
_ = require('lodash')
marked = require('marked')

app = new Vue
  el: '#editor'
  template: __inline('app.html')
  data:
    input: '# hello'
  computed:
    compiledMarkdown: ->
      marked @input, sanitize: true
  methods:
    update: _.debounce(((e) ->
      @input = e.target.value
      return
    ), 300)
