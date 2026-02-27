const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl text-primary mb-4">AURUM</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            An intimate fine dining experience celebrating the art of seasonal cuisine.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Hours</h4>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>Tuesday – Saturday: 6:00 PM – 11:00 PM</p>
            <p>Sunday Brunch: 11:00 AM – 3:00 PM</p>
            <p>Monday: Closed</p>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>42 Goldleaf Avenue</p>
            <p>New York, NY 10012</p>
            <p className="text-primary">+1 (212) 555-0198</p>
            <p className="text-primary">hello@aurum.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border text-center text-muted-foreground text-xs tracking-wider">
        © 2026 Aurum. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
