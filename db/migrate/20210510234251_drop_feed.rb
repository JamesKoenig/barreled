class DropFeed < ActiveRecord::Migration[5.2]
  def change
    drop_view :feeds
    drop_view :notifications
  end
end
