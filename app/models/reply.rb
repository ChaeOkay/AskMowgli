class Reply < ActiveRecord::Base
  belongs_to :question
  belongs_to :user
  validates_presence_of :value, :user_id, :question_id
end