class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.references :survey
      t.string :question_type
      t.string :description
      t.string :prompt

      t.timestamps
    end
  end
end
