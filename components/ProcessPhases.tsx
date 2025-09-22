interface Problem {
  id: number;
  title: string;
  icon: string;
  description: string;
  isSolution?: boolean;
}

const ProblemsSection = () => {
  const problems: Problem[] = [
    {
      id: 1,
      title: "The Overwhelm",
      icon: "😵‍💫",
      description: "1,847 pages to study. Where do I even begin?",
    },
    {
      id: 2,
      title: "The Plateau",
      icon: "📈",
      description: "Same. Score. Again. What am I doing wrong?",
    },
    {
      id: 3,
      title: "The Loneliness",
      icon: "😔",
      description: "Stuck on question 47. Who can I even ask?",
    },
    {
      id: 4,
      title: "The Confusion",
      icon: "🤔",
      description:
        "Reading, Writing, Math, Grammar... Which one actually matters?",
    },
    {
      id: 5,
      title: "Lumist Solves It All",
      icon: "✨",
      description:
        "Personalized learning paths, instant help, and clear progress tracking. Ready to shine?",
      isSolution: true,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 animate-fade-in">
            the problems
          </h2>
        </div>

        {/* Description Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 opacity-100 animate-fade-in-up">
          <p className="text-sm uppercase tracking-wider text-gray-600">
            (We understand your struggles)
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            Every test taker faces these challenges. You&apos;re not alone in
            feeling overwhelmed, stuck, or confused. These are real problems
            that require real solutions.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="space-y-20 relative">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              className={`flex flex-col items-center justify-center opacity-100 animate-fade-in-up sticky top-24 mt-24 rounded-2xl p-12 text-center ${
                problem.isSolution
                  ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 text-white shadow-2xl"
                  : "bg-white text-gray-900 shadow-lg"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Problem Icon */}
              <div className="text-8xl mb-6">{problem.icon}</div>

              {/* Problem Title */}
              <h3
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  problem.isSolution ? "text-white" : "text-gray-900"
                }`}
              >
                {problem.title}
              </h3>

              {/* Problem Description */}
              <div className="w-20 h-px bg-current opacity-30 mb-6"></div>
              <p
                className={`text-lg md:text-xl leading-relaxed max-w-2xl ${
                  problem.isSolution ? "text-white/90" : "text-gray-700"
                }`}
              >
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProblemsSection;
