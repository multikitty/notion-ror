@blocks.each do |block|
  json.set! block.id do
    json.extract! block, :id, :user_id, :page_id, :block_type, :image, :text, :checked, :expanded
    json.image url_for(block.photo) if (block.photo.attached?)
  end
end