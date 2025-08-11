import { education } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Education = () => {
  return (
    <section id="Education" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Education & Certifications"
          sub="🎓 My learning journey and achievements"
        />

        <div className="mt-16 w-full">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 pb-4 px-4" style={{ width: `${education.length * 600}px` }}>
              {education.map((edu, index) => (
                <div key={index} className="flex-shrink-0 w-[580px]">
                  <GlowCard card={edu} index={index}>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img 
                            src={edu.imgPath} 
                            alt={edu.institution}
                            className="w-full h-full object-contain rounded"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl leading-tight">{edu.title}</h3>
                          <p className="text-white-50 text-base mt-1">{edu.institution}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-white-80 text-base leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator dots */}
          <div className="flex justify-center mt-6 gap-2">
            {education.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-white-30 opacity-50"
              ></div>
            ))}
          </div>
        </div>
        
        {/* Add custom scrollbar styles */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Education;