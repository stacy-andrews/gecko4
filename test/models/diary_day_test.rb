require 'test_helper'
require 'delorean'

class DiaryDayTest < ActiveSupport::TestCase
  test "can add a measurement to a diary day" do
  	diary_day_date = Date.parse('2014-01-01')

    diary_day = DiaryDay.new(date: diary_day_date, is_work_day: true)

    diary_day.measurements = Measurements.new(chest: 10, stomach: 20, thigh:30)
    
    diary_day.save

    measurements = Measurements.find_by(chest: 10, stomach: 20, thigh:30)

    assert_equal 10, measurements.chest
    assert_equal 20, measurements.stomach
    assert_equal 30, measurements.thigh
  end

  test "can retrieve a measurement from a diary day" do
  	
  end
end
