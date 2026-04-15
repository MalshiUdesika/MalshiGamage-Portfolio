const Footer = () => (
  <footer className="py-8 bg-background border-t border-border">
    <div className="section-container text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Malshi Gamage. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;