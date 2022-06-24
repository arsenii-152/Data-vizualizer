@prototypes_data = [
  {
    name: 'First',
    description: 'Trying to randomise and show font (done)'
  },
  {
    name: 'Second',
    description: 'Trying to randomise colors (done)'
  },
  {
    name: 'Third',
    description: 'Trying to add a button (done)'
  },
  {
    name: 'Fourth',
    description: 'Trying to add a fade generator with buttons (done) '
  },
  {
    name: 'Пятый',
    description: 'Кириллические шрифты'
  },
  {
    name: 'Новый первый',
    description: 'начало'
  }
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype with id #{prototype.id} just created"
  end
end

def destroy_prototypes
  @prototypes.destroy
end

seed
