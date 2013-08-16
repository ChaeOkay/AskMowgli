class CreateResponseChoices < ActiveRecord::Migration
  def change
    create_table :response_choices do |t|
      t.references :question
      t.string :value

      t.timestamps
    end
  end
end
