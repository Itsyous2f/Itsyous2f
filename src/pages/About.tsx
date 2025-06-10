
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Building responsive web applications with React and Next.js"
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      description: "Created custom websites using HTML, CSS, and JavaScript"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Python", "C#", "Node.js", "Express", "Flask"] },
    { category: "Tools", items: ["Git", "VSCode", "Figma", "Replit", "Firebase", "Supabase"] }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
        >
          About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate frontend developer with a love for creating beautiful, functional web experiences. 
                  With expertise in modern web technologies, I enjoy turning complex problems into simple, elegant solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">What I Do</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I specialize in frontend development, creating responsive and interactive web applications. 
                  My focus is on user experience, performance, and clean, maintainable code.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I work with cutting-edge technologies like React, Next.js, and Tailwind CSS to build 
                  modern web solutions that meet both user needs and business goals.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;
