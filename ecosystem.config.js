module.exports = {
  apps : [{
    name: 'longdong',
    script: './node_modules/nuxt-start/bin/nuxt-start.js',
    instances: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    port: 3001
  }]
}
