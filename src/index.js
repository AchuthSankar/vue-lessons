(($, Vue, Vuex) => {

  function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

  const store = new Vuex.Store({
  state: {
    message: 'Anonymous'
  },
  mutations: {
    setMessage (state, message) {
      state.message = message
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    }
  }
})

  $(document).ready(() => {
    let components = ['component1', 'component2']

    for (var i = 0; i < 200; i++) {
      components.push('component1')
    }

    components.forEach((componentName) => {
      $.getScript('./src/components/' + componentName + '/bundle.js', (data, textStatus, jqxhr) => {
        let compid = componentName + '_' + uuidv4()
        let $component = $('<div></div>')
        $component.attr('id', compid)
        $('#main').append($component)
        let component = window[componentName]
        console.log(component)
        new Vue({
          el: '#' + compid,
          store,
          render: h => h(component)
        })
      })
    })
  })
})($, Vue, Vuex)
