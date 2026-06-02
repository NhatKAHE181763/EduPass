# EduPass – Hướng dẫn Dự án

> Nền tảng luyện thi IELTS/TOEIC — Ruby on Rails 8 MVC · 25 ngày · 196 giờ

---

## Mục lục

1. [Tổng quan](#1-tổng-quan)
2. [Tech Stack](#2-tech-stack)
3. [Kiến trúc & Database Schema](#3-kiến-trúc--database-schema)
4. [Modules & Features](#4-modules--features)
5. [Kế hoạch 25 ngày](#5-kế-hoạch-25-ngày)
6. [Hướng dẫn Setup & Deployment](#6-hướng-dẫn-setup--deployment)

---

## 1. Tổng quan

EduPass là nền tảng luyện thi IELTS/TOEIC với các tính năng chính:

- **Trải nghiệm làm bài**: giao diện split-screen, đếm ngược, 3 dạng câu hỏi, chấm điểm tự động
- **Học sâu khi làm bài**: highlight văn bản, ghi chú, bookmark, tra từ điển inline
- **Listening section**: audio player tùy chỉnh với đầy đủ điều khiển
- **Admin & nội dung**: quản lý khóa học, đề thi, drag-drop, hệ thống tag
- **Tài khoản & cá nhân hóa**: OAuth, phân quyền, dashboard, heatmap hoạt động, kế hoạch thi
- **Thanh toán & kỹ thuật**: Stripe Premium, bảo mật, testing, CI/CD

---

## 2. Tech Stack

### Core

| Thành phần | Công nghệ | Phiên bản |
|---|---|---|
| Framework | Ruby on Rails | 8.1.3 |
| Language | Ruby | 3.3.5 |
| Database | PostgreSQL | 15.x |

### Gems chính

| Nhóm | Gem | Mục đích |
|---|---|---|
| Auth | devise + devise-jwt | Session, JWT httpOnly cookie |
| Auth | omniauth-google-oauth2 | Đăng nhập Google |
| Authorization | pundit | Policy-based access control |
| File Upload | cloudinary + activestorage-cloudinary-service | Ảnh, audio MP3 |
| Rich Text | actiontext (built-in) | Trix editor cho passage |
| Background Jobs | Solid Queue + Solid Cache | Email, reminder jobs |
| Scheduler | (gem cron) | Weekly/daily scheduled jobs |
| Payment | stripe | Thanh toán subscription |
| Search | ransack | Tìm kiếm + filter URL |
| Pagination | kaminari | Phân trang |
| Soft Delete | discard | Xóa mềm (deleted_at) |
| Security | brakeman | Static security scan |
| Performance | bullet | Phát hiện N+1 query |
| Testing | rspec-rails + factory_bot + shoulda-matchers + capybara | Unit + System tests |
| Linting | rubocop-rails | Code style |
| Dev Email | letter_opener | Preview email trong browser |
| ENV | dotenv-rails | Quản lý biến môi trường |
| Monitoring | PgHero | PostgreSQL performance |

### Frontend

| Thư viện | Mục đích |
|---|---|
| Bootstrap 5 | CSS framework |
| Stimulus (Hotwire) | JS interactions nhẹ |
| Turbo (Hotwire) | Navigation + Turbo Streams |
| SortableJS | Drag-drop sắp xếp sections/questions |
| Chart.js | Biểu đồ dashboard |
| cal-heatmap | Heatmap hoạt động kiểu GitHub |
| Choices.js | Multi-select cho tag filter |

### External API

| Service | Mục đích |
|---|---|
| dictionaryapi.dev | Tra từ điển miễn phí |
| Cloudinary | Cloud media storage |
| Stripe | Payment gateway |
| SendGrid/Mailgun | Production email SMTP |

### DevOps

| Công cụ | Mục đích |
|---|---|
| Docker + docker-compose | Containerization |
| GitHub Actions | CI/CD: lint + test |
| Heroku/Render | Deployment platform |

---

## 3. Kiến trúc & Database Schema

### Sơ đồ quan hệ tóm tắt

```
users ──< courses ──< exams ──< sections ──< questions ──< answers
                                                        └──< matching_pairs
users ──< exam_attempts ──< user_answers
                        └──< notes
                        └──< question_bookmarks
users ──< exam_plans
users ──< study_activities
users ──< saved_words
users ──< subscriptions ──< orders
exams ──< comments (polymorphic) ──< comment_likes
tags ──< taggings (polymorphic → exams, sections)
```

### Bảng dữ liệu

#### users
| Column | Type | Ghi chú |
|---|---|---|
| email | string NOT NULL | Unique |
| encrypted_password | string | Devise bcrypt |
| full_name | string NOT NULL | |
| bio | text | |
| role | integer enum | 0=student, 1=teacher, 2=admin |
| jti | string NOT NULL | JWT token revocation (unique index) |
| provider / uid | string | OAuth (google_oauth2) |
| confirmed_at | datetime | Devise confirmable |
| deleted_at | datetime | Soft delete (Discard) |

#### courses
| Column | Type | Ghi chú |
|---|---|---|
| title | string NOT NULL | |
| slug | string NOT NULL | Unique, SEO URL |
| course_type | integer enum | 0=ielts, 1=toeic, 2=other |
| level | integer enum | 0=beginner, 1=intermediate, 2=advanced |
| is_premium | boolean | Default false |
| created_by_id | FK→users | |

#### exams
| Column | Type | Ghi chú |
|---|---|---|
| title | string NOT NULL | |
| slug | string NOT NULL | Unique |
| course_id | FK→courses | |
| status | integer enum | 0=draft, 1=published |
| duration_minutes | integer | Thời gian giới hạn |
| created_by_id | FK→users | |

#### sections
| Column | Type | Ghi chú |
|---|---|---|
| exam_id | FK→exams | |
| section_type | integer enum | 0=reading, 1=listening |
| title | string NOT NULL | |
| order_index | integer | Drag-drop ordering |
| [passage] | ActionText | Rich text passage |
| [audio_file] | ActiveStorage | MP3 via Cloudinary |

#### questions
| Column | Type | Ghi chú |
|---|---|---|
| section_id | FK→sections | |
| question_type | integer enum | 0=multiple_choice, 1=fill_blank, 2=matching |
| content | text NOT NULL | Question stem |
| explanation | text | Giải thích chung |
| allow_multiple | boolean | Multiple correct answers |
| order_index | integer | |

#### answers
| Column | Type | Ghi chú |
|---|---|---|
| question_id | FK→questions | |
| content | text NOT NULL | |
| is_correct | boolean | |
| match_key | string | Dùng cho matching type |
| explanation | text | Tại sao đúng/sai |

#### matching_pairs
| Column | Type | Ghi chú |
|---|---|---|
| question_id | FK→questions | |
| left_content / right_content | string | Cặp ghép đôi |
| explanation | text | |
| order_index | integer | |

#### exam_attempts
| Column | Type | Ghi chú |
|---|---|---|
| user_id | FK→users | Index |
| exam_id | FK→exams | Index |
| status | integer enum | 0=in_progress, 1=submitted, 2=timed_out |
| score | decimal(5,2) | Sau khi chấm |
| total_questions / correct_count | integer | |
| started_at / submitted_at | datetime | |
| actual_duration_seconds | integer | submitted_at - started_at |

#### user_answers
| Column | Type | Ghi chú |
|---|---|---|
| exam_attempt_id | FK→exam_attempts | Index |
| question_id | FK→questions | Index |
| answer_id | FK→answers | nullable, cho multiple_choice |
| text_answer | string | nullable, cho fill_blank |
| matched_pairs | jsonb | nullable, cho matching: {left_id: right_id} |
| is_correct | boolean | Set sau grading |

#### notes (highlight & ghi chú)
| Column | Type | Ghi chú |
|---|---|---|
| exam_attempt_id | FK→exam_attempts | |
| section_id | FK→sections | |
| start_offset / end_offset | integer | Character offset trong passage |
| selected_text | string | Text gốc để re-render |
| content | text | nullable = highlight only |
| color | string | yellow / green / pink |

#### question_bookmarks
| Column | Ghi chú |
|---|---|
| exam_attempt_id + question_id | Unique constraint |

#### tags & taggings
```
tags: name, slug (unique), category (skill/part/question_type/topic/level/exam_type), color
taggings: tag_id, taggable_type, taggable_id  → polymorphic (Exam hoặc Section)
```

#### comments
| Column | Ghi chú |
|---|---|
| commentable_type/id | Polymorphic |
| parent_id | null = top-level |
| is_pinned / pinned_by_id / pinned_at | Pin feature |
| is_deleted | Soft delete |

#### subscriptions & orders
```
subscriptions: user_id, plan (monthly/quarterly/yearly), started_at, expired_at,
               status (active/expired/cancelled), stripe_subscription_id
orders:        user_id, subscription_id, amount decimal(10,2), currency,
               payment_method (stripe), payment_status (pending/paid/failed/refunded),
               transaction_id (Stripe payment_intent ID)
```

#### exam_plans
```
user_id, plan_name, exam_type (ielts_academic/ielts_general/toeic),
target_score decimal(4,1), exam_date date, is_active boolean
```

#### study_activities
```
user_id + activity_date (unique), exam_attempts_count, total_duration_seconds
```

#### saved_words
```
user_id + word (unique), phonetic (IPA), definitions (jsonb), source_exam_id
```

---

## 4. Modules & Features

### Module 1–3: Setup, Auth, Authorization (Days 1–3)

**Project Setup (Day 1)**
- Rails 8 + PostgreSQL + Cloudinary + Solid Cache/Queue
- Bootstrap 5, ActionText, ImportMap, Stimulus
- Rubocop + GitHub Actions CI

**Authentication (Day 2)**
- Devise + devise-jwt: JWT lưu vào httpOnly cookie, revoke bằng JTIMatcher (jti field)
- Google OAuth2 (omniauth-google-oauth2)
- Email confirmation + password reset (letter_opener dev)
- Role enum: student / teacher / admin

**Authorization (Day 3)**
- Pundit policies: CoursePolicy, ExamPolicy, QuestionPolicy, CommentPolicy, UserPolicy
- Quy tắc: admin/teacher CRUD, student chỉ read; draft chỉ author xem

### Module 4: User Profile & Dashboard (Days 3–4)

- Avatar upload → Cloudinary (auto resize/crop, không cần CropperJS)
- Đổi mật khẩu (yêu cầu current_password)
- Soft delete account (Discard gem, deleted_at)
- ExamPlan CRUD: target score, exam date, is_active
- StudyDashboard: tổng bài làm, giờ luyện tập, điểm trung bình, streak
- Heatmap Calendar (cal-heatmap JS) — API endpoint JSON theo ngày
- Countdown widget đếm ngày đến exam_plan active nhất
- Chart.js Line chart: điểm 20 attempts gần nhất theo thời gian

### Module 5–7: Nội dung Admin — Course, Exam, Section, Question (Days 5–7)

**Course CRUD (Admin)**
- title, description, slug, course_type, level, is_premium, thumbnail (Cloudinary)
- Student view: filter free/premium, level, course_type

**Exam CRUD (Admin)**
- Draft/Publish toggle, preview mode, slug SEO
- Student view: lock icon nếu premium + chưa subscribe

**Section Builder**
- Reading section: Trix rich text passage
- Listening section: upload audio MP3 → Cloudinary raw upload
- Drag-drop sắp xếp sections (SortableJS + PATCH order_index)

**Question Builder**
- Multiple Choice: allow_multiple boolean, dynamic add/remove answers (Stimulus)
- Fill in the Blank: `[BLANK]` placeholder, case-insensitive grading
- Matching: dynamic pairs (left ↔ right), explanation từng cặp
- Drag-drop sắp xếp questions (SortableJS)
- is_correct checkbox + explanation cho từng answer

### Module 8: Search & Filter (Day 8)

- Ransack search: title, course_type, is_premium, level, sort (newest/most_attempts/avg_score)
- Tag filter: multi-select theo category (skill/part/question_type) — JOIN qua taggings
- URL state persistence → bookmark/share filter
- Kaminari pagination với Bootstrap 5 custom views

### Module 9–12: Làm bài (Days 9–12)

**Split-screen + Timer (Day 9)**
- CSS flexbox: left panel (passage) + right panel (questions)
- Drag divider (ResizeObserver + mouse events)
- Mobile fallback: Bootstrap tabs (Passage tab / Questions tab)
- Stimulus countdown timer: tick/giây, warning 5 phút, lưu time_remaining vào localStorage
- Auto-submit khi hết giờ → status=timed_out
- Question partials: `_multiple_choice`, `_fill_blank`, `_matching`
- Question navigation sidebar: màu answered/bookmarked/unanswered

**Highlight + Note + Bookmark (Day 10)**
- Selection API + Range API: tính start/end offset trong passage
- Floating toolbar: màu highlight (yellow/green/pink), Add Note, Cancel
- Save via AJAX → re-render `<mark>` tags trong passage
- Restore highlights khi load trang (walk DOM theo offset)
- Note tooltip khi hover, inline edit note content
- Bookmark câu hỏi: AJAX toggle, update sidebar

**Audio Player — Listening (Day 11)**
- HTML5 Audio API, custom UI (ẩn default element)
- Điều khiển: Play/Pause, Stop, Skip ±10s, Volume slider, Mute
- Playback rate: 0.5x / 0.75x / 1x / 1.25x / 1.5x
- Seekable progress bar (click/drag), buffered + played progress
- Sticky player (CSS position sticky) — không che passage khi scroll
- Keyboard shortcuts: Space (play/pause), ←/→ (seek ±10s), +/- (rate)
- Loading state + error handling

**Submit & Chấm điểm (Day 12)**
- GradingService (service object):
  - Multiple Choice: so sánh selected answer_ids với is_correct, hỗ trợ multi-answer
  - Fill Blank: `answer.downcase.strip == user_answer.downcase.strip`
  - Matching: so sánh matched_pairs hash với correct pairs
- Lưu vào ExamAttempt: score, correct_count, actual_duration_seconds, status=submitted
- Update StudyActivity sau submit
- Trang kết quả: tổng quan (điểm, tỷ lệ %, thời gian, breakdown theo section)
- Trang kết quả chi tiết: đáp án user (highlight đỏ/xanh), explanation từng câu

### Module 13–14: Tra từ điển & Comment (Days 13–14)

**Tra từ vựng (Day 13)**
- DictionaryService → dictionaryapi.dev (word, phonetic IPA, meanings, examples)
- Trigger: mouseup trên trang kết quả → AJAX lookup
- Floating popup: từ, phiên âm, loại từ, nghĩa, ví dụ; loading + not found state
- Save word → SavedWord model (user_id + word unique)
- Vocabulary page: danh sách, search, filter, delete; nguồn exam

**Comment System (Day 14)**
- Polymorphic commentable (Exam)
- Nested: parent_id (1 cấp indent), pinned comments lên đầu
- Reply: inline form (Turbo Frame)
- Edit/Delete: inline edit, soft delete is_deleted → hiển thị [deleted]
- Pin (Admin/Teacher): is_pinned, pinned_by_id, badge 📌
- Like: AJAX toggle CommentLike (user + comment unique)
- Kaminari pagination (10/page)

### Module 15–16: Payment & Email Jobs (Days 15–16)

**Stripe Payment (Day 15)**
- 3 plans: monthly / quarterly / yearly
- Stripe Checkout Session → redirect → webhook
- Webhook events: `checkout.session.completed`, `invoice.payment_failed`, `customer.subscription.deleted`
- Premium gate: before_action kiểm tra active subscription → redirect pricing
- Order history, Pricing page UI

**Email & Background Jobs (Day 16)**
- ActionMailer + SendGrid/Mailgun
- Emails: Welcome, Reset Password, Payment Confirmation, Subscription Expiry Warning
- Solid Queue background jobs với retry config
- WeeklyStudyReminderJob: users chưa làm bài 7 ngày
- ExamPlanReminderJob: exam_date còn 30/7/1 ngày
- Cron scheduler: Weekly reminder (Monday 8AM), ExamPlan reminder (daily 9AM)
- Solid Queue Web UI tại `/admin/solid_queue` (chỉ admin)

### Module 17–18: Admin & Polish (Days 17–18)

**Admin Dashboard (Day 17)**
- Layout riêng với sidebar, breadcrumbs
- Stats cards: tổng users, new users, tổng exams, lượt làm bài hôm nay, doanh thu
- User management: search/filter, đổi role, ban/unban
- Order/Subscription management + Chart.js doanh thu tháng
- Exam statistics: lượt làm, avg score, completion rate
- Comment moderation: filter, xóa vi phạm, pin/unpin
- Custom error pages (404/422/500), Flash messages auto-dismiss

**Attempt Detail & Polish (Day 18)**
- Xem lại attempt: full passage + đáp án + explanation, restore highlights
- Score comparison chart nếu làm nhiều lần
- Prevent retake khi in_progress
- Responsive audit (mobile), Loading states (Turbo Streams)
- SEO: meta tags, og:image, canonical URLs (meta-tags gem)

### Module 19–22: Testing & Quality (Days 19–22)

**Testing (Day 19)**
- RSpec setup: factory_bot, shoulda-matchers, database_cleaner, faker
- Model specs: User, Exam, Section, Question
- GradingService unit tests (MC/Fill Blank/Matching edge cases)
- Request specs: auth flow, JWT, OAuth
- Capybara: exam taking flow, payment flow
- Pundit policy specs cho từng role

**Security & Performance (Day 20)**
- Brakeman static scan
- Bullet gem: detect + fix N+1 queries (includes/eager_load)
- DB indexes: user_id (exam_attempts), question_id (user_answers), activity_date, slug
- Fragment caching (exam listing 1h), Russian doll caching, counter_cache
- Rubocop full scan + fix
- Service objects: EnrollmentService, StudyActivityUpdater, ExamPublisher
- Environment configs (development/test/production)

**UI Polish (Day 21)**
- Admin question builder: collapsible cards, color-coded types, inline validation
- Student listing: card + thumbnail + tag chips + difficulty meter + progress bar
- Exam taking: question status indicator, smooth scroll, highlight active
- Result page: animated score reveal, color-coded review, expandable explanation
- Landing page: hero, features, pricing teaser, CTA
- Dark mode toggle (CSS variables + localStorage)

**Integration Testing (Day 22)**
- System specs: Auth, Exam E2E, Payment E2E (Capybara)
- Bug fix sessions × 2
- Cross-browser: Chrome, Firefox, Safari (Audio API, Selection API)
- Accessibility: keyboard navigation, ARIA labels, color contrast

---

## 5. Kế hoạch 25 ngày

| Day | Focus | Tổng giờ |
|---|---|---|
| 1 | Project Setup & Configuration | 7h |
| 2 | Authentication (Devise + JWT + OAuth) | 8h |
| 3 | Authorization (Pundit) + User Profile | 8h |
| 4 | Student Dashboard + Heatmap + Countdown | 8h |
| 5 | Course CRUD + Exam CRUD (Admin) | 8h |
| 6 | Section Builder — Reading (Admin) | 8h |
| 7 | Question Builder — Fill Blank + Matching | 8h |
| 8 | Search & Filter + Tag Filter UI | 8h |
| 9 | Làm bài: Split-screen + Timer | 8h |
| 10 | Highlight + Note + Bookmark | 8h |
| 11 | Audio Player — Listening Section | 8h |
| 12 | Submit + Chấm điểm + Kết quả | 8h |
| 13 | Tra từ vựng + Saved Words | 8h |
| 14 | Comment System | 8h |
| 15 | Payment — Stripe Integration | 8h |
| 16 | Email + Solid Queue Jobs | 8h |
| 17 | Admin Dashboard + User Management | 8h |
| 18 | Attempt Detail + Polish Exam Flow | 8h |
| 19 | Testing — Models + Critical Flows | 8h |
| 20 | Security + Performance + Refactor | 8h |
| 21 | UI Polish — Exam Builder + Student UX | 8h |
| 22 | Integration Testing + Bug Fixes | 8h |
| 23 | Production Setup + Deployment | 8h |
| 24 | Seed Data + Documentation + Final QA | 8h |
| 25 | Final Polish + Deploy + Launch | 5h |
| **Tổng** | | **196h** |

---

## 6. Hướng dẫn Setup & Deployment

### Local Setup

```bash
# Yêu cầu: Ruby 3.3.5, PostgreSQL 15, Node.js
git clone <repo>
cd edupass
bundle install
cp .env.example .env          # điền credentials
rails db:create db:migrate db:seed
rails server
```

### Biến môi trường (.env)

```env
DATABASE_URL=postgresql://...
SECRET_KEY_BASE=...
DEVISE_JWT_SECRET_KEY=...

# Cloudinary
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Google OAuth
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

# Stripe
STRIPE_PUBLISHABLE_KEY=...
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...

# Email (SendGrid)
SENDGRID_API_KEY=...
```

### Chạy tests

```bash
bundle exec rspec               # tất cả tests
bundle exec rspec spec/models   # chỉ model specs
bundle exec rubocop             # lint
bundle exec brakeman            # security scan
```

### Seed data

```bash
rails db:seed
# Tạo: 1 admin, 3 teachers, 10 students
# 2 courses (IELTS/TOEIC), 4 exams (2 reading, 2 listening), 30+ questions
# Tags đầy đủ theo category, sample attempts, comments, saved_words
```

### Docker (Development)

```bash
docker-compose up
# Services: web (Rails), postgres, solid_cache, solid_queue worker
```

### Production Deployment (Heroku/Render)

```bash
# Procfile
web:    bundle exec puma -C config/puma.rb
worker: bundle exec rake solid_queue:work

# Deploy
git push heroku main
heroku run rails db:migrate
heroku run rails db:seed
```
