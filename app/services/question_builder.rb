class QuestionBuilder
  def self.build(section, question_type)
    question = section.questions.build(question_type: question_type)

    strategy_class = "QuestionBuilder::#{question_type.to_s.camelize}".safe_constantize

    if strategy_class.respond_to?(:initialize_fields)
      strategy_class.initialize_fields(question)
    end

    question
  end

  class MultipleChoice
    def self.initialize_fields(question)
      4.times { question.answers.build }
    end
  end

  class FillBlank
    def self.initialize_fields(question)
      1.times { question.answers.build(is_correct: true) }
    end
  end

  class Matching
    def self.initialize_fields(question)
      4.times { question.matching_pairs.build }
    end
  end
end
