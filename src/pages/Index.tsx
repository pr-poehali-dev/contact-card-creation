
import ContactCard from "@/components/ContactCard";

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Контактная информация</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContactCard 
          name="Анна Иванова"
          position="Руководитель отдела продаж"
          phone="+7 (999) 123-45-67"
          email="anna@example.com"
          address="г. Москва, ул. Примерная, 42"
        />
        <ContactCard 
          name="Петр Сидоров"
          position="Технический директор"
          phone="+7 (999) 765-43-21"
          email="petr@example.com"
          address="г. Санкт-Петербург, пр. Невский, 15"
          avatarUrl="/placeholder.svg"
        />
        <ContactCard 
          name="Мария Петрова"
          position="Менеджер по работе с клиентами"
          phone="+7 (999) 555-55-55"
          email="maria@example.com"
        />
      </div>
    </div>
  );
};

export default Index;
