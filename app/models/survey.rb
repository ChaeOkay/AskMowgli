class Survey < ActiveRecord::Base
  belongs_to :user
  has_many :questions

  validates_presence_of :name, :user_id

  def stats
    @stats = []

    # a survey has many questions
      # a reply belongs to a queston and a user_id
          # a reply can be a response_choice

  # how many users have started the survey?
    # survey.questions.user_id.unique.count
    questions.where(users: {})
    #> Survey.joins(questions: :replies)

  # how many of those users have completed the survey?
    # show user_Id from survey questions where count(user_id) == number of questions
     # survey.questions.user_id where
      # user_id count is == number of questions

      # can a there be multiple replys where user_id and question_id are the same?

  # questions each
    # show question
    # show response value and # of people with same response
      # question.values.each => hash[value] += 1
  end

end
