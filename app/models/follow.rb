class Follow < ApplicationRecord
  validates :follower_id, :followed_id, presence: true
  validates :hidden, default: false
  validates_uniqueness_of :follower_id, scope: :followed_id

  belongs_to :follower,
    class_name: :User

  belongs_to :followed,
    class_name: :User
end
