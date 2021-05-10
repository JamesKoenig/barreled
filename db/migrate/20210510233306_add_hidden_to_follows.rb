class AddHiddenToFollows < ActiveRecord::Migration[5.2]
  def change
    change_table :follows do |t|
      t.boolean :hidden, null: false, default: false
      t.index :hidden
    end
  end
end
