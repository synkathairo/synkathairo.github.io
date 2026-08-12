module Jekyll
  module NaturalSortFilter
    def sort_natural(input, property)
      input.sort_by { |item| item[property].to_s.downcase }
    end
  end
end

Liquid::Template.register_filter(Jekyll::NaturalSortFilter)
