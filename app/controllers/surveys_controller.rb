get '/surveys' do
	@surveys = Survey.all
	erb :'surveys/index'
end

post '/surveys' do
	@survey = Survey.new(params[survey])
	@survey.user_id = current_user.id
	if @survey.save
		redirect "/surveys/#{@survey.id}"
	else
		erb :'surveys/new'
	end
end

get '/surveys/:id' do
	@survey = Survey.find(params[:id])
	erb :'surveys/show'
end

get '/users/:user_id/surveys' do
	@surveys = Survey.where(:user_id => params[:user_id])
	erb :'surveys/index'
end
