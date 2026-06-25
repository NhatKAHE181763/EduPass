 The backend-reviewer agent has completed a thorough review. Here's a summary of what was found:

  ---
  Review Summary
  
  Critical Issues (Fix Before Deployment)

  1. GradingService is never called — ExamAttemptsController#update ignores all submitted answers and never invokes GradingService. Every exam submission
  produces a nil score and zero user_answer rows.
  2. NoMethodError crash on question creation — QuestionPolicy#create? calls manage_questions? (plural) but the method is defined as manage_question? (singular).
  Admin question creation always crashes.
  3. Database constraint violation for fill_blank/matching questions — user_answers.answer_id is NOT NULL but grade_fill_blank and grade_matching never set it,
  causing ActiveRecord::NotNullViolation on submission.
  4. Premium exam bypass — ExamPolicy#start? only checks published?, not subscription status. Any authenticated user can POST directly to /exams/:slug/start to
  bypass the paywall.
  5. Exam attempt status manipulation — Students can POST any status value (e.g., in_progress) to reopen submitted attempts.

  High Priority

  - active_streak always returns 0 — the method has a logic bug where 0 if activities.empty? is not a return statement.
  - 80 N+1 queries per exam page load — question_bookmarks.exists? called per question in two view loops.
  - Stored XSS in highlighter_controller.js via insertAdjacentHTML with unescaped note content.
  - IDOR in reorder actions — upsert_all doesn't scope to the parent association.
  - Unbounded per_page parameter — potential DoS via per_page=1000000.
  - Race condition creating duplicate ExamAttempt records on double-click/concurrent requests.

  Medium Priority

  - TOEIC integer division scoring bug
  - Missing composite index on exam_attempts (user_id, exam_id)
  - CoursePolicy::Scope returns all courses to everyone including unpublished ones

  Positives

  - Pundit is consistently applied with verify_authorized
  - Strong parameters are properly used everywhere
  - Ransack ransackable_attributes is whitelisted on all models
  - File type validation for audio uploads is in place

  The most urgent fixes are the grading pipeline (answers being silently discarded), the policy method typo (crash on question creation), and the premium bypass
  (paywall is completely ineffective).
