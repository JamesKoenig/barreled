class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    class_name: :Like

  has_many :likers,
    through: :likes,
    source: :user
end
