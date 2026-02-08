"use client";

export default function Classes() {
  const classes = [
    { name: 'Beginner Karate', age: '5-10', description: 'Learn the basics of karate in a fun and engaging environment.' },
    { name: 'Intermediate Karate', age: '11-15', description: 'Build on your skills and learn advanced techniques.' },
    { name: 'Advanced Karate', age: '16+', description: 'Master the art of karate with our expert instructors.' },
  ];

  return (
    // Classes Section
    <section id="classes" className="px-12 py-24 bg-gray-100 max-md:px-6 max-md:py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black max-md:text-3xl">Our Classes</h2>
        <div className="grid gap-8 mt-8 grid-cols-3 max-md:grid-cols-1">
          {classes.map((cls, index) => (
            <article key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-red-500">{cls.name}</h3>
              <p className="mt-2 text-sm text-gray-600">Age Group: {cls.age}</p>
              <p className="mt-4 text-gray-700">{cls.description}</p>
              <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600">
                Book Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
