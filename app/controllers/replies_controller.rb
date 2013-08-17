post '/replies' do
	val = params['value']
  @reply = Reply.new(value: val)
  @reply.save ? 'true' : 'false'
end
