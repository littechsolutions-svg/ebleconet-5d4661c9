const Footer = () => {
  const links = [
    { name: "About the Trybe", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Contact Support", href: "#support" },
    { name: "Terms and Conditions", href: "#terms" },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ebleco Trybe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
