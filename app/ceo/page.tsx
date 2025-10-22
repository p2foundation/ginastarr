export const metadata = {
  title: "CEO Profile | Raphael Dzifa Heloo",
  description: "Meet Raphael Dzifa Heloo, Proprietor and CEO of Ginastarr Enterprise - bringing passion in entrepreneurship, real estate, and road construction since 2014.",
};

import { Award, Briefcase, GraduationCap, Heart, Languages, MapPin, Phone, User } from "lucide-react";

export default function CEOPage() {
  return (
    <section className="container py-16">
      {/* Hero Section */}
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            <User className="h-3 w-3" />
            Proprietor & CEO
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--color-foreground)]">Raphael Dzifa Heloo</h1>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
              <Phone className="h-4 w-4" />
              <span className="text-sm">0544746949</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">P.O. Box C/K563, Kanda, Accra</span>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-[var(--color-muted)] bg-white p-6">
            <h2 className="text-lg font-semibold text-[var(--color-foreground)]">Personal Profile</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Date of Birth:</span>
                <span className="font-medium">12th August, 1969</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Place of Birth:</span>
                <span className="font-medium">Accra</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Nationality:</span>
                <span className="font-medium">Ghanaian</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">Marital Status:</span>
                <span className="font-medium">Married</span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-[var(--color-muted)] bg-white p-6">
            <div className="flex items-center gap-2 text-[var(--color-primary)]">
              <Languages className="h-5 w-5" />
              <h3 className="text-base font-semibold text-[var(--color-foreground)]">Languages</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["English", "Ewe", "Ga", "Twi"].map((lang) => (
                <span key={lang} className="rounded-full bg-[var(--color-muted)] px-3 py-1 text-xs font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Placeholder Image */}
        <div className="aspect-[3/4] w-full rounded-xl border-2 border-[var(--color-muted)] bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 shadow-sm flex items-center justify-center">
          <div className="text-center p-8">
            <User className="h-32 w-32 mx-auto text-[var(--color-muted-foreground)]/30" />
            <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">Profile Photo</p>
          </div>
        </div>
      </div>

      {/* Career Objective */}
      <div className="mt-12 rounded-xl border border-[var(--color-muted)] bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 p-6 md:p-8">
        <div className="flex items-start gap-3">
          <Award className="h-6 w-6 text-[var(--color-primary)] mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-foreground)]">Career Objective</h2>
            <p className="mt-2 text-[var(--color-muted-foreground)]">
              To apply my passion in entrepreneurship, experience in real estate, and road construction to nurture and grow a business.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Education */}
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]">
            <GraduationCap className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Education</h3>
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold text-[var(--color-foreground)]">Diploma in Mechanical Engineering</div>
            <div className="text-sm text-[var(--color-muted-foreground)] mt-1">Government Technical Training Centre</div>
            <div className="text-sm text-[var(--color-muted-foreground)]">Care International Ghana</div>
            <div className="text-xs text-[var(--color-muted-foreground)] mt-2">1990 - 1993</div>
          </div>
        </div>

        {/* Area of Experience */}
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]">
            <Briefcase className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Area of Experience</h3>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Worked as a mechanic in various mechanic shops
            </p>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Driver and field officer at Care International Ghana
            </p>
          </div>
        </div>
      </div>

      {/* Current Employment */}
      <div className="mt-6 rounded-lg border-2 border-[var(--color-primary)]/20 bg-white p-6">
        <div className="flex items-center gap-2 text-[var(--color-primary)]">
          <Award className="h-5 w-5" />
          <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Current Employment</h3>
        </div>
        <div className="mt-4">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            Proprietor of <span className="font-semibold text-[var(--color-foreground)]">Ginastarr Enterprise</span>
          </p>
          <p className="text-xs text-[var(--color-muted-foreground)] mt-2">
            Registered on 16<sup>th</sup> July, 2014
          </p>
        </div>
      </div>

      {/* Attributes & Hobbies */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]">
            <Heart className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Attributes</h3>
          </div>
          <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
            A Christian who is helpful, kind and good to people.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--color-muted)] bg-white p-6">
          <div className="flex items-center gap-2 text-[var(--color-primary)]">
            <Award className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Hobbies</h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--color-muted)] bg-white px-3 py-1 text-sm">Travelling</span>
            <span className="rounded-full border border-[var(--color-muted)] bg-white px-3 py-1 text-sm">Playing Football</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-xl border border-[var(--color-muted)] bg-white p-6 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let&apos;s Work Together</h3>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
              Connect with our leadership team to discuss your construction, procurement, or logistics needs.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-secondary)]/90 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="tel:0544746949" 
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-muted)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-foreground)] hover:bg-[var(--color-muted)]/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
