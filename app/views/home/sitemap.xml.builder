xml.instruct! :xml, version: "1.0"
xml.urlset xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" do
  xml.url do
    xml.loc root_url
    xml.changefreq "daily"
    xml.priority "1.0"
  end

  @courses.each do |course|
    xml.url do
      xml.loc course_url(course)
      xml.lastmod course.updated_at.strftime("%Y-%m-%d")
      xml.changefreq "weekly"
      xml.priority "0.8"
    end
  end

  @exams.each do |exam|
    xml.url do
      xml.loc exam_url(exam)
      xml.lastmod exam.updated_at.strftime("%Y-%m-%d")
      xml.changefreq "weekly"
      xml.priority "0.7"
    end
  end
end
