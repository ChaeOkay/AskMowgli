post '/responses' do
  @response = Response.new(params['response'])

  if @response.save
    'true'
  else
    'false'
  end

end
