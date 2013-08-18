class ResponseChoice < ActiveRecord::Base
  belongs_to :question
  validates_presence_of :value, :question_id
  validates_uniqueness_of :value
end
