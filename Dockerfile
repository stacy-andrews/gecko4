FROM dockerfile/ruby
MAINTAINER peepable

RUN \
  gem install foreman

# puma dependency
RUN \
  apt-get update && \
  apt-get install -y libssl-dev && \
  apt-get install -y libpq-dev && \
  apt-get install -y nodejs && \
  rm -rf /var/lib/apt/lists/*

# latest stable nginx
RUN \
  add-apt-repository -y ppa:nginx/stable && \
  apt-get update && \
  apt-get install -y nginx && \
  rm -rf /var/lib/apt/lists/* && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
  chown -R www-data:www-data /var/lib/nginx
  
# nginx puma config
RUN rm -f /etc/nginx/sites-enabled/default
ADD nginx.conf /etc/nginx/sites-enabled/gecko4

WORKDIR /app
ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock

RUN \
  bundle install

ADD . /app

ENV RAILS_ENV production
ENV SECRET_KEY_BASE abcdef12345


CMD foreman start -f Procfile

EXPOSE 80
