require 'httparty'
require 'yaml'
#p config["omdbapi"]["api-key"]

# config = YAML.load(File.read("credentials.yml"))

class JsonServer
  include HTTParty
  base_uri "my-json-server.typicode.com"

  def posts
    self.class.get('/typicode/demo/posts')
  end
end

json_server = JsonServer.new
# puts json_server.posts

json_server.posts.each do |post|
  puts "ID: #{post["id"]}, Title: #{post["title"]}"
end

# -----

# response = HTTParty.get("https://my-json-server.typicode.com/typicode/demo/posts")
# puts response.body
# puts response.code
# puts response.message
# puts response.headers.inspect

# -----

class StackExchange
  include HTTParty
  base_uri "api.stackexchange.com"

  def initialize(service, page)
    @options = { query: { site: service }}
  end

  def questions
    self.class.get('/2.2/questions', @options)
  end

  def users
    self.class.get('/2.2/users', @options)
  end
end

# stack_exchange = StackExchange.new('stackoverflow',1)

# puts stack_exchange.questions
# puts stack_exchange.users
