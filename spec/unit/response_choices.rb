require 'spec_helper'

describe ResponseChoice do
  describe "a new response choice" do

    it "should be valid" do
    end

    it "should not be valid" do
    end

    it "should belong to a question" do
      question = Question.create(
          question_type: 'multiple choice',
          description: 'what is your favorite color?',
          prompt: 'e.g., today I prefer red over blue, I will choose red' )
      r = Response.create(value: 'red')
      g = Response.create(value: 'green')
      b = Response.create(value: 'blue')

      question.responsechoices << r
      question.responsechoices << g
      question.responsechoices << b

      question.responsechoices.size.should == 3
      question.delete
      r.delete; g.delete; b.delete
    end

  end
end
