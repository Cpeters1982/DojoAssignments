require "stringer/version"

module Stringer
  # Your code goes here...
  def self.spacify *strings
    string = ""
    strings.each do |s|
        string += " " unless string.length === 0
        string += s
    end
    string
  end

  def self.minify string, max_length
    if string.length <= max_length
      return string
    else
      return string[0...max_length] + "..."
    end
  end

  def self.replacify string, to_replace, replacement
    result = string.gsub!(to_replace, replacement)
    unless result != nil
      string
    else
      result
    end
  end

  def self.tokenize string
    result = []
    current = ""

    arr = string.split("")

    arr.each_index {|i|
      if string[i].match(/^[[:alpha:]]+$/)
        current += string[i]
        if string[i+1] == nil || !string[i+1].match(/^[[:alpha:]]+$/)
          result.push(current)
          current = ""
        end
      else
        current = ""
      end
    }
    return result
  end

  def self.removify string, to_remove
    string.gsub!(to_remove, "")
    string.split.join(" ")
  end




end
