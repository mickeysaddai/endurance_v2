json.extract! @activity, :user_id, :activity_type, :distance, :date, :time, :description, :heartrate, :duration, :equipment_type, :calories
json.user @activity.user.username