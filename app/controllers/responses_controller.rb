post '/responses' do
	val = params['value']
  @response = Response.new(value: val)
  @response.save ? 'true' : 'false'
end
