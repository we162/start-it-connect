
import { Award, Users, Target, Zap, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Comprehensive Training Programs",
      description: "Industry-relevant courses designed by experts covering latest technologies and frameworks."
    },
    {
      icon: Users,
      title: "Placement Assistance",
      description: "Dedicated placement cell with strong industry connections to secure the best opportunities."
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Focus on both technical and soft skills to make students industry-ready professionals."
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Personalized mentoring and career counseling to help students choose the right path."
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Partner Companies" },
    { number: "5+", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            About Start IT Training & Placement Wing
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Empowering students and professionals with cutting-edge IT skills and connecting them with leading companies for successful career placements.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="animate-scale-in">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To bridge the gap between academia and industry by providing world-class IT training programs that equip students with the skills, knowledge, and confidence needed to excel in today's competitive job market.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading IT training and placement institution that transforms lives by creating skilled professionals who drive innovation and growth in the technology sector across India and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your IT career journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">Numbers that speak for our success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Key differentiators that set us apart</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 animate-fade-in">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
                <Award className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry-Expert Trainers</h3>
                <p className="text-gray-600">Learn from professionals with years of real-world experience in top tech companies.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strong Industry Network</h3>
                <p className="text-gray-600">Extensive partnerships with leading companies ensuring high placement opportunities.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Updated Curriculum</h3>
                <p className="text-gray-600">Course content regularly updated to match current industry trends and requirements.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Attention</h3>
                <p className="text-gray-600">Small batch sizes ensuring individual attention and customized learning paths.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
