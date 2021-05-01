module.exports = {
  apps : [{
    args: 'start',
    name: 'longdong',
    script: './node_modules/nuxt/bin/nuxt.js',
    instances: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    port: 3001
  }]
}
