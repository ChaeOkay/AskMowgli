get '/questions/:question_id/replies/find_or_create' do
  @reply = Reply.where(:user_id => current_user.id, :question_id => params[:question_id])
  unless @reply.nil? || @reply.empty?
    erb :'replies/show', layout: false
  else  
    @reply = Reply.new
    @reply.question_id = params[:question_id]
    @reply.user_id = current_user.id
    erb :'replies/new', layout: false
  end
end

post '/replies' do
	val = params['value']
  @reply = Reply.new(value: val)
  @reply.save ? 'true' : 'false'
end
