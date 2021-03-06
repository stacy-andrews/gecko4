# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150218232817) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "catalogue_foods", force: true do |t|
    t.string   "description"
    t.decimal  "unit_energy"
    t.decimal  "carbohydrate"
    t.decimal  "protein"
    t.decimal  "fat"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "caffeine"
  end

  create_table "diary_days", force: true do |t|
    t.date     "date"
    t.boolean  "is_work_day"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "exercises", force: true do |t|
    t.time     "start_time"
    t.decimal  "energy"
    t.decimal  "duration"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "diary_day_id"
  end

  create_table "foods", force: true do |t|
    t.time     "start_time"
    t.decimal  "unit_energy"
    t.decimal  "quantity"
    t.decimal  "carbohydrate"
    t.decimal  "fat"
    t.decimal  "protein"
    t.string   "description"
    t.string   "section"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "diary_day_id"
    t.integer  "caffeine"
  end

  create_table "measurements", force: true do |t|
    t.decimal  "chest"
    t.decimal  "stomach"
    t.decimal  "thigh"
    t.integer  "diary_day_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "notes", force: true do |t|
    t.string   "comment"
    t.string   "section"
    t.time     "start_time"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "diary_day_id"
  end

  create_table "user_settings", force: true do |t|
    t.decimal  "resting_metabolic_rate"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
