class Question < ActiveRecord::Base
  belongs_to :survey
  has_many :responses
  has_many :response_choices
  validates_presence_of :question_type, :description, :prompt
end
