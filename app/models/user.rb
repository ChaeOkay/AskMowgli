require 'bcrypt'

class User < ActiveRecord::Base
  has_many :surveys
  has_many :responses

  validates :email, :name, presence: true
  validates :email, uniqueness: true

  include BCrypt

  def self.authenticate(email, password)
    user = find_by_email(email)
    user.password == password ? user : false
  end

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

end
