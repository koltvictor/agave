class ProductSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :description
  has_one :user
end
