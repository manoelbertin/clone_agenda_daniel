class Agenda < ApplicationRecord
  belongs_to :professional
  has_many :agenda_slots 

  accepts_nested_attributes_for :agenda_slots, reject_if: :all_blank, allow_destroy: true
end
