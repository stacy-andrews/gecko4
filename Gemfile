source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.4'
# Use sqlite3 as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

gem 'bootstrap-sass', '~> 3.2.0.0'
gem 'angularjs-rails'
gem 'angular-ui-bootstrap-rails'
gem 'angular-rails-templates'
gem 'lodash-rails', '~> 2.4.1'
gem 'font-awesome-sass-rails', '~> 3.0.2.2'

gem 'puma'

gem 'bootstrap-generators', '~> 3.1.1.3'

# Gemfile
gem 'rabl'
# Also add either `oj` or `yajl-ruby` as the JSON parser
gem 'oj'

group :development do
  gem 'spring'

  # gem 'thin'
  gem 'delorean'

  # need by guard to detect changes on os x
  gem 'rb-fsevent', :require => false # if RUBY_PLATFORM =~ /darwin/i
  gem 'guard-minitest'
  gem 'guard-livereload'

  gem 'jasmine'
  gem 'guard-jasmine'
  gem 'sinon-rails'
  gem 'factory_girl_rails'
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0'
end
