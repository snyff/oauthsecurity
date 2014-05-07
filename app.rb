require 'rubygems'
require 'sinatra'

get '/' do
  File.open('a.html')
end