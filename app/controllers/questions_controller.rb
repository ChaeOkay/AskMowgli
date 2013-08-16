get '/survey/:survey_id/question/new' do
	@question = Question.new(params[question])
	@question.survey_id = params[:survey_id]
	erb :'questions/new', layout: false
end

post '/question' do 
	@question = Question.new(params[question])
	if @question.save
		redirect "/surveys/#{@question.survey_id}"
	else
		erb :'questions/new', :layout: false
	end
end