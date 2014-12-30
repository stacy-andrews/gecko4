#!/usr/bin/env puma

directory '/app'

environment 'production'
daemonize false

#pidfile '/var/pids/puma.pid'
#state_path '/var/pids/puma.state'

stdout_redirect '/app/log/puma.log', '/app/log/puma_err.log'

# quiet
threads 0, 16
bind 'unix:///var/run/puma.sock'

# ssl_bind '127.0.0.1', '9292', { key: path_to_key, cert: path_to_cert }

activate_control_app 'unix:///var/run/pumactl.sock'