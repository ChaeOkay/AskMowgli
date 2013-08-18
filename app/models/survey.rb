class Survey < ActiveRecord::Base
  belongs_to :user
  has_many :questions
  has_many :replies, through: :questions

  validates_presence_of :name, :user_id

  def stats
    @stats = {}
    @stats[:started_survey] = started_survey
    @stats[:completed_survey] = completed_survey
    @stats[:questions_hist] = questions_hist
  end

  def users_in_survey
    self.replies.pluck(:user_id)
  end

  def started_survey
    users_in_survey.uniq.size
  end

  def completed_survey
    ct = Hash.new(0)
    users_in_survey.each { |user| ct[user] +=1 }
    completed = ct.select { |user, count| count == self.questions.size }.keys
    completed.size
  end

  def questions_hist
    ct = Hash.new(0)
    question_ids = self.replies.pluck(:question_id).uniq
    responses = replies.group_by {|id| id.is_a?(Fixnum)}
  end

end
