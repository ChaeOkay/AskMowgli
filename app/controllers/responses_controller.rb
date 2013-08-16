post '/responses' do
  @response = Response.new(params['response'])
  @response.save ? 'true' : 'false'
end
