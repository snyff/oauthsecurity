class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.integer :user_id
      t.string :etype
      t.string :efile
      t.integer :eline
      t.integer :status

      t.timestamps
    end
  end
end
