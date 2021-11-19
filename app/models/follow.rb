class Follow < ApplicationRecord
  validates :follower_id, :followed_id, presence: true
  validates :hidden, default: false
  validates_uniqueness_of :follower_id, scope: :followed_id

  belongs_to :follower,
    class_name: :User

  belongs_to :followed,
    class_name: :User

  def destroy
    # this is almost exactly the same as the version at line 15 of the like.rb
    #   model, should probably abstract this with a block if it's ever needed
    #   again.
    res = true

    if persisted?
      res = self.class._delete_record( \
        follower_id: self.follower_id, followed_id: self.followed_id) > 0
    end

    if res
      @destroyed = true
      freeze
    end

    return res
  end
end
