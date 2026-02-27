import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ReservationSection = () => {
  return (
    <section id="reservation" className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Book Your Table</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Make a <span className="italic text-gold-gradient">Reservation</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Join us for an unforgettable evening. We recommend booking at least 48 hours in advance.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Full Name" className="bg-secondary border-border py-6 font-body" />
            <Input placeholder="Phone Number" className="bg-secondary border-border py-6 font-body" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input type="date" className="bg-secondary border-border py-6 font-body" />
            <Input type="time" className="bg-secondary border-border py-6 font-body" />
          </div>
          <Input placeholder="Number of Guests" className="bg-secondary border-border py-6 font-body" />
          <Button variant="default" size="lg" className="w-full tracking-widest uppercase text-sm py-6 mt-4">
            Reserve Now
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
