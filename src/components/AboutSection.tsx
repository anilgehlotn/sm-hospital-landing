import doctorsTeam from "@/assets/doctors-team.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={doctorsTeam}
            alt="SM Hospital Doctors Team"
            loading="lazy"
            width={960}
            height={640}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            We are more than just a hospital, we are your healthcare partner
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At SM Hospital, we believe in providing compassionate, patient-centered care. Our team of experienced doctors and
            healthcare professionals are committed to delivering the highest standard of medical services to the community of
            Nayandahalli, Bengaluru and beyond.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With modern facilities, affordable pricing, and a focus on preventive care, we ensure every patient feels cared for
            from the moment they walk through our doors.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
