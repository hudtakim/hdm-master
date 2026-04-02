export default function Stats() {
  const data = [
    { value: "100+", label: "Clients Served" },
    { value: "5+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm grid md:grid-cols-4 text-center py-10">
          
          {data.map((item, i) => (
            <div key={i} className="border-r last:border-none">
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.label}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}