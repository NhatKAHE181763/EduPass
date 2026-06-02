class RecordStudyActivity

    def self.call(user:, duration: 0, is_exam: false, date: Date.current)
        new(user, duration, is_exam, date).call
    end

    def initialize(user, duration, is_exam, date)
        @user = user
        @duration = duration
        @is_exam = is_exam
        @date = date
    end

    def call
        activity = @user.study_activities.find_or_initialize_by(activity_date: @date)
        activity.total_duration_seconds += @duration
        activity.exam_attempts_count += 1 if @is_exam
        
        activity.save!

        activity
    rescue StandardError => e
        Rails.logger.error "Failed to record study activity: #{e.message}"
        false
    end
end