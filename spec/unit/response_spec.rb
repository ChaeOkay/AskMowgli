require 'spec_helper'

describe Response do
  describe "a new response" do

    it "should be valid" do
      response = Response.create(value: 'blue')
      response.should be_valid
      response.delete
    end

    it "should not be valid" do
    end

    it "should belong to a question" do
      question = Question.create(
          question_type: 'multiple choice',
          description: 'what is your favorite color?',
          prompt: 'e.g., today I prefer red over blue, I will choose red' )
      vermilion = Response.create(value: 'my favorite color today is vermilion')
      question.responses << vermilion

      question.responses.should == vermilion.value
      question.delete
      vermilion.delete
    end

    it "should belong to a user" do
      user = User.create(name: "user1", email: 'user@user.com', password: 'password')
      user.responses.should be_empty
      user.delete
    end

  end
end
