class StudyActivityUpdater
  def initialize(user, attempt)
    @user = user
    @attempt = attempt
  end

  def call
    return unless @attempt.submitted?

    activity = StudyActivity.find_or_initialize_by(
      user: @user,
      activity_date: Date.current
    )

    activity.exam_attempts_count += 1

    duration = @attempt.actual_duration_seconds.to_i
    activity.total_duration_seconds += duration

    activity.save!
  end
end
