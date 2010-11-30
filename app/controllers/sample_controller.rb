class SampleController < ApplicationController
  require "open-uri"
  
  def locate_me
    
  end
  def rss_feed
    @feed = FeedNormalizer::FeedNormalizer.parse open('http://tangosilentfilms.com/blog/?feed=rss2')
  end
end
