"use client";

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Section6 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Définir les animations des chiffres et des couleurs
  const numberProps = useSpring({
    from: { number: 0 },
    number: inView ? 176 : 0,
    config: { duration: 2000 },
  });

  const percentageProps = useSpring({
    from: { number: 0 },
    number: inView ? 80 : 0,
    config: { duration: 2000 },
  });

  const campusProps = useSpring({
    from: { number: 0 },
    number: inView ? 3 : 0,
    config: { duration: 2000 },
  });

  const partnersProps = useSpring({
    from: { number: 0 },
    number: inView ? 5 : 0,
    config: { duration: 2000 },
  });

  // Animation des couleurs pour les chiffres
  const colorProps = useSpring({
    from: { color: 'gray' },
    to: { color: inView ? 'red' : 'gray' },
    config: { duration: 2000 },
  });

  return (
    <section ref={ref} className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-black text-2xl font-bold sm:text-3xl lg:text-4xl">
          Quelques chiffres de école241
        </h1>
      </div>
      <div
        className="flex flex-wrap justify-around items-center mt-14 bg-cover bg-center h-80 rounded-lg"
        style={{ backgroundImage: "url('/arrière plan.jpg')" }}
      >
        {[
          { value: numberProps.number.to(n => Math.floor(n)), label: 'Apprenants formés' },
          { value: percentageProps.number.to(n => `${Math.floor(n)}%`), label: 'Insertion professionnelle' },
          { value: campusProps.number.to(n => Math.floor(n)), label: 'Campus' },
          { value: partnersProps.number.to(n => `+${Math.floor(n)}`), label: 'Partenaires' }
        ].map((stat, index) => (
          <animated.div
            key={index}
            className="flex flex-col items-center text-center p-4 md:w-1/2 lg:w-1/4"
          >
            <animated.h2 
              className="text-3xl font-bold sm:text-4xl lg:text-5xl"
              style={{ color: colorProps.color }} // Application de la couleur animée
            >
              {stat.value}
            </animated.h2>
            <p className="text-sm sm:text-base lg:text-lg">{stat.label}</p>
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
