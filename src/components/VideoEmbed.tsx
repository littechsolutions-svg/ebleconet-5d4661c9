const VideoEmbed = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">
          Watch the Full Clip – Dr. Bruce Lipton on the Subconscious Mind
        </h2>
        
        <div className="relative w-full bg-card border border-border rounded-3xl overflow-hidden shadow-2xl glow-card" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/aMC6l8x6HI8"
            title="Dr. Bruce Lipton on the Subconscious Mind"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoEmbed;
