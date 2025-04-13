
import BasicContactCard from "@/components/BasicContactCard";

export default function Index() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Контакты</h1>
      
      <div className="flex flex-col gap-3 max-w-sm">
        <BasicContactCard 
          name="Иван Петров" 
          phone="+7 (999) 123-45-67" 
        />
        
        <BasicContactCard 
          name="Елена Сидорова" 
          phone="+7 (999) 765-43-21" 
        />
        
        <BasicContactCard 
          name="Алексей Иванов" 
          phone="+7 (999) 555-55-55" 
        />
      </div>
    </div>
  );
}
