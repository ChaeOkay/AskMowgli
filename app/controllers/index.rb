# a lot of the routes are post requests, which is fine
# but when a validation fails, it rerenders the partial
# in a way that I can't refresh

# if I submit an empty reply, a page renders showing the word "false"
# routes can't break like this
# again, thne when I refresh, it cant handle a get on that route

# on survey creation, when I submit an empty survey the front end validation
# doesn't work. It redirects to a partial, where then the validation work, but there
# it doesn't have its own 

# /questions is a route I'm directed to for a post, but when I refresh,
# then the app breaks. sinatra cant handle a get on /questions

# overall, the code written is very clean and I love it, but the route's are very brittle
# when it comes to edge cases. make sure solid routing and back end validation are in place
# before adding any front end validations


get '/' do
	erb :index
end
