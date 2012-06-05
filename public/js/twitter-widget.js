new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 10,
  interval: 30000,
  width: 'auto',
  height: 500,
  theme: {
    shell: {
      background: '#333',
      color: '#ffffff'
    },
    tweets: {
      background: '#ffffff',
      color: '#000333',
      links: '#08c'
    }
  },
  features: {
    scrollbar: true,
    loop: false,
    live: true,
    behavior: 'all'
  }
}).render().setUser('cacciatc').start();
