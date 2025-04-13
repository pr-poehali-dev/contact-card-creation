
import SimpleContactCard from "@/components/SimpleContactCard";

export default function Index() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Контакты</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SimpleContactCard 
          name="Иван Петров" 
          phone="+7 (999) 123-45-67" 
          email="ivan@example.com"
        />
        
        <SimpleContactCard 
          name="Елена Сидорова" 
          phone="+7 (999) 765-43-21" 
          email="elena@example.com"
        />
        
        <SimpleContactCard 
          name="Алексей Иванов" 
          phone="+7 (999) 555-55-55" 
          email="alexey@example.com"
        />
      </div>
    </div>
  );
}
