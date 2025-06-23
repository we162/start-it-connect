
import { ArrowRight, Briefcase, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Solutions",
      location: "Mumbai, India",
      category: "Bachelor's",
      requirements: ["React.js", "JavaScript", "CSS"],
      type: "Full-time"
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "DataTech Industries",
      location: "Bangalore, India",
      category: "Master's",
      requirements: ["Python", "SQL", "Tableau"],
      type: "Full-time"
    },
    {
      id: 3,
      title: "Network Technician",
      company: "NetSolutions Ltd",
      location: "Delhi, India",
      category: "Diploma",
      requirements: ["Networking", "Hardware", "Troubleshooting"],
      type: "Contract"
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Innovation Labs",
      location: "Pune, India",
      category: "Bachelor's",
      requirements: ["Java", "Spring Boot", "MySQL"],
      type: "Full-time"
    },
    {
      id: 5,
      title: "Cloud Architect",
      company: "CloudFirst Technologies",
      location: "Hyderabad, India",
      category: "Master's",
      requirements: ["AWS", "Docker", "Kubernetes"],
      type: "Full-time"
    },
    {
      id: 6,
      title: "IT Support Specialist",
      company: "Global IT Services",
      location: "Chennai, India",
      category: "Diploma",
      requirements: ["Windows", "Active Directory", "Help Desk"],
      type: "Full-time"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Placed", icon: Users },
    { number: "50+", label: "Partner Companies", icon: Briefcase },
    { number: "95%", label: "Placement Rate", icon: Target },
    { number: "5+", label: "Years Experience", icon: Award }
  ];

  const categories = ["All", "Diploma", "Bachelor's", "Master's"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bridging the Gap Between
              <span className="block text-blue-600">Talent and Opportunity</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering students and professionals with world-class IT training and connecting them with leading companies for successful career placements.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Browse Jobs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Register Now
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Job Openings</h2>
            <p className="text-xl text-gray-600">Find your perfect opportunity across different education levels</p>
          </div>

          {/* Category Filter */}
          {/* <div className="flex justify-center mb-8">
            <div className="flex gap-2 p-1 bg-white rounded-lg shadow-sm border">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "ghost"}
                  size="sm"
                  className={category === "All" ? "bg-blue-600 text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div> */}

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                       Bachelor's Degree
                    </Badge>
                    <Badge variant="outline">For Technical </Badge>
                  </div>
                </CardHeader>
                <CardContent> 
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                       Bachelor's Degree
                    </Badge>
                    <Badge variant="outline">For Non-Technical </Badge>
                  </div>
                </CardHeader>
                <CardContent> 
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                       ITI and Degree Discontinued
                    </Badge>
                    <Badge variant="outline">Any Domain</Badge>
                  </div>
                </CardHeader>
                <CardContent> 
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Apply Now 
                  </Button>
                </CardContent>
              </Card>

            
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Jobs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your IT Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our comprehensive training programs and get placed in top companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Explore Training Programs
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
