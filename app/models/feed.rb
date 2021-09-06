class Feed < ApplicationRecord
  default_scope do
    order created_at: :desc
  end

  def readonly?
    true
  end
end
