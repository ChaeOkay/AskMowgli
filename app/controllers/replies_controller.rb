get '/questions/:question_id/replies/find_or_create' do
  @reply = Reply.where(:user_id => current_user.id, :question_id => params[:question_id]).first
  unless @reply.nil?
    erb :'replies/new', layout: false
  else  
    @reply = Reply.new
    @reply.question_id = params[:question_id]
    @reply.user_id = current_user.id
    erb :'replies/new', layout: false
  end
end

post '/replies' do
  @reply = Reply.new(params['reply'])
  @reply.save ? '#'+@reply.question_id.to_s : 'false'
end
