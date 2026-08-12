# [:pages, :documents].each do |owner|
#   Jekyll::Hooks.register owner, :post_render do |page|
#     page.output.gsub!(/(<math\b.*?<\/math>)/m) do |math|
#       math.gsub('&amp;', '&')
#     end
#   end
# end
