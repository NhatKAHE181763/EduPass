# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_06_08_022731) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.text "body"
    t.datetime "created_at", null: false
    t.string "name", null: false
    t.bigint "record_id", null: false
    t.string "record_type", null: false
    t.datetime "updated_at", null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.string "name", null: false
    t.bigint "record_id", null: false
    t.string "record_type", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.string "content_type"
    t.datetime "created_at", null: false
    t.string "filename", null: false
    t.string "key", null: false
    t.text "metadata"
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "answers", force: :cascade do |t|
    t.text "content"
    t.datetime "created_at", null: false
    t.text "explanation"
    t.boolean "is_correct", default: false
    t.string "match_key"
    t.bigint "question_id", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "courses", force: :cascade do |t|
    t.integer "course_type"
    t.datetime "created_at", null: false
    t.bigint "created_by_id", null: false
    t.text "description"
    t.boolean "is_premium"
    t.integer "level"
    t.string "slug"
    t.string "title"
    t.datetime "updated_at", null: false
    t.index ["created_by_id"], name: "index_courses_on_created_by_id"
    t.index ["slug"], name: "index_courses_on_slug", unique: true
  end

  create_table "exam_attempts", force: :cascade do |t|
    t.integer "actual_duration_seconds"
    t.integer "correct_count"
    t.datetime "created_at", null: false
    t.bigint "exam_id", null: false
    t.decimal "score", precision: 5, scale: 2
    t.datetime "started_at"
    t.integer "status"
    t.datetime "submitted_at"
    t.integer "total_questions"
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["exam_id"], name: "index_exam_attempts_on_exam_id"
    t.index ["user_id"], name: "index_exam_attempts_on_user_id"
  end

  create_table "exam_plans", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.date "exam_date"
    t.integer "exam_type"
    t.boolean "is_active", default: true, null: false
    t.text "notes"
    t.string "plan_name"
    t.decimal "target_score", precision: 4, scale: 1
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_exam_plans_on_user_id"
  end

  create_table "exams", force: :cascade do |t|
    t.bigint "course_id", null: false
    t.datetime "created_at", null: false
    t.bigint "created_by_id", null: false
    t.integer "duration_minutes"
    t.string "slug"
    t.integer "status"
    t.string "title"
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_exams_on_course_id"
    t.index ["created_by_id"], name: "index_exams_on_created_by_id"
    t.index ["slug"], name: "index_exams_on_slug", unique: true
  end

  create_table "matching_pairs", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.text "explanation"
    t.string "left_content"
    t.integer "order_index"
    t.bigint "question_id", null: false
    t.string "right_content"
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_matching_pairs_on_question_id"
  end

  create_table "questions", force: :cascade do |t|
    t.boolean "allow_multiple", default: false
    t.text "content"
    t.datetime "created_at", null: false
    t.text "explanation"
    t.integer "order_index"
    t.integer "question_type"
    t.bigint "section_id", null: false
    t.datetime "updated_at", null: false
    t.index ["section_id"], name: "index_questions_on_section_id"
  end

  create_table "sections", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "exam_id", null: false
    t.string "instruction"
    t.integer "order_index"
    t.integer "section_type"
    t.string "title"
    t.datetime "updated_at", null: false
    t.index ["exam_id"], name: "index_sections_on_exam_id"
  end

  create_table "study_activities", force: :cascade do |t|
    t.date "activity_date"
    t.datetime "created_at", null: false
    t.integer "exam_attempts_count", default: 0
    t.integer "total_duration_seconds", default: 0
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id", "activity_date"], name: "index_study_activities_on_user_id_and_activity_date", unique: true
    t.index ["user_id"], name: "index_study_activities_on_user_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "tag_id", null: false
    t.bigint "taggable_id", null: false
    t.string "taggable_type", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
    t.index ["taggable_type", "taggable_id"], name: "index_taggings_on_taggable"
  end

  create_table "tags", force: :cascade do |t|
    t.integer "category"
    t.string "color"
    t.datetime "created_at", null: false
    t.string "name"
    t.string "slug"
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_tags_on_slug", unique: true
  end

  create_table "user_answers", force: :cascade do |t|
    t.bigint "answer_id", null: false
    t.datetime "created_at", null: false
    t.bigint "exam_attempt_id", null: false
    t.boolean "is_correct"
    t.jsonb "matched_pairs"
    t.bigint "question_id", null: false
    t.string "text_answer"
    t.datetime "updated_at", null: false
    t.index ["answer_id"], name: "index_user_answers_on_answer_id"
    t.index ["exam_attempt_id"], name: "index_user_answers_on_exam_attempt_id"
    t.index ["question_id"], name: "index_user_answers_on_question_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "confirmation_sent_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "created_at", null: false
    t.datetime "deleted_at"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "full_name"
    t.string "jti", null: false
    t.string "provider"
    t.datetime "remember_created_at"
    t.datetime "reset_password_sent_at"
    t.string "reset_password_token"
    t.integer "role", default: 1
    t.string "uid"
    t.string "unconfirmed_email"
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "answers", "questions"
  add_foreign_key "courses", "users", column: "created_by_id"
  add_foreign_key "exam_attempts", "exams"
  add_foreign_key "exam_attempts", "users"
  add_foreign_key "exam_plans", "users"
  add_foreign_key "exams", "courses"
  add_foreign_key "exams", "users", column: "created_by_id"
  add_foreign_key "matching_pairs", "questions"
  add_foreign_key "questions", "sections"
  add_foreign_key "sections", "exams"
  add_foreign_key "study_activities", "users"
  add_foreign_key "taggings", "tags"
  add_foreign_key "user_answers", "answers"
  add_foreign_key "user_answers", "exam_attempts"
  add_foreign_key "user_answers", "questions"
end
