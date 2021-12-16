@blocks.each do |block|
  json.set! block.id do
    json.extract! block, :id, :user_id, :page_id, :block_type, :text, :image_url, :image_caption, :checked, :expanded, :toggle_inner_text, :link_page_id, :format, :icon
    json.image_url url_for(block.photo) if (block.photo.attached?)
  end
end