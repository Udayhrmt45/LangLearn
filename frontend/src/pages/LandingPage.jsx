import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1f1d1d] text-[#e2e8f0]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#3ebc96]">Lang</span>
          <span className="text-2xl font-bold">Learn</span>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/login" className="text-[#e2e8f0] hover:text-[#3ebc96] font-medium transition duration-300 text-sm sm:text-base">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-[#3ebc96] text-[#1f1d1d] px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-[#70c217] transition duration-300 text-sm sm:text-base"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e2e8f0] leading-tight mb-4 sm:mb-6">
            Master New Languages <br />
            <span className="text-[#3ebc96]">Naturally</span>
          </h1>
          <p className="text-base sm:text-lg text-[#e2e8f0] mb-6 sm:mb-8">
            Immerse yourself in real conversations with native speakers. Our AI-powered platform makes language learning
            engaging, effective, and fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/signup"
              className="bg-[#3ebc96] text-[#1f1d1d] px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-[#70c217] transition duration-300 text-center text-sm sm:text-base"
            >
              Start Learning Free
            </Link>
            <Link
              to="/login"
              className="border border-[#3ebc96] text-[#3ebc96] px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-[#1f1d1d] hover:text-[#70c217] transition duration-300 text-center text-sm sm:text-base"
            >
              I Have an Account
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0">
          <img
            src="/landingPic1.png"
            alt="Language learning"
            className="w-full h-auto max-h-[400px] object-contain rounded-lg border-2 border-[#3ebc96]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1f1d1d] py-16 border-t border-[#3ebc96]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#e2e8f0] mb-12 sm:mb-16">Why Choose LangLearn?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "💬",
                title: "Real Conversations",
                description: "Practice with native speakers through voice and video calls.",
              },
              {
                icon: "🎉",
                title: "Fun Learning Experience",
                description: "Engage in engaging conversations and improve your vocabulary.",
              },
              {
                icon: "🌎",
                title: "Multiple Languages",
                description: "Learn Spanish, French, Mandarin, Japanese and more.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-[#2a2828] p-6 rounded-xl hover:shadow-lg hover:shadow-[#3ebc96]/20 transition duration-300 border border-[#3ebc96]/30">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#e2e8f0]">{feature.title}</h3>
                <p className="text-[#e2e8f0]/80 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#1f1d1d] to-[#2a2828] border-t border-[#3ebc96]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0] mb-4 sm:mb-6">Ready to Start Your Language Journey?</h2>
          <p className="text-base sm:text-xl text-[#e2e8f0]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of learners mastering new languages with our innovative platform.
          </p>
          <Link
            to="/signup"
            className="bg-[#3ebc96] text-[#1f1d1d] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:bg-[#70c217] transition duration-300 inline-block text-sm sm:text-base"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a2828] text-[#e2e8f0] py-12 border-t border-[#3ebc96]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-2xl font-bold text-[#3ebc96]">Lang</span>
                <span className="text-2xl font-bold">Learn</span>
              </div>
              <p className="mt-2 text-[#e2e8f0]/60 text-sm sm:text-base">Making language learning accessible to everyone.</p>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <Link to="/privacy" className="text-[#e2e8f0]/60 hover:text-[#3ebc96] transition duration-300 text-sm sm:text-base">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#e2e8f0]/60 hover:text-[#3ebc96] transition duration-300 text-sm sm:text-base">
                Terms
              </Link>
              <Link to="/contact" className="text-[#e2e8f0]/60 hover:text-[#3ebc96] transition duration-300 text-sm sm:text-base">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-[#3ebc96]/30 mt-8 pt-8 text-center text-[#e2e8f0]/60 text-sm sm:text-base">
            <p>© {new Date().getFullYear()} LangLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;