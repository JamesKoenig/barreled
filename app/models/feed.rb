class Feed < ApplicationRecord
  default_scope do
    order updated_at: :desc
  end

  def readonly?
    true
  end
end
