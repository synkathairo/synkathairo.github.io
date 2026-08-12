# # This is a (more) sane math parsing scheme.
# # https://gist.github.com/stevecheckoway/aa110671b8af5a090a5f38d1af6fd0a2
# require 'kramdown/parser/kramdown'
# require 'kramdown/parser/kramdown/block_boundary'
# require 'kramdown-parser-gfm'
# require 'kramdown-math-itex2mml'

# module Kramdown
#   module Parser
#     class Skramdown < Kramdown::Parser::GFM
#       def initialize(source, options)
#         super
#         idx = @span_parsers.index(:inline_math)
#         @span_parsers[idx] = :sane_inline_math
#         @span_parsers.insert(idx, :sane_display_math)
#       end

#       # (?<!\\|\$)  Isn't preceded by a backslash or a dollar sign
#       # \$          Dollar sign
#       # (?!\$)      Isn't followed by a dollar sign
#       # (.*?)       Nongreedy match
#       # (?<!\\|\$)  Isn't preceded by a backslash or a dollar sign
#       # \$          Dollar sign
#       # (?!\$)      Isn't followed by a dollar sign
#       # |           Or
#       # (?<!\\)     Not a backslash
#       # \\\(        Backslash, open parenthesis
#       # (.*?)       Nongreedy match
#       # (?<!\\)     Isn't preceded by a backslash
#       # \\\)        Backslash, close parenthesis
#       SANE_INLINE_MATH_START = /(?<!\\|\$)\$(?!\$)(.*?)(?<!\\|\$)\$(?!\$)|(?<!\\)\\\((.*?)(?<!\\)\\\)/m

#       def parse_sane_inline_math
#         start_line_number = @src.current_line_number
#         @src.pos += @src.matched_size
#         data = (@src[1] || @src[2]).strip
#         data = data.gsub('>', '\gt').gsub('<', '\lt').gsub('…', '\ldots')
#         @tree.children << Element.new(:math, data, nil, :category => :span, :location => start_line_number)
#       end
#       define_parser(:sane_inline_math, SANE_INLINE_MATH_START, '\\$|\\\\\\(')

#       SANE_DISPLAY_MATH_START = /(?<!\\)\$\$(.*?)\$\$/m

#       def parse_sane_display_math
#         start_line_number = @src.current_line_number
#         @src.pos += @src.matched_size
#         data = (@src[1] || @src[2]).strip
#         data = data.gsub('>', '\gt').gsub('<', '\lt').gsub('…', '\ldots')
#         @tree.children << Element.new(:math, data, nil, :category => :block, :location => start_line_number)
#       end
#       define_parser(:sane_display_math, SANE_DISPLAY_MATH_START, '\\$\\$')
#     end
#   end
# end

# # vim: set sw=2 sts=2 ts=8 et:
