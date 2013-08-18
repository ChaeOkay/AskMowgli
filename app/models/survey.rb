class Survey < ActiveRecord::Base
  belongs_to :user
  has_many :questions

  validates_presence_of :name, :user_id

  def stats
  end

end
