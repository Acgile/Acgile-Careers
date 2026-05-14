import { benefits, employeeTestimonials } from "@/lib/localData";

import AnimatedSection from "@/components/AnimatedSection";
import PageTitle from "@/components/PageTitle";
import BenefitCard from "@/components/BenefitCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionTitle from "@/components/SectionTitle";
import JobsList from "@/components/JobsList";

const CareersPage = () => {
  const keywords = [
    { text: "Dynamic Growth", color: "#00B4F1" },
    { text: "Collaborative Culture", color: "#FD5E3B" },
    { text: "Learning Opportunities", color: "#926CFF" },
    { text: "Career Advancement", color: "#FD8C3B" },
  ];
  return (
    <>
      {/* Page Title */}
      <AnimatedSection className="container my-[50px]">
        <PageTitle
          titleHighlight="Personal Development"
          title="Careers at Acgile"
          keywords={keywords}
        />
      </AnimatedSection>

      {/* Current Openings */}
      <AnimatedSection className="container mt-[30px] mb-[50px] t:mt-[50px] t:mb-[60px] sd:mt-[70px] sd:mb-[90px]">
        <JobsList />
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="mt-[30px] sd:mt-[90px] ld:mt-[150px] bg-grey-fe py-[60px]">
        <div className="container">
          <SectionTitle
            caption="Employee Centric"
            captionBg="white"
            title={["Perks and", "Benefits"]}
            description="At Acgile, we believe that our team is our greatest asset, and we are always on the lookout for talented individuals to join us on our exciting journey. Working with Acgile means becoming part of a dynamic, innovative, and collaborative environment where your skills are valued and your career can flourish."
            descriptionClasses="max-w-[710px] sd:max-w-[1340px] mb-[30px] t:mb-[40px] sd:mb-[60px]"
          />
          <div className="my-[30px] t:my-[40px] sd:my-[70px] grid grid-cols-1 t:grid-cols-2 sd:grid-cols-4 gap-[30px] sd:gap-[40px]">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                image={benefit.image}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Employee Testimonials */}
      <AnimatedSection className="container my-[50px] t:mb-[70px] sd:mt-[70px] sd:mb-[100px]">
        <SectionTitle
          caption="Diversity"
          title={["Employees", "Testimonials"]}
          description="Discover what our team members have to say about their journey with Acgile. From collaborative environments to career growth opportunities, our employees share how Acgile cultivates a culture of innovation and excellence."
          descriptionClasses="max-w-[580px] sd:max-w-[970px] mb-[30px] t:mb-[40px] sd:mb-[60px]"
        />
        <div className="mt-[40px] t:mt-[50px] sd:mt-[60px]">
          <TestimonialCarousel testimonials={employeeTestimonials} />
        </div>
      </AnimatedSection>
    </>
  );
};

export default CareersPage;
