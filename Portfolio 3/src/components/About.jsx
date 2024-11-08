import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const services = [
  {
    title: "Web Developer",
    icon: "💻",
    description: "I create responsive and dynamic web applications using modern technologies.",
  },
  {
    title: "React Developer",
    icon: "⚛️",
    description: "Expert in React.js and its ecosystem, building scalable applications.",
  },
  {
    title: "3D Developer",
    icon: "🎮",
    description: "I bring creative 3D experiences to the web using Three.js.",
  },
  {
    title: "UI/UX Designer",
    icon: "🎨",
    description: "Creating beautiful and intuitive user interfaces with attention to detail.",
  },
];

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div className="text-5xl">{icon}</div>
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="text-secondary text-[14px] text-center">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="max-w-7xl mx-auto relative z-0 px-4 sm:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;