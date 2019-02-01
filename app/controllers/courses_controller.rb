# frozen_string_literal: true

class CoursesController < ApplicationController
  # /courses
  def index
  end

  # /courses/slug
  def show
    respond_to do |format|
      format.html
      format.js
    end
  end
end
