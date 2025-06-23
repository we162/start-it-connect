
import { useState } from "react";
import { Building2, Users, TrendingUp, Award, Star, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Companies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const partnerCompanies = [
    {
      name: "TechCorp Solutions",
      category: "Software Development",
      logo: "TC",
      employees: "500-1000",
      description: "Leading software development company specializing in enterprise solutions.",
      openings: 12,
      color: "bg-blue-600"
    },
    {
      name: "DataTech Industries",
      category: "Data Analytics",
      logo: "DT",
      employees: "200-500",
      description: "Data analytics and AI-driven solutions for businesses.",
      openings: 8,
      color: "bg-green-600"
    },
    {
      name: "CloudFirst Technologies",
      category: "Cloud Services",
      logo: "CF",
      employees: "1000+",
      description: "Cloud infrastructure and migration services provider.",
      openings: 15,
      color: "bg-purple-600"
    },
    {
      name: "Innovation Labs",
      category: "Software Development",
      logo: "IL",
      employees: "100-200",
      description: "Startup incubator and product development company.",
      openings: 6,
      color: "bg-orange-600"
    },
    {
      name: "NetSolutions Ltd",
      category: "Networking",
      logo: "NS",
      employees: "500-1000",
      description: "Network infrastructure and cybersecurity solutions.",
      openings: 10,
      color: "bg-red-600"
    },
    {
      name: "Global IT Services",
      category: "IT Support",
      logo: "GS",
      employees: "2000+",
      description: "Comprehensive IT support and managed services provider.",
      openings: 20,
      color: "bg-indigo-600"
    }
  ];

  const successStories = [
    {
      student: "Rahul Sharma",
      company: "TechCorp Solutions",
      position: "Software Engineer",
      salary: "₹8.5 LPA",
      testimonial: "The training was comprehensive and the placement support was excellent. I'm now working on cutting-edge projects!"
    },
    {
      student: "Priya Patel",
      company: "DataTech Industries",
      position: "Data Analyst",
      salary: "₹7.2 LPA",
      testimonial: "The data analytics course was perfect for transitioning my career. Great mentorship throughout the journey."
    },
    {
      student: "Amit Kumar",
      company: "CloudFirst Technologies",
      position: "Cloud Engineer",
      salary: "₹9.8 LPA",
      testimonial: "From zero cloud knowledge to becoming a certified cloud engineer. Amazing transformation in just 6 months!"
    }
  ];

  const placementStats = [
    { metric: "Average Package", value: "₹2.5 LPA", icon: TrendingUp },
    { metric: "Highest Package", value: "₹8 LPA", icon: Award },
    { metric: "Companies Visited", value: "50+", icon: Building2 },
    { metric: "Students Placed", value: "100+", icon: Users }
  ];

  const categories = ["All", "Software Development", "Data Analytics", "Cloud Services", "Networking", "IT Support"];

  const filteredCompanies = selectedCategory === "All" 
    ? partnerCompanies 
    : partnerCompanies.filter(company => company.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Our Partner Companies
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We've built strong partnerships with leading companies across various industries to provide the best placement opportunities for our students.
          </p>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Placement Statistics</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner Companies</h2>
            <p className="text-xl text-gray-600">Discover opportunities with our trusted partners</p>
          </div>

          {/* Category Filter */}
          {/* <div className="flex justify-center mb-8 overflow-x-auto">
            <div className="flex gap-2 p-1 bg-white rounded-lg shadow-sm border min-w-max">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={category === selectedCategory ? "bg-blue-600 text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div> */}

          {/* Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* {filteredCompanies.map((company, index) => (
              <Card key={company.name} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`${company.color} text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center`}>
                      {company.logo}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{company.name}</CardTitle>
                      <CardDescription>{company.category}</CardDescription>
                    </div>
                    <Badge variant="secondary">{company.openings} openings</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{company.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{company.employees} employees</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Jobs <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our successful alumni</p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={story.student} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <CardTitle className="text-lg">{story.student}</CardTitle>
                  <CardDescription>{story.position} at {story.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {story.salary}
                  </div>
                  <p className="text-gray-600 italic">"{story.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl mb-8 text-blue-100">
            Looking to hire skilled IT professionals? Join our network of partner companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Companies;
