class Survey < ActiveRecord::Base
  belongs_to :user
  has_many :questions

  validates_presence_of :name, :user_id

  def stats
    @stats = {}
    @stats[:started_survey] = started_survey
    @stats[:completed_survey] = completed_survey
    @stats[:questions_hist] = questions_hist
  end

  def users_per_question
    self.questions.map { |q| q.replies.pluck(:user_id) }
    #[[1, 2], [1, 2], [1]]   index is the question_id, sub_array represents user_id
  end

  def started_survey
    users_per_question.flatten.uniq.size
  end

  def completed_survey
    ct = Hash.new(0)
    users_per_question.flatten.each { |user| ct[user] +=1 }
    completed = ct.select {|user, count| count == users_per_question.size }.keys
    completed.size
  end

  def questions_hist
    ct = Hash.new(0)
    users_per_question.each_with_index { |users, index| ct[index] }
  end

end
